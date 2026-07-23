import { LoadingBlock } from "@lifanh/quiet-paper";

export function Default() {
	return <LoadingBlock label="Loading runs" lines={3} />;
}

export function TwoLines() {
	return <LoadingBlock label="Loading summary" lines={2} />;
}
