import { Button } from "@/components/ui/button";
import { Client } from "@/lib/client";
import { redirect } from "next/navigation";

export function LoginWithSpotify() {
	return (
		<Button
			className="m-4"
			onClick={async () => {
				"use server";
				const url = await Client.loginWithSpotify();
				redirect(url);
			}}
		>
			Login with Spotify
		</Button>
	);
}
