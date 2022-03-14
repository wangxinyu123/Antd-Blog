const SassLoaderPlugin = require('craco-sass-resources-loader')
const path = require('path')
module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins: [
        {
            plugin: SassLoaderPlugin,
            options: {
                resources: [
                    path.join(__dirname, "./src/style/variables.scss"),
                    path.join(__dirname, "./src/global.scss")
                ]
            }
        }
    ]
}