import { ErrorState } from "@lifanh/quiet-paper";

export function WithDetail() {
	return (
		<ErrorState
			title="Could not load summary"
			description="The request failed. Check the network or API, then try again."
			detail="GET /api/summary → 503 Service Unavailable"
			primaryAction={{ label: "Retry", onClick: () => {} }}
			secondaryAction={{ label: "Dismiss", onClick: () => {} }}
		/>
	);
}

export function NoKicker() {
	return (
		<ErrorState
			kicker=""
			title="Something went wrong"
			description="Plain state with the status kicker hidden."
			primaryAction={{ label: "Try again", onClick: () => {} }}
		/>
	);
}
