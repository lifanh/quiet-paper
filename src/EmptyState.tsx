import type { ReactNode } from "react";
import { Button } from "./Button";

export type EmptyStateAction = {
	label: string;
	onClick: () => void;
};

export type EmptyStateProps = {
	title: string;
	description: string;
	primaryAction?: EmptyStateAction;
	secondaryAction?: EmptyStateAction;
	children?: ReactNode;
};

export function EmptyState({
	title,
	description,
	primaryAction,
	secondaryAction,
	children,
}: EmptyStateProps) {
	return (
		<div
			className="rounded-md border border-dashed border-border py-10 px-5 text-center"
			role="status"
		>
			<h3 className="font-ui m-0 text-sm font-semibold text-text">{title}</h3>
			<p className="font-ui m-0 mt-2 text-sm leading-relaxed text-muted">
				{description}
			</p>
			{children}
			{(primaryAction || secondaryAction) && (
				<div className="mt-5 flex flex-wrap items-center justify-center gap-3">
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