const Bundler = require("parcel-bundler");
const Path = require("path");
const buildSw = require("./workboxBuild");

// Single entrypoint file location:
const entryFiles = Path.join(__dirname, "./public/index.html");
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = [Path.join(__dirname, "./public/index.html"), Path.join(__dirname, './public/_redirects')];

// Bundler options
const options = {
  contentHash: false, // Disable content hash from being included on the filename
  scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
  hmr: true, // Enable or disable HMR while watching
  detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
  autoInstall: true // Enable or disable auto install of missing dependencies found during bundling
};

(async function () {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, options);

  bundler.on("buildEnd", () => {
    buildSw();
  });

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.serve();
})();
