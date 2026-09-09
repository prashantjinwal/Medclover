This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Save registrations to Google Sheets (free setup)

The registration form posts to a small Next.js API route, which forwards validated data to a Google Apps Script attached to your sheet. No database or paid package is required.

1. Create a Google Sheet, then open **Extensions > Apps Script**.
2. Replace the editor contents with [`google-apps-script/Code.gs`](google-apps-script/Code.gs), then save.
3. Choose **Deploy > New deployment > Web app**.
4. Set **Execute as** to **Me** and **Who has access** to **Anyone**, then deploy and authorize it.
5. Copy the deployment URL ending in `/exec`.
6. For local development, copy `.env.example` to `.env.local` and replace the example URL.
7. In Vercel, open **Project > Settings > Environment Variables**, add `GOOGLE_SHEETS_WEB_APP_URL`, and redeploy.

Submissions will appear in a tab named `Registrations`; the script creates the tab and headings automatically. Keep the Google Sheet private to only the staff who need access. If you update `Code.gs` later, create a new Apps Script deployment version.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
