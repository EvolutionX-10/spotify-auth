import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const cookies = request.cookies;
	const refresh_token = cookies.get("refresh_token");
	if (!refresh_token) return new Response("Not found", { status: 404 });

	const params = new URLSearchParams({
		grant_type: "refresh_token",
		refresh_token: refresh_token.value,
	});

	const url = `https://accounts.spotify.com/api/token?${params.toString()}`;
	const req = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64")}`,
		},
	});

	const resp = await req.json();

	const response = NextResponse.redirect(new URL(`/play?access_token=${resp.access_token}`, request.url));
	response.cookies.set("refresh_token", resp.refresh_token, { path: "/", httpOnly: true, secure: true });
	return response;
}
