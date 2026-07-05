import type { ReactNode } from "react";
import { Button } from "./Button";

export type ErrorStateAction = {
	label: string;
	onClick: () => void;
};

export type ErrorStateProps = {
	/** Short status label above the title (i18n). Omit with `kicker=""` to hide. */
	kicker?: string;
	title: string;
	description: string;
	detail?: string;
	primaryAction?: ErrorStateAction;
	secondaryAction?: ErrorStateAction;
	children?: ReactNode;
};

export function ErrorState({
	kicker = "Failed",
	title,
	description,
	detail,
	primaryAction,
	secondaryAction,
	children,
}: ErrorStateProps) {
	return (
		<div
			className="rounded-md border border-error-border bg-error-surface px-5 py-6"
			role="alert"
		>
			{kicker ? (
				<p className="font-ui m-0 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-error uppercase">
					<span
						className="inline-flex size-4 shrink-0 items-center justify-center rounded-sm border border-error-border bg-bg font-mono text-[0.65rem] font-bold leading-none text-error"
						aria-hidden
					>
						!
					</span>
					<span>{kicker}</span>
				</p>
			) : null}
			<h3
				className={`font-ui m-0 text-sm font-semibold text-error ${kicker ? "mt-2" : ""}`.trim()}
			>
				{title}
			</h3>
			<p className="font-ui m-0 mt-2 text-sm leading-relaxed text-text">
				{description}
			</p>
			{detail ? (
				<p className="font-ui m-0 mt-2 font-mono text-xs leading-normal text-muted">
					{detail}
				</p>
			) : null}
			{children}
			{(primaryAction || secondaryAction) && (
				<div className="mt-5 flex flex-wrap items-center gap-3">
					{primaryAction ? (
						<Button type="button" onClick={primaryAction.onClick}>
							{primaryAction.label}
						</Button>
					) : null}
					{secondaryAction ? (
						<Button
							type="button"
							variant="secondary"
							onClick={secondaryAction.onClick}
						>
							{secondaryAction.label}
						</Button>
					) : null}
				</div>
			)}
		</div>
	);
}