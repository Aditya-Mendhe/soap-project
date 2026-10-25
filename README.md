# Soap Preparation: A Chemical Prototyping Project

React + Vite single-page site for MITAOE (Computer Engineering, SY B.Tech, Chemical Prototyping).

## Run in VS Code
1. Install Node.js 18+ and open this folder in VS Code (File > Open Folder).
2. Open the integrated terminal and run:
```
npm install
npm run dev
```
3. Open the local URL shown (usually http://localhost:5173).

## Build
```
npm run build     # output in dist/
npm run preview   # test the production build
```

## Edit content (all in `src/config.js`)
- `PROJECT_DRIVE_URL`: paste your Google Drive link. While empty, the button is disabled with "Submission link will be available soon."
- `GALLERY`: put photos in `public/gallery/` and update `src` and `caption`.
- `PROJECT` and `TEAM`: details used in the page and footer.

Section text lives in `src/App.jsx`. Update the water quantity and methodology only with confirmed details.

## Deploy on Vercel
1. Push the project to a GitHub repository.
2. On vercel.com choose Add New > Project and import the repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click Deploy.

Alternatively: `npm i -g vercel`, then run `vercel` in this folder.
