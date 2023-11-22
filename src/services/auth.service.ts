import { STACKOVERFLOW_CLIENT_ID } from "../global";

export default class Auth {
  public static initiateStackOverflowAuth(): void {
    const url = new URL(`https://stackoverflow.com/oauth`);
    url.searchParams.append('client_id', STACKOVERFLOW_CLIENT_ID);
    url.searchParams.append('score', 'private_info');
    url.searchParams.append('redirect_uri', 'http://localhost:5000/oauth/callback/stackoverflow')

    window.open(url.toString(), '_self');
  }
}