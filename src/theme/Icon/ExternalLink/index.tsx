import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import { ArrowUpRight } from "lucide-react";

export default function IconExternalLink({
    width = 13,
    height = 13,
}: {
    width?: number;
    height?: number;
}): ReactNode {
    return (
        <ArrowUpRight
            width={width}
            height={height}
            strokeWidth={2}
            className="icon-external-link"
            aria-label={translate({
                id: "theme.IconExternalLink.ariaLabel",
                message: "(opens in new tab)",
                description: "The ARIA label for the external link icon",
            })}
        />
    );
}
