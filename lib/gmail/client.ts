import { google } from 'googleapis';
import { Session } from 'next-auth';

// Creates a new OAuth2 client with the provided credentials
function getClient(session: Session & { refreshToken?: string }) {
  const auth = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  });

  auth.setCredentials({
    refresh_token: session.refreshToken,
  });

  return auth;
}

// Returns a new Gmail client, authenticated with the provided session
export function getGmailClient(session: Session) {
  const auth = getClient(session);
  const gmail = google.gmail({ version: 'v1', auth });

  return gmail;
}
