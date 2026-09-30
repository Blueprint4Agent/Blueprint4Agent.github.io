import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/DocRoot/Layout/Sidebar/ExpandButton";
import { PanelLeftOpen } from "lucide-react";

/** Collapsed rail with the B4React open control. */
export default function ExpandButton({ toggleSidebar }: Props): ReactNode {
    const label = translate({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar",
    });
    return (
        <div className="sidebar-rail">
            <button
                type="button"
                title={label}
                aria-label={label}
                className="sidebar-toggle"
                onClick={toggleSidebar}
            >
                <PanelLeftOpen aria-hidden="true" />
            </button>
        </div>
    );
}
