import type { ReactNode } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

/** B4A robot mark shared with B4React; swaps light/dark artwork with the active theme. */
export default function BrandMark({ className }: { className?: string }): ReactNode {
    return (
        <span className={clsx("brand-mark", className)} aria-hidden="true">
            <img
                className="brand-mark__asset brand-mark__asset--light"
                src={useBaseUrl("/img/b4a-mark.svg")}
                alt=""
            />
            <img
                className="brand-mark__asset brand-mark__asset--dark"
                src={useBaseUrl("/img/b4a-mark-dark.svg")}
                alt=""
            />
        </span>
    );
}
