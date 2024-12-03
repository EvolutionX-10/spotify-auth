"use client";

import { useTokenStore } from "@/lib/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
	const params = useSearchParams();
	const router = useRouter();
	const { accessToken, setAccessToken } = useTokenStore();

	useEffect(() => {
		const access_token = params.get("access_token");
		if (access_token) {
			setAccessToken(access_token);
			console.log("Received access token", access_token);
		}
		// clear the search params
		router.replace("/play", undefined);
	}, []);

	useEffect(() => {
		const refreshAccessToken = async () => {
			try {
				const res = await fetch("/api/refresh_token");
				if (res.ok) {
					const json = await res.json();
					setAccessToken(json.access_token);
					console.log("Successfully refreshed token");
				} else {
					console.error("Failed to refresh token");
				}
			} catch (error) {
				console.error("Failed to refresh token", error);
			}
		};

		const interval = setInterval(refreshAccessToken, 1000 * 60 * 60); // refresh token every hour
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1>Dashboard</h1>
		</div>
	);
}
