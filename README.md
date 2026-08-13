# Rwanda Coding Academy

Static school website built with [Eleventy](https://www.11ty.dev/).

## Development

The project uses Node.js 22. Install dependencies and start the local development server:

```sh
npm install
npm start
```

Create a production build with:

```sh
npm run build
```

The generated site is written to `_site/`. Netlify runs the same build command and publishes that directory.

## Project structure

- The root HTML files contain page-specific content.
- `_includes/header.html` and `_includes/footer.html` contain shared page elements.
- `_data/site.json` is the single source of truth for navigation and social links.
- `styles/styles.css` contains site styling.
- `js/site.js` contains global browser behavior.

Edit the source files rather than `_site/`, which is regenerated during every build.
