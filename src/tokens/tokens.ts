/**
 * Single source of truth for quiet-paper design tokens.
 *
 * dist/tokens.css, dist/tokens.json, styles/tokens.css, and the Tailwind
 * @theme bridge (styles/tailwind-theme.css) are all generated from this file
 * by scripts/build-tokens.mjs. Edit values here — never in the generated
 * CSS/JSON directly.
 *
 * `tw`, when present, is the Tailwind v4 theme namespace name this token
 * bridges to (e.g. `--space-4` -> `--spacing-4`). Tokens without `tw` are
 * quiet-paper-only and are not exposed through the Tailwind bridge.
 */

export interface TokenDef {
	name: string;
	value: string;
	tw?: string;
}

export interface TokenGroup {
	group: string;
	comment: string;
	tokens: TokenDef[];
}

export const tokenGroups: TokenGroup[] = [
	{
		group: "color",
		comment: "Color",
		tokens: [
			{ name: "color-bg", value: "#f4f3ef", tw: "color-bg" },
			{ name: "color-surface", value: "#faf9f6", tw: "color-surface" },
			{ name: "color-text", value: "#1a1917", tw: "color-text" },
			{ name: "color-text-muted", value: "#5c5a54", tw: "color-muted" },
			{ name: "color-border", value: "#ddd9d0", tw: "color-border" },
			{
				name: "color-border-subtle",
				value: "#ebe8e1",
				tw: "color-border-subtle",
			},
			{ name: "color-accent", value: "#2a4f6e", tw: "color-accent" },
			{
				name: "color-accent-hover",
				value: "#1f3d56",
				tw: "color-accent-hover",
			},
			{ name: "color-accent-muted", value: "#6b8a9e" },
			// Amber note — distinct from error, still paper-like
			{ name: "color-warning", value: "#7a4b12", tw: "color-warning" },
			{
				name: "color-warning-border",
				value: "#d3a25c",
				tw: "color-warning-border",
			},
			{
				name: "color-warning-surface",
				value: "#fbf0dc",
				tw: "color-warning-surface",
			},
			// Rust ink — enough red chroma for deutan/protan, still not alarm UI
			{ name: "color-error", value: "#a33232", tw: "color-error" },
			{
				name: "color-error-border",
				value: "#c87868",
				tw: "color-error-border",
			},
			// Salmon wash — clearly "marked" vs cream surface, not another gray
			{
				name: "color-error-surface",
				value: "#f8e8e4",
				tw: "color-error-surface",
			},
		],
	},
	{
		group: "space",
		comment: "Space",
		tokens: [
			{ name: "space-1", value: "0.25rem", tw: "spacing-1" },
			{ name: "space-2", value: "0.5rem", tw: "spacing-2" },
			{ name: "space-3", value: "0.75rem", tw: "spacing-3" },
			{ name: "space-4", value: "1rem", tw: "spacing-4" },
			{ name: "space-5", value: "1.25rem", tw: "spacing-5" },
			{ name: "space-6", value: "1.5rem", tw: "spacing-6" },
			{ name: "space-8", value: "2rem", tw: "spacing-8" },
			{ name: "space-10", value: "2.5rem", tw: "spacing-10" },
			{ name: "space-12", value: "3rem", tw: "spacing-12" },
			{ name: "space-16", value: "4rem", tw: "spacing-16" },
		],
	},
	{
		group: "type",
		comment: "Type",
		tokens: [
			{
				name: "font-sans",
				value:
					'"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
				tw: "font-sans",
			},
			{
				name: "font-ui",
				value: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
				tw: "font-ui",
			},
			{
				name: "font-mono",
				value: 'ui-monospace, "SF Mono", Menlo, monospace',
				tw: "font-mono",
			},
			{ name: "text-xs", value: "0.8125rem", tw: "text-xs" },
			{ name: "text-sm", value: "0.875rem", tw: "text-sm" },
			{ name: "text-base", value: "1rem", tw: "text-base" },
			{ name: "text-lg", value: "1.125rem", tw: "text-lg" },
			{ name: "text-xl", value: "1.3125rem", tw: "text-xl" },
			{ name: "text-2xl", value: "1.625rem", tw: "text-2xl" },
			{ name: "text-3xl", value: "2rem", tw: "text-3xl" },
			{ name: "font-weight-normal", value: "400" },
			{ name: "font-weight-medium", value: "500" },
			{ name: "font-weight-semibold", value: "600" },
			{ name: "font-weight-bold", value: "700" },
			{ name: "leading-tight", value: "1.3", tw: "leading-tight" },
			{ name: "leading-normal", value: "1.55", tw: "leading-normal" },
			{ name: "leading-relaxed", value: "1.65", tw: "leading-relaxed" },
			{ name: "tracking-normal", value: "0em" },
			{ name: "tracking-wide", value: "0.025em" },
		],
	},
	{
		group: "radius",
		comment: "Radius",
		tokens: [
			{ name: "radius-sm", value: "3px", tw: "radius-sm" },
			{ name: "radius-md", value: "6px", tw: "radius-md" },
		],
	},
	{
		group: "measure",
		comment: "Measure",
		tokens: [
			{ name: "measure", value: "38rem", tw: "max-width-measure" },
			{
				name: "measure-wide",
				value: "48rem",
				tw: "max-width-measure-wide",
			},
		],
	},
	{
		group: "density",
		comment: "Density",
		tokens: [
			{ name: "density-prose", value: "1" },
			{ name: "density-ui", value: "0.875" },
		],
	},
];
