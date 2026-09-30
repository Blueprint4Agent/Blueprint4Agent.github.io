import { useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { ArrowRight, Check, ChevronRight, Copy } from "lucide-react";
import BrandMark from "@site/src/components/brand/BrandMark";
import { Card, CardGrid } from "@site/src/components/docs";
import GitHubMark from "@site/src/components/icons/GitHubMark";
import { iconRegistry, type IconName } from "@site/src/components/icons/registry";

const MANUAL_START = "/docs";

type Highlight = { icon: IconName; title: string; description: string; href: string };

const highlights: Highlight[] = [
    {
        icon: "shield",
        href: "/docs/features/authentication",
        title: translate({ id: "home.highlight.auth.title", message: "Authentication" }),
        description: translate({
            id: "home.highlight.auth.desc",
            message: "Email login, verification, password reset, and Google/GitHub OAuth.",
        }),
    },
    {
        icon: "key",
        href: "/docs/features/api-keys",
        title: translate({ id: "home.highlight.apiKeys.title", message: "API keys" }),
        description: translate({
            id: "home.highlight.apiKeys.desc",
            message: "Issue, list, and revoke personal API keys with paginated views.",
        }),
    },
    {
        icon: "radio",
        href: "/docs/features/realtime-events",
        title: translate({ id: "home.highlight.realtime.title", message: "Realtime refresh" }),
        description: translate({
            id: "home.highlight.realtime.desc",
            message: "Server-Sent Events keep open screens in sync with backend changes.",
        }),
    },
    {
        icon: "users",
        href: "/docs/features/admin-and-roles",
        title: translate({ id: "home.highlight.admin.title", message: "Admin console" }),
        description: translate({
            id: "home.highlight.admin.desc",
            message: "Role-based administrator user directory and account controls.",
        }),
    },
    {
        icon: "clock",
        href: "/docs/features/background-jobs",
        title: translate({ id: "home.highlight.jobs.title", message: "Background jobs" }),
        description: translate({
            id: "home.highlight.jobs.desc",
            message: "Opt-in Celery worker and scheduler on the shared Redis broker.",
        }),
    },
    {
        icon: "activity",
        href: "/docs/environment/observability",
        title: translate({ id: "home.highlight.observability.title", message: "Observability" }),
        description: translate({
            id: "home.highlight.observability.desc",
            message: "OpenTelemetry traces, logs, and metrics with a local Grafana stack.",
        }),
    },
    {
        icon: "container",
        href: "/docs/environment/docker",
        title: translate({ id: "home.highlight.docker.title", message: "Docker delivery" }),
        description: translate({
            id: "home.highlight.docker.desc",
            message: "Single app image, PostgreSQL, Redis, and readiness-gated deploys.",
        }),
    },
    {
        icon: "list-checks",
        href: "/docs/verification",
        title: translate({ id: "home.highlight.verify.title", message: "Verification harness" }),
        description: translate({
            id: "home.highlight.verify.desc",
            message: "Change-scoped checks, worklogs, and git governance for every commit.",
        }),
    },
];

const CLONE_COMMAND =
    "git clone --recurse-submodules https://github.com/Blueprint4Agent/B4FastAPI.git";

function CopyCommand() {
    const [copied, setCopied] = useState(false);
    const label = copied
        ? translate({ id: "home.hero.copied", message: "Copied" })
        : translate({ id: "home.hero.copy", message: "Copy command" });
    return (
        <div className="home-command">
            <span className="home-command__prompt" aria-hidden="true">
                $
            </span>
            <code className="home-command__text">{CLONE_COMMAND}</code>
            <button
                type="button"
                className="home-command__copy"
                aria-label={label}
                title={label}
                onClick={() => {
                    void navigator.clipboard?.writeText(CLONE_COMMAND).then(() => {
                        setCopied(true);
                        window.setTimeout(() => setCopied(false), 1600);
                    });
                }}
            >
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            </button>
        </div>
    );
}

function Hero() {
    return (
        <section className="home-hero" aria-labelledby="home-title">
            <Link className="home-hero__pill" to="/docs/backends/b4springboot">
                <span className="home-hero__pill-dot" aria-hidden="true" />
                <Translate id="home.hero.pill">
                    B4FastAPI + B4React today · B4SpringBoot next
                </Translate>
                <ChevronRight aria-hidden="true" />
            </Link>
            <h1 id="home-title">
                <Translate id="home.hero.titleLead">Full-stack blueprint</Translate>
                <span className="home-hero__title-accent">
                    <Translate id="home.hero.titleAccent">for agentic coding</Translate>
                </span>
            </h1>
            <p className="home-hero__subtitle">
                <Translate id="home.hero.subtitle">
                    A FastAPI backend and a shared React frontend, joined by a pinned API contract
                    and a verification harness that agents follow from the first commit.
                </Translate>
            </p>
            <div className="home-hero__actions">
                <Link
                    className="ui-button ui-button--primary landing-hero__start-button"
                    to={MANUAL_START}
                >
                    <Translate id="home.hero.start">Read the manual</Translate>
                    <ArrowRight aria-hidden="true" />
                </Link>
                <Link
                    className="ui-button ui-button--pill-secondary landing-hero__secondary-button"
                    href="https://github.com/Blueprint4Agent"
                >
                    <GitHubMark />
                    GitHub
                </Link>
            </div>
            <CopyCommand />
        </section>
    );
}

type TerminalLine = { kind: "cmd" | "out" | "ok"; text: string; note?: string };

const terminalLines: TerminalLine[] = [
    { kind: "cmd", text: "make init install" },
    { kind: "cmd", text: "make backend-dev", note: "FastAPI on :8000" },
    { kind: "cmd", text: "make frontend-dev", note: "B4React on :5173" },
    { kind: "cmd", text: "make verify-plan" },
    { kind: "out", text: "scope: UI → frontend checks, tests, build, browser suite" },
    { kind: "cmd", text: "make verify" },
    { kind: "ok", text: "all selected checks passed" },
];

function Terminal() {
    return (
        <div className="home-terminal primary-card" aria-hidden="true">
            <div className="home-terminal__bar">
                <span className="home-terminal__dots">
                    <span />
                    <span />
                    <span />
                </span>
                <span className="home-terminal__title">B4FastAPI — zsh</span>
                <BrandMark className="home-terminal__mark" />
            </div>
            <pre className="home-terminal__body">
                {terminalLines.map((line, index) => (
                    <span
                        key={index}
                        className={clsx("home-terminal__line", `home-terminal__line--${line.kind}`)}
                    >
                        {line.kind === "cmd" && <span className="home-terminal__prompt">$ </span>}
                        {line.kind === "ok" && <span className="home-terminal__prompt">✓ </span>}
                        {line.text}
                        {line.note && <span className="home-terminal__note"> # {line.note}</span>}
                        {"\n"}
                    </span>
                ))}
            </pre>
        </div>
    );
}

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
}) {
    return (
        <div className="home-section__heading">
            <p className="home-section__eyebrow">{eyebrow}</p>
            <h2 className="home-section__title">{title}</h2>
            <p className="home-section__description">{description}</p>
        </div>
    );
}

