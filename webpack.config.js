const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        "index": [path.join(__dirname, 'index.js')]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', ".c", ".cpp"]
    },
    optimization: {
        // minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /\.(c|cpp)$/,
            use: {
                loader: 'cpp-wasm-loader',
                options: {
                    // emitWasm: true, // emit WASM file built by emscripten to the build folder
                    // emccFlags: (existingFlags) => existingFlags.concat(["more", "flags", "here"]), // add or modify compiler flags
                    // emccPath: "path/to/emcc", // only needed if emcc is not in PATH,
                    memoryClass: false, // disable javascript memory management class,
                    // fetchFiles: true,
                    // asmJs: true,
                    // wasm: false,
                    fullEnv: true
                }
            }
        }]
    }
};