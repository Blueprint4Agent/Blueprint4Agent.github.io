import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { ArrowRight } from "lucide-react";
import BrandMark from "@site/src/components/brand/BrandMark";
import { Card, CardGrid } from "@site/src/components/docs";
import GitHubMark from "@site/src/components/icons/GitHubMark";
import type { IconName } from "@site/src/components/icons/registry";

const MANUAL_START = "/docs/about-b4a/what-is-b4a";

type Highlight = { icon: IconName; title: string; description: string };

const highlights: Highlight[] = [
    {
        icon: "shield",
        title: translate({ id: "home.highlight.auth.title", message: "Authentication" }),
        description: translate({
            id: "home.highlight.auth.desc",
            message: "Email login, verification, password reset, and Google/GitHub OAuth.",
        }),
    },
    {
        icon: "key",
        title: translate({ id: "home.highlight.apiKeys.title", message: "API keys" }),
        description: translate({
            id: "home.highlight.apiKeys.desc",
            message: "Issue, list, and revoke personal API keys with paginated views.",
        }),
    },
    {
        icon: "radio",
        title: translate({ id: "home.highlight.realtime.title", message: "Realtime refresh" }),
        description: translate({
            id: "home.highlight.realtime.desc",
            message: "Server-Sent Events keep open screens in sync with backend changes.",
        }),
    },
    {
        icon: "users",
        title: translate({ id: "home.highlight.admin.title", message: "Admin console" }),
        description: translate({
            id: "home.highlight.admin.desc",
            message: "Role-based administrator user directory and account controls.",
        }),
    },
    {
        icon: "clock",
        title: translate({ id: "home.highlight.jobs.title", message: "Background jobs" }),
        description: translate({
            id: "home.highlight.jobs.desc",
            message: "Opt-in Celery worker and scheduler on the shared Redis broker.",
        }),
    },
    {
        icon: "activity",
        title: translate({ id: "home.highlight.observability.title", message: "Observability" }),
        description: translate({
            id: "home.highlight.observability.desc",
            message: "OpenTelemetry traces, logs, and metrics with a local Grafana stack.",
        }),
    },
    {
        icon: "container",
        title: translate({ id: "home.highlight.docker.title", message: "Docker delivery" }),
        description: translate({
            id: "home.highlight.docker.desc",
            message: "Single app image, PostgreSQL, Redis, and readiness-gated deploys.",
        }),
    },
    {
        icon: "list-checks",
        title: translate({ id: "home.highlight.verify.title", message: "Verification harness" }),
        description: translate({
            id: "home.highlight.verify.desc",
            message: "Change-scoped checks, worklogs, and git governance for every commit.",
        }),
    },
];

function Hero() {
    return (
        <section className="home-hero" aria-labelledby="home-title">
            <BrandMark className="home-hero__mark" />
            <p className="home-hero__eyebrow">
                <Translate id="home.hero.eyebrow">B4Agent Manual</Translate>
            </p>
            <h1 id="home-title">
                <Translate id="home.hero.title">Full-stack blueprint for agentic coding</Translate>
            </h1>
            <p className="home-hero__subtitle">
                <Translate id="home.hero.subtitle">
                    A FastAPI backend and a shared React frontend, joined by a pinned API contract
                    and a verification harness that agents follow from the first commit.
                </Translate>
            </p>
            <p className="home-hero__note">
                <Translate id="home.hero.note">
                    B4FastAPI + B4React today · B4SpringBoot next
                </Translate>
            </p>
            <div className="home-hero__actions">
                <Link className="b4-button b4-button--primary" to={MANUAL_START}>
                    <Translate id="home.hero.start">Read the manual</Translate>
                    <ArrowRight aria-hidden="true" />
                </Link>
                <Link
                    className="b4-button b4-button--ghost"
                    href="https://github.com/Blueprint4Agent"
                >
                    <GitHubMark />
                    GitHub
                </Link>
            </div>
        </section>
    );
}

function Stack() {
    return (
        <section className="home-section" aria-labelledby="home-stack">
            <h2 id="home-stack" className="home-section__title">
                <Translate id="home.stack.title">Blueprint stack</Translate>
            </h2>
            <CardGrid>
                <Card
                    icon="server"
                    title="B4FastAPI"
                    badge={translate({ id: "home.stack.backend", message: "Backend" })}
                >
                    <Translate id="home.stack.fastapi.desc">
                        FastAPI, SQLAlchemy, Alembic, Redis, and Celery with Docker delivery.
                    </Translate>
                </Card>
                <Card
                    icon="frontend"
                    title="B4React"
                    badge={translate({ id: "home.stack.frontend", message: "Frontend" })}
                >
                    <Translate id="home.stack.react.desc">
                        React, TypeScript, and Vite with an optional Tauri desktop shell, pinned as
                        a submodule.
                    </Translate>
                </Card>
                <Card
                    icon="leaf"
                    title="B4SpringBoot"
                    badge={translate({ id: "home.stack.planned", message: "Planned" })}
                    badgeTone="planned"
                >
                    <Translate id="home.stack.spring.desc">
                        A Spring Boot backend serving the same B4React frontend and API contract.
                    </Translate>
                </Card>
            </CardGrid>
        </section>
    );
}

function Highlights() {
    return (
        <section className="home-section" aria-labelledby="home-highlights">
            <h2 id="home-highlights" className="home-section__title">
                <Translate id="home.highlights.title">Built in from day one</Translate>
            </h2>
            <CardGrid columns={2}>
                {highlights.map((item) => (
                    <Card key={item.icon} icon={item.icon} title={item.title}>
                        {item.description}
                    </Card>
                ))}
            </CardGrid>
        </section>
    );
}

export default function Home(): ReactNode {
    return (
        <Layout
            title={translate({ id: "home.meta.title", message: "B4Agent Manual" })}
            description={translate({
                id: "home.meta.description",
                message:
                    "Manual for the B4Agent full-stack blueprint: B4FastAPI, B4React, and B4SpringBoot.",
            })}
        >
            <main className="home">
                <Hero />
                <Stack />
                <Highlights />
            </main>
        </Layout>
    );
}
