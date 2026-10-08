import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import type { IconName } from "./src/components/icons/registry";

/** A doc row with a lucide icon, rendered like a B4React AppSidebar item. */
const doc = (id: string, icon: IconName) => ({ type: "doc" as const, id, customProps: { icon } });

const sidebars: SidebarsConfig = {
    manualSidebar: [
        {
            type: "category",
            label: "Getting Started",
            collapsible: false,
            items: [
                doc("getting-started/overview", "compass"),
                doc("getting-started/quick-start", "rocket"),
                doc("getting-started/project-initialization", "sliders"),
                doc("getting-started/repository-layout", "folder"),
            ],
        },
        {
            type: "category",
            label: "Features",
            collapsible: false,
            link: { type: "doc", id: "features/index" },
            items: [
                doc("features/authentication", "shield"),
                doc("features/email", "mail"),
                doc("features/oauth", "lock"),
                doc("features/api-keys", "key"),
                doc("features/admin-and-roles", "users"),
                doc("features/billing", "credit-card"),
                doc("features/realtime-events", "radio"),
                doc("features/background-jobs", "clock"),
                doc("features/settings-and-profile", "settings"),
                doc("features/showcase-and-style-studio", "palette"),
                doc("features/desktop-app", "monitor"),
            ],
        },
        {
            type: "category",
            label: "Environment & Options",
            collapsible: false,
            link: { type: "doc", id: "environment/index" },
            items: [
                doc("environment/environment-variables", "file-code"),
                doc("environment/runtime-modes", "layers"),
                doc("environment/database-and-redis", "database"),
                doc("environment/observability", "activity"),
                doc("environment/docker", "container"),
                doc("environment/make-commands", "terminal"),
            ],
        },
        {
            type: "category",
            label: "Verification",
            collapsible: false,
            link: { type: "doc", id: "verification/index" },
            items: [
                doc("verification/verification-process", "workflow"),
                doc("verification/checks-and-tests", "list-checks"),
                doc("verification/git-governance", "git-branch"),
            ],
        },
        {
            type: "category",
            label: "Backends",
            collapsible: false,
            items: [doc("backends/b4springboot", "leaf")],
        },
    ],
};

export default sidebars;
