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
                resources: "./src/style/variables.scss"
            }
        }
    ]
}