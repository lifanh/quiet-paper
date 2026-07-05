import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	variant?: Variant;
};

const variants: Record<Variant, string> = {
	primary:
		"bg-accent text-surface hover:bg-accent-hover border border-transparent",
	secondary: "bg-transparent text-text border-border hover:border-text",
};

export function Button({
	children,
	variant = "primary",
	className = "",
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={`font-ui inline-flex items-center justify-center rounded-sm border px-4 py-2 text-sm leading-none transition-colors ${variants[variant]} ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	);
}