module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@domain": "./src/domain",
            "@": "./src/",
          },
        },
      ],
      "optional-require",
    ],
  };
};
