import { Button, Dialog } from "@lifanh/quiet-paper";

export function WithActions() {
	return (
		<Dialog
			defaultOpen
			trigger={<Button variant="secondary">Open dialog</Button>}
			title="Quiet confirmation"
			actions={<Button>Continue</Button>}
		>
			Dialogs keep focused decisions separate from the rest of the page.
		</Dialog>
	);
}

export function Compound() {
	return (
		<Dialog.Root defaultOpen>
			<Dialog.Trigger
				render={<Button variant="secondary">Open dialog</Button>}
			/>
			<Dialog.Portal>
				<Dialog.Backdrop />
				<Dialog.Popup>
					<Dialog.Title>Discard draft?</Dialog.Title>
					<Dialog.Description>
						Composed from the individual parts — Root, Trigger, Portal,
						Backdrop, Popup, Title, Description, Close, Actions — for layouts
						the convenience wrapper doesn't cover.
					</Dialog.Description>
					<Dialog.Actions>
						<Dialog.Close render={<Button variant="secondary">Cancel</Button>} />
						<Dialog.Close render={<Button>Discard</Button>} />
					</Dialog.Actions>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
