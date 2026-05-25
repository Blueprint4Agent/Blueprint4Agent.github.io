import type { ReactNode } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "homepage.feature.minimal.title",
        description: (
            <>
                <Translate id="homepage.feature.minimal.desc">
                    B4A provides a minimal design baseline. Direct your agent to apply styles and
                    build your own web design.
                </Translate>
            </>
        ),
    },
    {
        title: "homepage.feature.agentic.title",
        description: (
            <>
                <Translate id="homepage.feature.agentic.desc">
                    B4A is built for agentic coding. Non-developers, beginners, or teams wanting
                    to start without complex setup can launch projects with agentic workflows.
                </Translate>
            </>
        ),
    },
    {
        title: "homepage.feature.composition.title",
        description: (
            <>
                <Translate id="homepage.feature.composition.desc">
                    B4A provides de facto-first project blueprints, including core web server
                    interface design, smoke tests, and trace observability foundations.
                </Translate>
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className={clsx("card padding--lg", styles.featureCard)}>
                <Heading as="h3">
                    <Translate id={title}>
                        {title === "homepage.feature.minimal.title"
                            ? "Minimal Design"
                            : title === "homepage.feature.agentic.title"
                              ? "Agentic Coding-Based Project Setup"
                              : "Project Blueprint"}
                    </Translate>
                </Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
