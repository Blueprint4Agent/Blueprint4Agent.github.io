import type { ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/Admonition/Layout";

/** Admonitions rendered as B4React StatusCard: 16px icon column, 12px title, 13px message. */
export default function AdmonitionLayout({
    type,
    icon,
    title,
    children,
    className,
    id,
}: Props): ReactNode {
    return (
        <div
            className={clsx(
                ThemeClassNames.common.admonition,
                ThemeClassNames.common.admonitionType(type),
                "status-card",
                `status-card--${type}`,
                className,
            )}
            id={id}
            role={type === "danger" || type === "warning" ? "alert" : "note"}
        >
            <span className="status-card__icon">{icon}</span>
            <div className="status-card__content">
                {title ? <div className="status-card__title">{title}</div> : null}
                {children ? <div className="status-card__message">{children}</div> : null}
            </div>
        </div>
    );
}
