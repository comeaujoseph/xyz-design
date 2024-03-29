const path = require('path');

module.exports = {
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
    },
    stories: [
      '../src/components/atoms/button/*.stories.mdx',
      '../src/components/atoms/button-icon/*.stories.mdx',
      '../src/components/atoms/progress-bar/*.stories.mdx',
      '../src/components/molecules/pagination/*.stories.mdx',
      '../src/components/molecules/options/*.stories.mdx',
      '../src/components/organisms/table/*.stories.mdx',
      '../src/components/organisms/lookup/*.stories.mdx'
    ],
    addons: [
        "@storybook/addon-essentials",
    ],
  }