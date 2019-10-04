const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./main.js",
    output: {
        path: path.join(__dirname, 'src'),
        filename: "bundle.js",
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    devtool: 'source-map',
}