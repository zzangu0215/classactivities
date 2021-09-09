const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: `${__dirname}/public/dist`,
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      publicPath: "/dist",
      fingerprints: false,
      name: "Images App",
      short_name: "Images App",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("./public/assets/images/icon.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
        },
      ],
    }),
  ],
};

module.exports = config;
