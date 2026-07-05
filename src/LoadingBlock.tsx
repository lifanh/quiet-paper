export type LoadingBlockProps = {
	/** Accessible label for screen readers */
	label?: string;
	/** Number of placeholder lines */
	lines?: number;
	className?: string;
};

export function LoadingBlock({
	label = "Loading",
	lines = 3,
	className = "",
}: LoadingBlockProps) {
	return (
		<div
			className={`space-y-3 ${className}`.trim()}
			role="status"
			aria-live="polite"
			aria-busy="true"
		>
			<span className="sr-only">{label}</span>
			{Array.from({ length: lines }, (_, i) => (
				<div
					key={i}
					className="h-3 animate-pulse rounded-sm bg-border-subtle"
					style={{ width: i === lines - 1 ? "72%" : "100%" }}
					aria-hidden="true"
				/>
			))}
		</div>
	);
}