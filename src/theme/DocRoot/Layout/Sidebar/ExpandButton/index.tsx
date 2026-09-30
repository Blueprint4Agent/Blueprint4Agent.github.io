import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";
import { isActiveSidebarItem, useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import type { PropSidebarItem, PropSidebarItemLink } from "@docusaurus/plugin-content-docs";
import type { Props } from "@theme/DocRoot/Layout/Sidebar/ExpandButton";
import { PanelLeftOpen } from "lucide-react";
import BrandMark from "@site/src/components/brand/BrandMark";
import { iconRegistry, type IconName } from "@site/src/components/icons/registry";
import { Tooltip } from "@site/src/components/ui/Tooltip";

function linksOf(item: PropSidebarItem): PropSidebarItemLink[] {
    if (item.type === "link") return [item];
    if (item.type === "category") return item.items.flatMap(linksOf);
    return [];
}

/** Collapsed B4React AppSidebar rail: brand toggle, then icon links with right-side tooltips. */
export default function ExpandButton({ toggleSidebar }: Props): ReactNode {
    const sidebar = useDocsSidebar();
    const { pathname } = useLocation();
    const groups = (sidebar?.items ?? []).map(linksOf).filter((group) => group.length > 0);
    const openLabel = translate({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar",
    });
    return (
        <div className="sidebar-rail">
            <Tooltip content={openLabel}>
                <button
                    type="button"
                    aria-label={openLabel}
                    aria-expanded={false}
                    className="sidebar-toggle sidebar-rail__brand"
                    onClick={toggleSidebar}
                >
                    <BrandMark />
                    <PanelLeftOpen className="sidebar-rail__expand-icon" aria-hidden="true" />
                </button>
            </Tooltip>
            <nav className="sidebar-rail__nav" aria-label={openLabel}>
                {groups.map((group, index) => (
                    <div className="sidebar-rail__group" key={index}>
                        {group.map((item) => {
                            const Icon = iconRegistry[item.customProps?.icon as IconName];
                            const active = isActiveSidebarItem(item, pathname);
                            return (
                                <Tooltip key={item.href} content={item.label}>
                                    <Link
                                        to={item.href}
                                        aria-label={item.label}
                                        aria-current={active ? "page" : undefined}
                                        className={clsx(
                                            "sidebar-rail__item",
                                            active && "sidebar-rail__item--active",
                                        )}
                                    >
                                        {Icon ? (
                                            <Icon aria-hidden="true" />
                                        ) : (
                                            item.label.slice(0, 1)
                                        )}
                                    </Link>
                                </Tooltip>
                            );
                        })}
                    </div>
                ))}
            </nav>
        </div>
    );
}
