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
            items: [],
        },
        {
            type: "category",
            label: "Environment & Options",
            collapsible: false,
            link: { type: "doc", id: "environment/index" },
            items: [],
        },
        {
            type: "category",
            label: "Verification",
            collapsible: false,
            link: { type: "doc", id: "verification/index" },
            items: [],
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
