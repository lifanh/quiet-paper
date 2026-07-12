import { Dialog as Base } from "@base-ui/react";
import type { ReactElement, ReactNode } from "react";

export type DialogProps = {
	trigger: ReactElement;
	title: ReactNode;
	children: ReactNode;
	actions: ReactNode;
};

export function Dialog({ trigger, title, children, actions }: DialogProps) {
	return (
		<Base.Root>
			<Base.Trigger render={trigger} />
			<Base.Portal>
				<Base.Backdrop className="fixed inset-0 bg-[rgba(26,25,23,.25)] opacity-0 transition-opacity data-open:opacity-100 data-ending-style:opacity-0" />
				<Base.Popup className="fixed top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-[26rem] -translate-x-1/2 -translate-y-1/2 scale-95 rounded-md border border-border bg-surface p-6 opacity-0 shadow-sm transition-all data-open:scale-100 data-open:opacity-100 data-ending-style:scale-95 data-ending-style:opacity-0">
					<Base.Title className="mb-2 font-sans text-lg text-text">
						{title}
					</Base.Title>
					<div className="mb-6 font-ui text-sm leading-normal text-muted">
						{children}
					</div>
					<div className="flex flex-wrap justify-end gap-3">{actions}</div>
				</Base.Popup>
			</Base.Portal>
		</Base.Root>
	);
}
