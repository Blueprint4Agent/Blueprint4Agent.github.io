import { useCallback, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type TooltipProps = {
    content: ReactNode;
    children: ReactNode;
    disabled?: boolean;
};

/**
 * B4React Tooltip (right side): measures the trigger, renders in a body portal so
 * clipped sidebars cannot hide it, and opens on hover or keyboard focus.
 */
export function Tooltip({ content, children, disabled = false }: TooltipProps) {
    const triggerRef = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    const show = useCallback(() => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (disabled || !rect) return;
        setPosition({ top: rect.top + rect.height / 2, left: rect.right + 8 });
    }, [disabled]);
    const hide = useCallback(() => setPosition(null), []);

    return (
        <span
            ref={triggerRef}
            className="ui-tooltip"
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
            onClick={hide}
        >
            {children}
            {position &&
                createPortal(
                    <span
                        role="tooltip"
                        className="ui-tooltip__content"
                        // Measured coordinates are the documented inline-style exception.
                        style={{ top: position.top, left: position.left }}
                    >
                        {content}
                    </span>,
                    document.body,
                )}
        </span>
    );
}
