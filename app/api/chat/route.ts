import { convertToModelMessages, gateway, streamText } from 'ai'

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: gateway('openai/gpt-5-mini'),
    system: `You are Aura Flow, a practical workplace productivity assistant. Help users draft professional emails, summarize meeting notes, and plan tasks. Be concise, specific, and action-oriented. If the user asks about Notion, explain that Aura Flow can prepare content for a Notion workspace, but never claim to have accessed a workspace unless a Notion connection is available.`,
    messages: await convertToModelMessages(messages),
    temperature: 0.4,
  })

  return result.toUIMessageStreamResponse()
}
