import { Field } from "@lifanh/quiet-paper";

export function WithHint() {
	return (
		<Field
			id="subscribe-email"
			label="Email"
			type="email"
			name="email"
			autoComplete="email"
			placeholder="you@example.com"
			hint="Display only — nothing is sent yet."
		/>
	);
}

export function WithError() {
	return (
		<Field
			id="demo-name"
			label="Experiment name"
			hint="A single line is enough for early demos."
			error="Enter a name to save a draft."
			placeholder="e.g. Quiet inbox"
		/>
	);
}

export function Filled() {
	return (
		<Field
			id="demo-name-filled"
			label="Experiment name"
			defaultValue="Quiet inbox"
		/>
	);
}
