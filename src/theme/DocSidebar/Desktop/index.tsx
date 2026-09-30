import { memo, type ReactNode } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import CollapseButton from "@theme/DocSidebar/Desktop/CollapseButton";
import Content from "@theme/DocSidebar/Desktop/Content";
import type { Props } from "@theme/DocSidebar/Desktop";

/** B4React AppSidebar (expanded): header with title and close toggle, then the menu. */
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }: Props): ReactNode {
    const {
        docs: {
            sidebar: { hideable },
        },
    } = useThemeConfig();
    return (
        <div className={clsx("app-sidebar", isHidden && "app-sidebar--hidden")}>
            <div className="app-sidebar__header">
                <span className="app-sidebar__title">
                    {translate({ id: "sidebar.header.title", message: "Contents" })}
                </span>
                {hideable && <CollapseButton onClick={onCollapse} />}
            </div>
            <Content path={path} sidebar={sidebar} />
        </div>
    );
}

export default memo(DocSidebarDesktop);
