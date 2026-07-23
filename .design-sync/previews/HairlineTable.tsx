import { EmptyState, HairlineTable } from "@lifanh/quiet-paper";

type Run = {
	id: string;
	name: string;
	status: "ok" | "draft";
	ms: number;
};

const SAMPLE_ROWS: Run[] = [
	{ id: "r1", name: "ingest-notes", status: "ok", ms: 124 },
	{ id: "r2", name: "sync-index", status: "ok", ms: 891 },
	{ id: "r3", name: "export-csv", status: "draft", ms: 0 },
];

const columns = [
	{ id: "name", header: "Job Name", cell: (row: Run) => row.name },
	{
		id: "status",
		header: "Status",
		cell: (row: Run) => (
			<span className={row.status === "ok" ? "text-text" : "text-muted"}>
				{row.status}
			</span>
		),
	},
	{
		id: "ms",
		header: "ms",
		align: "right" as const,
		cell: (row: Run) => (row.ms > 0 ? row.ms : "—"),
	},
];

export function Filled() {
	return (
		<HairlineTable
			caption="Recent prototype job runs"
			rows={SAMPLE_ROWS}
			getRowKey={(row) => row.id}
			columns={columns}
		/>
	);
}

export function Empty() {
	return (
		<HairlineTable
			caption="Recent prototype job runs"
			rows={[]}
			getRowKey={(row: Run) => row.id}
			columns={columns}
			empty={
				<EmptyState
					title="No runs recorded"
					description="Load sample rows to see alignment and hairline dividers."
					primaryAction={{ label: "Load samples", onClick: () => {} }}
				/>
			}
		/>
	);
}