function Stack() {
    return (
        <section className="home-section" aria-labelledby="home-stack">
            <SectionHeading
                eyebrow={<Translate id="home.stack.eyebrow">Stack</Translate>}
                title={
                    <span id="home-stack">
                        <Translate id="home.stack.heading">One contract, any backend</Translate>
                    </span>
                }
                description={
                    <Translate id="home.stack.description">
                        The frontend is shared. Backends pin it as a submodule and serve the same
                        OpenAPI contract.
                    </Translate>
                }
            />
            <CardGrid>
                <Card
                    icon="server"
                    title="B4FastAPI"
                    href="https://github.com/Blueprint4Agent/B4FastAPI"
                    badge={translate({ id: "home.stack.backend", message: "Backend" })}
                    badgeTone="active"
                >
                    <Translate id="home.stack.fastapi.desc">
                        FastAPI, SQLAlchemy, Alembic, Redis, and Celery with Docker delivery.
                    </Translate>
                </Card>
                <Card
                    icon="frontend"
                    title="B4React"
                    href="https://github.com/Blueprint4Agent/B4React"
                    badge={translate({ id: "home.stack.frontend", message: "Frontend" })}
                    badgeTone="active"
                >
                    <Translate id="home.stack.react.desc">
                        React, TypeScript, and Vite with an optional Tauri desktop shell, pinned as
                        a submodule.
                    </Translate>
                </Card>
                <Card
                    icon="leaf"
                    title="B4SpringBoot"
                    href="/docs/backends/b4springboot"
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
            <SectionHeading
                eyebrow={<Translate id="home.highlights.eyebrow">Features</Translate>}
                title={
                    <span id="home-highlights">
                        <Translate id="home.highlights.title">Built in from day one</Translate>
                    </span>
                }
                description={
                    <Translate id="home.highlights.description">
                        Everything a production web app needs, already wired, tested, and
                        documented.
                    </Translate>
                }
            />
            <div className="home-bento primary-card">
                {highlights.map((item) => {
                    const Icon = iconRegistry[item.icon];
                    return (
                        <Link key={item.icon} to={item.href} className="home-bento__cell">
                            <Icon className="home-bento__icon" aria-hidden="true" />
                            <strong>{item.title}</strong>
                            <span>{item.description}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

function Closing() {
    return (
        <section className="home-closing primary-card">
            <BrandMark className="home-closing__mark" />
            <h2>
                <Translate id="home.closing.title">Start your next project with agents</Translate>
            </h2>
            <p>
                <Translate id="home.closing.description">
                    Clone the blueprint, name it with project.json, and let the harness keep every
                    commit verified.
                </Translate>
            </p>
            <Link
                className="ui-button ui-button--primary landing-hero__start-button"
                to="/docs/getting-started/quick-start"
            >
                <Translate id="home.closing.cta">Quick start</Translate>
                <ArrowRight aria-hidden="true" />
            </Link>
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
            <div className="home-backdrop" aria-hidden="true" />
            <main className="home">
                <Hero />
                <Terminal />
                <Stack />
                <Highlights />
                <Closing />
            </main>
        </Layout>
    );
}
