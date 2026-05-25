import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg hero-cta" to="/docs/about-b4a/what-is-b4a">
                        <span className="hero-cta__icon hero-cta__icon--b4a" aria-hidden="true" />
                        <Translate id="homepage.cta.exploreB4A">Explore B4A</Translate>
                    </Link>
                    <Link
                        className="button button--secondary button--lg hero-cta hero-cta--ghost"
                        href="https://github.com/Blueprint4Agent"
                    >
                        <span className="hero-cta__icon hero-cta__icon--github" aria-hidden="true" />
                        <Translate id="homepage.cta.startOnGithub">Start on GitHub</Translate>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Blueprint4Agent organization documentation powered by Docusaurus."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
