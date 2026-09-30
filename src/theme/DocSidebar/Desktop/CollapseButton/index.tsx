import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/DocSidebar/Desktop/CollapseButton";
import { PanelLeftClose } from "lucide-react";
import { Tooltip } from "@site/src/components/ui/Tooltip";

/** B4React sidebar close control (PanelLeftClose, 32px) with its tooltip. */
export default function CollapseButton({ onClick }: Props): ReactNode {
    const label = translate({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
    });
    return (
        <Tooltip content={label}>
            <button
                type="button"
                aria-label={label}
                aria-expanded={true}
                className="sidebar-toggle"
                onClick={onClick}
            >
                <PanelLeftClose aria-hidden="true" />
            </button>
        </Tooltip>
    );
}
