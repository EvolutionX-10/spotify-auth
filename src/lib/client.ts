export class Client {
	public static async loginWithSpotify() {
		const params = new URLSearchParams({
			client_id: process.env.CLIENT_ID,
			redirect_uri: "http://localhost:3000/api/login",
			response_type: "code",
			show_dialog: "true",
			scope: "user-top-read user-read-email user-read-private",
		});

		const url = `https://accounts.spotify.com/authorize?${params.toString()}`;
		const resp = await fetch(url);
		return resp.url;
	}
}
