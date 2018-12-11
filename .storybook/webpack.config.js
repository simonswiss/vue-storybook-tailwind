const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = (storybookBaseConfig, configType) => {

  storybookBaseConfig.module.rules.push({
    test: /\.s?css$/,
    loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  }, {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loaders: ['file-loader'],
    include: path.resolve(__dirname, '../')
  })
  return storybookBaseConfig;
};