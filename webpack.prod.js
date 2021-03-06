const path = require("path");
const common = require("./webpack.config");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build")
    },
    optimization:{
        minimizer: [ new OptimizeCssAssetsPlugin(), new TerserPlugin() ] 
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}), new CleanWebpackPlugin()],
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            
        ]
    }
});