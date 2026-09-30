import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import { iconRegistry, type IconName } from "@site/src/components/icons/registry";

type BadgeTone = "neutral" | "info" | "warn" | "planned";

export function Badge({ tone = "neutral", children }: { tone?: BadgeTone; children: ReactNode }) {
    return <span className={clsx("b4-badge", `b4-badge--${tone}`)}>{children}</span>;
}

export function IconTile({ icon }: { icon: IconName }) {
    const Icon = iconRegistry[icon];
    return (
        <span className="b4-icon-tile" aria-hidden="true">
            <Icon strokeWidth={1.75} />
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

export function Card({ title, icon, href, badge, badgeTone, children }: CardProps) {
    const body = (
        <>
            {icon && <IconTile icon={icon} />}
            <strong className="b4-card__title">{title}</strong>
            {(badge || href) && (
                <span className="b4-card__aside">
                    {badge && <Badge tone={badgeTone}>{badge}</Badge>}
                    {href && <ArrowRight className="b4-card__arrow" aria-hidden="true" />}
                </span>
            )}
            {children && <span className="b4-card__body">{children}</span>}
        </>
    );
    if (href) {
        return (
            <Link className="b4-card b4-card--link" to={href}>
                {body}
            </Link>
        );
    }
    return <div className="b4-card">{body}</div>;
}

export function CardGrid({ columns = 3, children }: { columns?: 2 | 3; children: ReactNode }) {
    return <div className={clsx("b4-card-grid", `b4-card-grid--${columns}`)}>{children}</div>;
}
