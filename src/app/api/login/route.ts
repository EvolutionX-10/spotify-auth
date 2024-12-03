import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams;
	if (params.get("error")) {
		redirect("/?error=login_failed");
	} else {
		const code = params.get("code");
		if (code) {
			const req = await fetch("https://accounts.spotify.com/api/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString(
						"base64"
					)}`,
				},
				body: new URLSearchParams({
					code,
					redirect_uri: "http://localhost:3000/api/login",
					grant_type: "authorization_code",
				}),
			});
			const resp = await req.json();

			const response = NextResponse.redirect(new URL(`/dashboard?access_token=${resp.access_token}`, request.url));
			response.cookies.set("refresh_token", resp.refresh_token, { path: "/", httpOnly: true, secure: true });
			return response;
		}
	}
}
