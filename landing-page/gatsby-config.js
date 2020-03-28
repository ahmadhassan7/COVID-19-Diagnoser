module.exports = {
    siteMetadata: {
        title: `Fight COVID-19`,
        description: `Let's contribute together to health the world.`,
        author: `A very big comunity`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/content`,
            },
        },
        // Landing starter
        {
            resolve: `gatsby-theme-codebushi`,
            options: {
                tailwindConfig: `tailwind.config.js`,
            },
        },
        // I18n
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `es`],
                defaultLanguage: `en`,
                // option to redirect to `/ko` when connecting `/`
                redirect: true,
            },
        },
        `gatsby-transformer-remark`,

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
