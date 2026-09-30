import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
    manualSidebar: [
        {
            type: "category",
            label: "Getting Started",
            collapsible: false,
            items: [
                "getting-started/overview",
                "getting-started/quick-start",
                "getting-started/project-initialization",
                "getting-started/repository-layout",
            ],
        },
        {
            type: "category",
            label: "Features",
            collapsible: false,
            link: { type: "doc", id: "features/index" },
            items: [
                "features/authentication",
                "features/email",
                "features/oauth",
                "features/api-keys",
                "features/admin-and-roles",
                "features/realtime-events",
                "features/background-jobs",
                "features/settings-and-profile",
                "features/showcase-and-style-studio",
                "features/desktop-app",
            ],
        },
        {
            type: "category",
            label: "Environment & Options",
            collapsible: false,
            link: { type: "doc", id: "environment/index" },
            items: [
                "environment/environment-variables",
                "environment/database-and-redis",
                "environment/observability",
                "environment/docker",
                "environment/make-commands",
            ],
        },
        {
            type: "category",
            label: "Verification",
            collapsible: false,
            link: { type: "doc", id: "verification/index" },
            items: [
                "verification/verification-process",
                "verification/checks-and-tests",
                "verification/git-governance",
            ],
        },
        {
            type: "category",
            label: "Backends",
            collapsible: false,
            items: ["backends/b4springboot"],
        },
    ],
};

export default sidebars;
