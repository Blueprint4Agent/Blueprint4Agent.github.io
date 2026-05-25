import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import type { Props } from "@theme/ColorModeToggle";
import { Laptop, Moon, Sun } from "lucide-react";

type ModeOption = "system" | "light" | "dark";

function isSelected(option: ModeOption, choice: "light" | "dark" | null): boolean {
    if (option === "system") return choice === null;
    return choice === option;
}

function toChoice(option: ModeOption): "light" | "dark" | null {
    if (option === "system") return null;
    return option;
}

function Icon({ option }: { option: ModeOption }) {
    if (option === "system") {
        return <Laptop aria-hidden="true" />;
    }
    if (option === "light") {
        return <Sun aria-hidden="true" />;
    }
    return <Moon aria-hidden="true" />;
}

export default function ColorModeToggle({ className }: Props): React.ReactNode {
    const { colorModeChoice, setColorMode } = useColorMode();

    return (
        <div className={clsx("theme-toggle-button", className)} role="group" aria-label="Theme select">
            <span className="theme-toggle-button__title">Theme</span>
            {(["system", "light", "dark"] as ModeOption[]).map((option) => {
                const active = isSelected(option, colorModeChoice);
                return (
                    <button
                        key={option}
                        type="button"
                        className={clsx(
                            "theme-toggle-button__option",
                            active && "theme-toggle-button__option--active",
                        )}
                        aria-pressed={active}
                        onClick={() => setColorMode(toChoice(option))}
                        title={option}
                        aria-label={option}
                    >
                        <Icon option={option} />
                    </button>
                );
            })}
        </div>
    );
}
