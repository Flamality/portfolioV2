module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-breakpoints"),
    require("postcss-modules")({
      generateScopedName: "[local]_[hash:base64:5]",
    }),
  ],
};
