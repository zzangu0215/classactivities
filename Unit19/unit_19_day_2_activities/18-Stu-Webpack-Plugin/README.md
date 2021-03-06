# PWAs with Webpack

- In this activity we will adjust our Gallery app so that Webpack minifies and bundles our code.

## Instructions

- Before you begin, make sure to install all of the necessary dependencies with `npm install`.

- Run the following command: `npm install webpack-pwa-manifest -D`. (https://github.com/arthurbergmz/webpack-pwa-manifest)

- Run `npm run seed` to add seed data to the database.

- Run `npm start` to make sure that the application works as expected.

- Using the entry point of `public/assets/js/app.js`, make Webpack output a bundle file in a folder called `/public/dist/`.

- Update `webpack.config.js` to use the `WebpackPwaManifest` plugin. This will generate a `manifest.json` file to replace the one we manually created. Use the values from `manifest.webmanifest` in activity `13-Stu_Caching_Fetching_Files` to provide the configuration values passed to `WebpackPwaManifest`. Use the plugin to create icons following the example in the [webpack-pwa-manifest documentation](https://github.com/arthurbergmz/webpack-pwa-manifest).

- Add the script `"prestart": "npm run webpack"` to the scripts in `package.json` so that Webpack will build every time the application is started.

- In `index.html`, change the JavaScript file src to be your new bundle file and the link to the manifest to be the one generated by the `WebpackPwaManifest` plugin.

- In `service-worker.js`, update the `FILES_TO_CACHE` array with files generated from Webpack.

- Change the mode to `"production"` in `webpack.config.js` so that the generated bundle will be minified.

### Hints

- Try clearing application storage and disabling cache after making changes to your application. If it appears to be working, use Chrome DevTools to toggle `offline mode` and ensure that the application uses the service worker.

- You may find it easier to override the default behavior of `webpack-pwa-manifest` by setting the `fingerprints` and `inject` options to `false`, since you are manually providing the links to `manifest.json` and the names of the icon images to cache.

### Bonus

- Install the bundle analyzer plugin and identify which modules contribute the most to the total bundle size.
- Install the clean webpack plugin to clear the `dist` folder each time webpack is run.
- Research the HTML Webpack Plugin.
