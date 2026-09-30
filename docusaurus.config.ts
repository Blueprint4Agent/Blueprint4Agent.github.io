import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "B4Agent",
    tagline: "Full-stack blueprint for agentic coding: B4FastAPI + B4React",
    favicon: "img/b4a-favicon.svg",

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
        image: "img/b4a-banner.png",
        colorMode: {
            respectPrefersColorScheme: true,
            disableSwitch: false,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: "B4Agent",
            logo: {
                alt: "B4Agent",
                src: "img/b4a-mark.svg",
                srcDark: "img/b4a-mark-dark.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "manualSidebar",
                    label: "Manual",
                    position: "left",
                },
                { type: "localeDropdown", position: "right" },
                {
                    type: "custom-githubLink",
                    href: "https://github.com/Blueprint4Agent",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.vsDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
