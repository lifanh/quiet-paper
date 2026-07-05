import type { ReactNode } from "react";

export type HairlineColumn<T> = {
	id: string;
	header: string;
	align?: "left" | "right";
	cell: (row: T) => ReactNode;
	headerClassName?: string;
	cellClassName?: string;
};

export type HairlineTableProps<T> = {
	caption?: string;
	columns: HairlineColumn<T>[];
	rows: T[];
	getRowKey: (row: T) => string;
	empty?: ReactNode;
};

export function HairlineTable<T>({
	caption,
	columns,
	rows,
	getRowKey,
	empty,
}: HairlineTableProps<T>) {
	if (rows.length === 0 && empty) {
		return <>{empty}</>;
	}

	return (
		<div className="overflow-x-auto">
			<table className="w-full min-w-[20rem] border-collapse text-left">
				{caption ? (
					<caption className="sr-only">{caption}</caption>
				) : null}
				<thead>
					<tr className="border-b border-border">
						{columns.map((col) => (
							<th
								key={col.id}
								scope="col"
								className={`font-ui pb-2 text-xs font-semibold tracking-wide text-muted uppercase ${col.align === "right" ? "text-right" : "text-left"} ${col.headerClassName ?? ""}`.trim()}
							>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr
							key={getRowKey(row)}
							className="border-b border-border-subtle last:border-b-0"
						>
							{columns.map((col) => (
								<td
									key={col.id}
									className={`font-ui py-3 text-sm text-text ${col.align === "right" ? "text-right tabular-nums" : "text-left"} ${col.cellClassName ?? ""}`.trim()}
								>
									{col.cell(row)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}