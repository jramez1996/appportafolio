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
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015'],
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel',["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]],
            }
        },
        exclude: /node_modules/
    },
    ],
  },
};