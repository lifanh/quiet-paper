import { EmptyState } from "@lifanh/quiet-paper";

export function PrimaryOnly() {
	return (
		<EmptyState
			title="No experiments yet"
			description="Add a sample row to see the filled list pattern."
			primaryAction={{ label: "Add sample", onClick: () => {} }}
		/>
	);
}

export function TwoActions() {
	return (
		<EmptyState
			title="No runs recorded"
			description="Load sample rows to see alignment and hairline dividers."
			primaryAction={{ label: "Load samples", onClick: () => {} }}
			secondaryAction={{ label: "Dismiss", onClick: () => {} }}
		/>
	);
}
