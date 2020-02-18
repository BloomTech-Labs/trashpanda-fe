const workboxBuild = require("workbox-build");

const buildSw = () => {
  return workboxBuild
    .injectManifest({
      swSrc: "./src/sw.js",
      swDest: "./dist/__/src/sw.js",
      globDirectory: "dist",
      globPatterns: [
        "**/*.css",
        "index.html",
        "**/*.jpg",
        "**/*.svg",
        "**/*.js"
      ]
    })
    .then(resources => {
      console.log(
        `Injected ${resources.count} resources for precaching, ` +
          `totaling ${resources.size} bytes.`
      );
    })
    .catch(err => {
      console.log("Uh oh 😬", err);
    });
};

module.exports = buildSw;
