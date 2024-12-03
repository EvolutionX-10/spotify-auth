# Spotify Auth

This is a basic starter project for a [Spotify](https://www.spotify.com/) authentication flow using [OAuth 2.0](https://oauth.net/2/).

## Setup

1. Create a new app on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Set the redirect URI to `http://localhost:3000/api/login`.
3. Copy the client ID and client secret to `.env`.
4. Run `bun install`.
5. Run `bun run`.
6. Open `http://localhost:3000` in your browser.

## Usage

1. Click the "Login with Spotify" button.
2. Authorize the app.
3. You should successfully see a JSON response with the access token.
4. Use the access token to make requests to the Spotify API.

## Contributing

To contribute to this repository, feel free to fork the repository and make changes. Once you have made your changes, you can submit a pull request.
A change should have a valid reason, and features should be added only if it's basic.

1. Fork the repository and select the **main** branch.
2. Create a new branch and make your changes.
3. Make sure you use a proper code formatter. [^lint]
4. Make sure you have a good commit message.[^commit]
5. Push your changes.
6. Submit a pull request [here][pr].
<!-- References -->

[^lint]: We recommend using [`prettier`] to style your code.
[^commit]: We strongly follow the [`Commit Message Conventions`]. This is important when commiting your code for a PR.

[`prettier`]: https://prettier.io/
[`commit message conventions`]: https://conventionalcommits.org/en/v1.0.0/
[pr]: https://github.com/EvolutionX-10/spotify-auth/pulls
