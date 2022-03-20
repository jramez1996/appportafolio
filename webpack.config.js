module.exports = {
  devServer: {
    client: {
      overlay: false,
    },
  },
  module: {
    devServer: {
      client: {
        overlay: false,
      },
    },
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};