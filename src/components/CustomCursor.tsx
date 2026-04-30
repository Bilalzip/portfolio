import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("button, a, [role='button'], input, textarea, .cursor-hover");
      setHovering(!!interactive);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    if (isTouch) return;
    let raf: number;
    const follow = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));
      raf = requestAnimationFrame(follow);
    };
    raf = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(raf);
  }, [pos, isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          backgroundColor: "hsl(var(--warm))",
          opacity: visible ? 1 : 0,
          transform: hovering ? "scale(2)" : "scale(1)",
          boxShadow: "0 0 10px hsl(var(--warm) / 0.4)",
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border transition-all duration-200"
        style={{
          left: ringPos.x - (hovering ? 24 : 16),
          top: ringPos.y - (hovering ? 24 : 16),
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderColor: "hsl(var(--warm) / 0.3)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;