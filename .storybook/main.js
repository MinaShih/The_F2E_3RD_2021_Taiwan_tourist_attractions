module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../component/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: '@storybook/addon-postcss',
            option: {
                cssLoaderOption: {
                    importLoader: 1
                },
                postcssLoaderOption: {
                    implementation: require('postcss'),
                }
            }
        }
    ],
    "framework": "@storybook/vue3",
    "core": {
        "builder": "storybook-builder-vite"
    },
}