import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Blueprint4Agent",
    tagline: "De facto web server project for agentic coding",
    favicon: "img/favicon.ico",

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: "https://blueprint4agent.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Blueprint4Agent", // Usually your GitHub org/user name.
    projectName: "Blueprint4Agent.github.io", // Usually your repo name.

    onBrokenLinks: "throw",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en", "ko"],
        localeConfigs: {
            en: {
                label: "English",
                htmlLang: "en-US",
            },
            ko: {
                label: "한국어",
                htmlLang: "ko-KR",
            },
        },
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/Blueprint4Agent/Blueprint4Agent.github.io/tree/main/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        colorMode: {
            respectPrefersColorScheme: true,
            disableSwitch: false,
        },
        navbar: {
            title: "Blueprint4Agent",
            logo: {
                alt: "Blueprint4Agent Logo",
                src: "img/b4a-mark.png",
                srcDark: "img/b4a-mark-dark.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    label: "Docs",
                    position: "left",
                },
                {
                    href: "https://github.com/Blueprint4Agent",
                    label: "GitHub",
                    className: "navbar-github-link",
                    position: "right",
                },
                { type: "localeDropdown", className: "navbar-locale-link", position: "right" },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
