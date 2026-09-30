import type { ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/plugin-content-docs/client";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import type { Props } from "@theme/DocSidebarItem/Link";
import { iconRegistry, type IconName } from "@site/src/components/icons/registry";

/** Sidebar row matching B4React AppSidebar items: 18px lucide icon + 13px label. */
export default function DocSidebarItemLink({
    item,
    onItemClick,
    activePath,
    level,
    index,
    ...props
}: Props): ReactNode {
    const { href, label, className, autoAddBaseUrl, customProps } = item;
    const isActive = isActiveSidebarItem(item, activePath);
    const isInternalLink = isInternalUrl(href);
    const iconName = customProps?.icon as IconName | undefined;
    const Icon = iconName ? iconRegistry[iconName] : undefined;
    return (
        <li
            className={clsx(
                ThemeClassNames.docs.docSidebarItemLink,
                ThemeClassNames.docs.docSidebarItemLinkLevel(level),
                "menu__list-item",
                className,
            )}
            key={label}
        >
            <Link
                className={clsx("menu__link", "sidebar-item", {
                    "menu__link--active": isActive,
                })}
                autoAddBaseUrl={autoAddBaseUrl}
                aria-current={isActive ? "page" : undefined}
                to={href}
                {...(isInternalLink && {
                    onClick: onItemClick ? () => onItemClick(item) : undefined,
                })}
                {...props}
            >
                {Icon && <Icon className="sidebar-item__icon" aria-hidden="true" />}
                <span title={label} className="sidebar-item__label">
                    {label}
                </span>
                {!isInternalLink && <IconExternalLink />}
            </Link>
        </li>
    );
}
