import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/DocSidebar/Desktop/CollapseButton";
import { PanelLeftClose } from "lucide-react";

/** B4React sidebar close control (PanelLeftClose, 32px). */
export default function CollapseButton({ onClick }: Props): ReactNode {
    const label = translate({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
    });
    return (
        <button
            type="button"
            title={label}
            aria-label={label}
            className="sidebar-toggle"
            onClick={onClick}
        >
            <PanelLeftClose aria-hidden="true" />
        </button>
    );
}
