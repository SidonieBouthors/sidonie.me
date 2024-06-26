# Sidonie.me V2

This repository contains the source of the second version of my website.

## Content

The website uses [NextJS](https://nextjs.org/), a [React](https://react.dev/)-based framework, coupled with [SCSS](https://sass-lang.com/documentation/syntax/#scss) for styling. It uses [Velite](https://velite.js.org/) to build a type-safe data layer from MDX and JSON files, that contain the website's content.

Organization:

- `app` : Website pages
- `components` : React Components
- `content` : MDX pages of the website (and related assets)
- `fonts` : Website fonts
- `public` : General website assets, such as favicons or the logo
- `styles` : SCSS styling files

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create the static website :

```bash
npm run build 
```
