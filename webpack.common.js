const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "./css/[name].bundle.css"
});
module.exports = {
    entry: {
        login: path.resolve(__dirname, 'resource/js', 'login.js'),
        funExam: path.resolve(__dirname, 'resource/js', 'funExam.js'),
        personal: path.resolve(__dirname, 'resource/js', 'personal.js')
    },
    output: {
        filename: './js/[name].bundle.js',
        path: path.resolve(__dirname, 'src/main/resources/static/dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: ["css-loader", "sass-loader"],
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};