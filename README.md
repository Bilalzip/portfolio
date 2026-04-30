# Developer Portfolio

A single-page developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js.

This project is structured as a reusable personal portfolio template with sections for:

- hero
- about
- project explorer
- featured projects
- work experience
- skills
- certifications
- education
- achievements
- contact

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js with `@react-three/fiber` and `@react-three/drei`
- EmailJS for the contact form

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

## Project Structure

```text
src/
  components/         UI sections and shared components
  data/               portfolio content and section data
  hooks/              small React hooks
  lib/                utilities
  pages/              route-level pages
public/
  assets/             project videos, screenshots, resume, tech images
  profile/            profile image
index.html            SEO and social metadata
PERSONALIZATION_CHECKLIST.md
```

## Main Customization Points

### `src/data/portfolio.ts`

This is the primary content file. It contains:

- personal info
- projects
- experience
- skill categories
- certifications
- education
- achievements
- navigation items

If you are adapting this portfolio for another person, this is the first file to update.

### Hardcoded personal references outside `portfolio.ts`

Some personal data also exists directly in components and static files:

- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/FileDirectory.tsx`
- `src/pages/Index.tsx`
- `index.html`
- `public/profile/`
- `public/assets/resume/`

Those files should be reviewed during personalization.

## Environment Variables

The contact form uses EmailJS. Add these values to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are missing, the contact form will render but submissions will not send.

## Assets Expected by the Project

Place or replace these as needed:

- profile image in `public/profile/`
- resume PDF in `public/assets/resume/`
- project preview videos/screenshots in `public/assets/`
- favicon in `public/favicon.ico`

## Personalization Workflow

1. Update `src/data/portfolio.ts`.
2. Replace profile image, resume, favicon, and project media in `public/`.
3. Update metadata in `index.html`.
4. Update direct hardcoded links and names in `Hero.tsx`, `Contact.tsx`, `FileDirectory.tsx`, and `Index.tsx`.
5. Add EmailJS environment variables if the contact form should work.
6. Run `npm run build` to verify the project.

## Client Intake

Use [PERSONALIZATION_CHECKLIST.md](./PERSONALIZATION_CHECKLIST.md) as the handoff checklist for collecting everything needed from a client before adapting the site.

## Notes

- This project is built as a single-page site.
- The visual style is intentionally technical and terminal-inspired.
- Project previews support both video and image assets.
- Some current source text includes encoding issues in older content strings; review visible copy after personalization.
