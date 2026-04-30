# Personalization Checklist

This project is a portfolio/personal-brand site. To personalize it for a new person, collect the following items before editing the codebase.

Most content lives in `src/data/portfolio.ts`, but some personal details are also hardcoded in components, `index.html`, `.env`, and `public/`.

## Required from the client

### 1. Core identity

- Full name
- Preferred display name
- Professional title
- Short hero tagline
- Location
- Email address
- Phone number
- Personal domain or primary website URL
- Short bio/about paragraph

Used in:
- `src/data/portfolio.ts`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Navbar.tsx`
- `src/pages/Index.tsx`
- `index.html`

### 2. Headshot and brand assets

- Profile/headshot image
- Favicon
- Social sharing image for Open Graph and Twitter
- Resume PDF
- Optional logo or wordmark if they do not want text-only branding

Used in:
- `public/profile/`
- `public/assets/resume/`
- `public/favicon.ico`
- `index.html`
- `src/components/Hero.tsx`

### 3. Social and public links

- LinkedIn URL
- GitHub URL
- Portfolio URL or main business site URL
- Any other public links to feature instead of the current set

Used in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `index.html`

### 4. Contact form setup

- EmailJS service ID
- EmailJS template ID
- EmailJS public key
- Recipient/display name for form emails
- Confirmation of where submitted messages should be delivered

Used in:
- `.env`
- `src/components/Contact.tsx`
- `src/vite-env.d.ts`

### 5. Featured projects

For each project to show on the site, collect:

- Project name
- Internal slug/id
- Short project category/type
- Role on the project
- Tech stack list
- Short description
- Bullet highlights
- Optional metrics
- GitHub URL
- Live URL
- Demo video or screenshot
- Whether the project is public or should omit GitHub/live links

Used in:
- `src/data/portfolio.ts`
- `src/components/Projects.tsx`
- `src/components/FileDirectory.tsx`
- `public/assets/`

### 6. Work experience

For each role, collect:

- Company name
- Role title
- Location
- Start and end dates
- 4 to 6 accomplishment bullets
- Optional internal labels if the command-style tags should stay

Used in:
- `src/data/portfolio.ts`
- `src/components/ExperienceTimeline.tsx`

### 7. Skills

- Skill category names
- Skill list under each category
- Any skills to remove because they are not core to the client's positioning

Used in:
- `src/data/portfolio.ts`
- `src/components/Skills.tsx`

### 8. Certifications

For each certification, collect:

- Certification name
- Issued date
- Optional verification code or short label
- Whether the certification section should stay at all

Used in:
- `src/data/portfolio.ts`
- `src/components/Certifications.tsx`

### 9. Education

- School/institution name
- Location
- Degree/program name
- Start and end dates
- GPA if they want it shown
- Honours/awards
- Relevant coursework list

Used in:
- `src/data/portfolio.ts`
- `src/components/Education.tsx`

### 10. Achievements / metrics

- Key numbers worth featuring
- Metric labels
- Short descriptions for each metric

Examples:
- users served
- revenue generated
- uptime
- deployments
- performance improvements
- years of experience

Used in:
- `src/data/portfolio.ts`
- `src/components/Achievements.tsx`

## Optional but recommended

### 11. SEO and metadata

- Site title
- Meta description
- Author name
- Open Graph title
- Open Graph description
- Twitter title
- Twitter description
- Canonical production domain

Used in:
- `index.html`

### 12. Branding choices

- Whether to keep the current terminal/cyber visual style
- Preferred accent colors
- Preferred tone: corporate, startup, creative, technical, minimalist
- Preferred section order
- Whether to keep the 3D hero scene

Likely touched in:
- `src/components/`
- `src/index.css`
- `tailwind.config.ts`

### 13. Navigation and section visibility

- Which sections to keep or remove
- Preferred nav labels
- Whether to show resume download
- Whether to show certifications, education, or metrics

Used in:
- `src/data/portfolio.ts`
- `src/pages/Index.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`

### 14. Footer copy

- Copyright name
- Copyright year
- Preferred tech-credit line, or confirmation to remove it

Used in:
- `src/pages/Index.tsx`

## Current hardcoded items that must be replaced

- Name references: `Mohd Bilal`, `mohd-bilal`, `mohdbilal`
- Domain reference: `codewithbilal.com`
- LinkedIn URL in `Hero.tsx` and `Contact.tsx`
- GitHub URL in `Contact.tsx`
- Resume filename and file path in `public/assets/resume/resume.pdf`
- Headshot path `public/profile/mohd-bilal.jpeg`
- SEO title, description, author, and social image URLs in `index.html`
- Email recipient name `"Mohd Bilal"` in `src/components/Contact.tsx`
- Finder path text `~/mohd-bilal/projects` in `src/components/FileDirectory.tsx`
- Footer copyright line in `src/pages/Index.tsx`

## Assets the client should send

- 1 profile photo, square or close to square
- 1 favicon
- 1 social preview image, ideally 1200x630
- 1 resume PDF
- 1 demo asset per project
  - preferred: short MP4 preview
  - fallback: PNG/JPG screenshot

## Recommended client intake form

If you want to turn this into a reusable onboarding form, ask for:

1. Full name and preferred display name
2. Job title and one-line positioning statement
3. City/country
4. Email, phone, website
5. LinkedIn, GitHub, and other public links
6. Short bio
7. 3 to 6 featured projects with links and assets
8. Work experience entries with achievement bullets
9. Skills grouped by category
10. Certifications
11. Education
12. Key metrics/achievements
13. Profile image, resume, favicon, social share image
14. EmailJS credentials for the contact form
15. Any design/branding preferences

## Notes

- The site is currently optimized for an individual developer/engineer portfolio, not a company site.
- Replacing only `src/data/portfolio.ts` is not enough. You must also update direct hardcoded values in components, `index.html`, `.env`, and files in `public/`.
- Project previews rely on real files in `public/assets/`, so client media needs to be prepared alongside text content.
