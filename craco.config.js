const SassLoaderPlugin = require('sass-loader')

module.exports = {
    plugins: [
        { 
            plugin: SassLoaderPlugin,
            options: {
                resources: "@import '@/style/variables.scss';"
            }
        }
    ]
}