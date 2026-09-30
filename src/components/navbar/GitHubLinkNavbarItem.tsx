import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import GitHubMark from "@site/src/components/icons/GitHubMark";

type Props = {
    href: string;
    label: string;
    mobile?: boolean;
    className?: string;
};

export default function GitHubLinkNavbarItem({ href, label, mobile, className }: Props): ReactNode {
    if (mobile) {
        return (
            <li className="menu__list-item">
                <Link className={clsx("menu__link navbar-icon-link", className)} href={href}>
                    <GitHubMark width={16} height={16} />
                    {label}
                </Link>
            </li>
        );
    }
    return (
        <Link
            className={clsx("navbar__item navbar__link navbar-icon-link", className)}
            href={href}
            aria-label={label}
            title={label}
        >
            <GitHubMark width={18} height={18} />
        </Link>
    );
}
