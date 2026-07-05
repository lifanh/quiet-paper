import type { ReactNode } from "react";

export type PanelProps = {
	children: ReactNode;
	className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
	return (
		<section
			className={`rounded-md border border-border-subtle bg-surface p-5 ${className}`.trim()}
		>
			{children}
		</section>
	);
}