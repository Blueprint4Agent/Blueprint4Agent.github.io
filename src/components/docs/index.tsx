import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ChevronRight } from "lucide-react";
import { iconRegistry, type IconName } from "@site/src/components/icons/registry";

/** Tones map onto B4React `ui-status-badge` variants. */
type BadgeTone = "neutral" | "info" | "active" | "warn" | "planned";

const badgeVariant: Record<BadgeTone, string> = {
    neutral: "inactive",
    info: "info",
    active: "active",
    warn: "warning",
    planned: "inactive",
};

export function Badge({ tone = "neutral", children }: { tone?: BadgeTone; children: ReactNode }) {
    return (
        <span className={clsx("ui-status-badge", `ui-status-badge--${badgeVariant[tone]}`)}>
            {children}
        </span>
    );
}

type CardProps = {
    title: ReactNode;
    icon?: IconName;
    href?: string;
    badge?: ReactNode;
    badgeTone?: BadgeTone;
    children?: ReactNode;
};

/** B4React primary-card / settings-row: 0.5px border, 16px radius, plain 18px icon. */
export function Card({ title, icon, href, badge, badgeTone, children }: CardProps) {
    const Icon = icon ? iconRegistry[icon] : undefined;
    const body = (
        <>
            {Icon && <Icon className="b4-card__icon" aria-hidden="true" />}
            <span className="b4-card__title">{title}</span>
            {(badge || href) && (
                <span className="b4-card__aside">
                    {badge && <Badge tone={badgeTone}>{badge}</Badge>}
                    {href && <ChevronRight className="b4-card__arrow" aria-hidden="true" />}
                </span>
            )}
            {children && <span className="b4-card__body">{children}</span>}
        </>
    );
    if (href) {
        return (
            <Link className="primary-card b4-card b4-card--link" to={href}>
                {body}
            </Link>
        );
    }
    return <div className="primary-card b4-card">{body}</div>;
}

export function CardGrid({ columns = 3, children }: { columns?: 2 | 3; children: ReactNode }) {
    return <div className={clsx("b4-card-grid", `b4-card-grid--${columns}`)}>{children}</div>;
}
