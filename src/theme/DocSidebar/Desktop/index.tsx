import { memo, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import CollapseButton from "@theme/DocSidebar/Desktop/CollapseButton";
import Content from "@theme/DocSidebar/Desktop/Content";
import type { Props } from "@theme/DocSidebar/Desktop";

/** B4React AppSidebar (expanded): text brand and close toggle, then the menu. */
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }: Props): ReactNode {
    const {
        navbar: { title },
        docs: {
            sidebar: { hideable },
        },
    } = useThemeConfig();
    return (
        <div className={clsx("app-sidebar", isHidden && "app-sidebar--hidden")}>
            <div className="app-sidebar__header">
                <Link to="/" className="app-sidebar__brand">
                    <span className="app-sidebar__brand-name">{title}</span>
                </Link>
                {hideable && <CollapseButton onClick={onCollapse} />}
            </div>
            <Content path={path} sidebar={sidebar} />
        </div>
    );
}

export default memo(DocSidebarDesktop);
