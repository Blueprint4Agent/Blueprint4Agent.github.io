import type { ReactNode } from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import TOCItems from "@theme/TOCItems";
import type { Props } from "@theme/TOC";

/** Right-hand table of contents: small title and a single rail with an active indicator. */
export default function TOC({ className, ...props }: Props): ReactNode {
    const title = translate({ id: "toc.title", message: "On this page" });
    return (
        <nav className={clsx("toc-panel thin-scrollbar", className)} aria-label={title}>
            <p className="toc-panel__title">{title}</p>
            <TOCItems
                {...props}
                className="table-of-contents toc-list"
                linkClassName="table-of-contents__link toc-highlight"
                linkActiveClassName="table-of-contents__link--active"
            />
        </nav>
    );
}
