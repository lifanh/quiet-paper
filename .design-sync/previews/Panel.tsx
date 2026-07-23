import { Button, Field, Panel } from "@lifanh/quiet-paper";

export function WithForm() {
	return (
		<Panel>
			<header className="mb-4 space-y-2">
				<h2 className="m-0 font-sans text-xl leading-tight text-text">
					Stay in the loop
				</h2>
				<p className="m-0 text-base leading-relaxed text-muted">
					One quiet note when there is something worth reading. No noise.
				</p>
			</header>
			<form className="space-y-4" aria-label="Email subscription">
				<Field
					id="panel-email"
					label="Email"
					type="email"
					name="email"
					autoComplete="email"
					placeholder="you@example.com"
					hint="Display only — nothing is sent yet."
				/>
				<Button type="submit">Subscribe</Button>
			</form>
		</Panel>
	);
}

export function TextOnly() {
	return (
		<Panel className="max-w-measure-wide">
			<header className="space-y-1">
				<h2 className="font-ui m-0 text-sm font-semibold text-text">
					Recent runs
				</h2>
				<p className="font-ui m-0 text-xs text-muted">
					Hairline panel — no shadow, one border.
				</p>
			</header>
		</Panel>
	);
}
