This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies, `npm install` then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More About Next

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

Vercel is set up to deploy the `main` branch to production. This is currently published at https://propellerexmouth.vercel.app/ (Note: this will be updated to the main propellerexmouth.co.uk domain at a later date)

To see a preview of any changes, open a PR against `main` and Vercel will generate a new build for you and post a comment with the URL in your PR.

If you're work isn't ready for review yet, you can open a Draft PR instead. This will still generate a Vercel Preview build.

## Git workflow

`main` is a protected branch and can only be updated via Pull Request.

The git workflow to to contribute is as follows:

1. Make sure your local repo is up to date
   ```
   git checkout main && git pull
   ```
1. Branch off `main`
   ```
   git checkout -b my-branch
   ```
1. Make changes

1. Commit your changes

   ```
   git add myfile.tsx
   git commit -m "My commit message"
   ```

1. Push your branch
   ```
   git push
   ```
1. Open a Pull Request. This can be a Draft PR is you're still working on changes and just want a preview build.

1. If Github says your branch is out of date, you'll need to rebase it against the latest changes in `main`. You can do this as follows:

   a. Update your local repo with the lates changes and switch back to your branch:

   ```
   git checkout main && git pull && git checkout my-branch
   ```

   b. Rebase your branch against `main`:

   ```
   git rebase main
   ```

   c. Force push your branch:

   ```
   git push --force-with-lease
   ```
