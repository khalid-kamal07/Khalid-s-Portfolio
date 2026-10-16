# Khalid Kamal — React Portfolio

A responsive, data-driven portfolio built with React and Vite.

## Features
- Responsive layout for mobile, tablet, and desktop
- About, Skills, Projects, and Contact sections
- Four deployed project links
- Interactive skill-category filters
- Mobile navigation menu
- Email contact link and copy-email button
- WhatsApp contact link
- Accessible labels and reduced-motion support
- Data-driven project cards and skills for easy future updates

## Run locally
Requires Node.js 18+ (Node.js 20 LTS recommended).

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## Build for production
```bash
npm run build
npm run preview
```
The production build is generated in `dist/`.

## Add another project
Edit `src/data.js` and add an object to the `projects` array:

```js
{
  name: "Your Project Name",
  category: "Web Application",
  description: "A concise and accurate project description.",
  url: "https://your-live-site.com/",
  number: "05",
  tags: ["React", "Node.js"],
  visual: "shop"
}
```

Project cards are generated automatically. Supported decorative `visual` options: `shop`, `jobs`, `students`, `finance`.

## Customize
- Project links and skills: `src/data.js`
- Email and WhatsApp link: `src/App.jsx`
- About text, location, and headings: `src/App.jsx`
- Colors, spacing, and breakpoints: `src/styles.css`

## Deploy on Vercel
1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Set the project root to the repository root.
4. Build command: `npm run build`; output directory: `dist`.
5. Deploy. No environment variables or backend are needed.

## Live projects
- Nexa E-commerce: https://nexa-ecommerce-lac.vercel.app/
- Job Portal: https://job-portal-2lol.vercel.app/
- Student Management System: https://student-management-system-mu-self.vercel.app/
- Expense Tracker: https://expense-tracker-oj5a.vercel.app/login
