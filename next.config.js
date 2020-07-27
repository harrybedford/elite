/* eslint-disable no-unused-vars */
module.exports = {
  webpack: (config, {
    webpack,
  }) => {
    config.module.rules.push({
      test: /\.(ttf|woff2|woff|eot|svg|jpg|png)$/,
      loader: 'file-loader',
      options: {
        name: '[name]_[hash].[ext]',
        publicPath: '/_next/static/assets/',
        outputPath: 'static/assets/',
      },
    })
    return config
  },
}
