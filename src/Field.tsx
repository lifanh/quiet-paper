import type { InputHTMLAttributes } from "react";

export type FieldProps = {
	id: string;
	label: string;
	hint?: string;
	/** Inline validation — one line under the input, no box */
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Field({
	id,
	label,
	hint,
	error,
	className = "",
	"aria-describedby": ariaDescribedBy,
	...inputProps
}: FieldProps) {
	const errorId = error ? `${id}-error` : undefined;
	const hintId = hint && !error ? `${id}-hint` : undefined;
	const describedBy =
		[errorId, hintId, ariaDescribedBy].filter(Boolean).join(" ") || undefined;

	return (
		<div className="space-y-2">
			<label htmlFor={id} className="font-ui block text-sm text-muted">
				{label}
			</label>
			<input
				id={id}
				aria-invalid={error ? true : undefined}
				aria-describedby={describedBy}
				className={`font-ui w-full rounded-sm border bg-bg px-3 py-2 text-sm text-text placeholder:text-muted/70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 ${error ? "border-2 border-error-border focus-visible:outline-error" : "border border-border focus-visible:outline-accent"} ${className}`.trim()}
				{...inputProps}
			/>
			{error ? (
				<p
					id={errorId}
					className="font-ui m-0 text-xs font-medium leading-normal text-error"
					role="alert"
				>
					<span className="font-mono font-bold" aria-hidden>
						×{" "}
					</span>
					{error}
				</p>
			) : hint ? (
				<p id={hintId} className="font-ui m-0 text-xs leading-normal text-muted">
					{hint}
				</p>
			) : null}
		</div>
	);
}