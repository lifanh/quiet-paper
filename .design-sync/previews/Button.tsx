import { Button } from "@lifanh/quiet-paper";

export function Variants() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button>Save draft</Button>
			<Button variant="secondary">Reset</Button>
		</div>
	);
}

export function Disabled() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button disabled>Save draft</Button>
			<Button variant="secondary" disabled>
				Reset
			</Button>
		</div>
	);
}
