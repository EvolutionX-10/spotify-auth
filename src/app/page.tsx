import { LoginWithSpotify } from "@/components/login";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center">
			<h1>Guess the Song</h1>
			<LoginWithSpotify />
		</main>
	);
}
