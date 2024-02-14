import { getGmailClient } from '@/lib/gmail/client';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    return {
      status: 401,
      body: { error: 'Unauthorized' },
    };
  }

  const gmail = getGmailClient(session);

  const messages = await gmail.users.messages.list({
    userId: 'me',
    maxResults: 10,
  });

  return Response.json({ messages })
}
