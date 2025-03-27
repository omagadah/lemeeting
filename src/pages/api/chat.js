export const prerender = false;

export async function POST({ request }) {
  try {
    const { messages } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4', // tu peux aussi mettre "gpt-3.5-turbo"
        messages: [
          {
            role: 'system',
            content: 'Tu es l’assistant du site LeMeeting. Tu réponds de manière claire, empathique et utile aux utilisateurs.'
          },
          ...messages
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return new Response(JSON.stringify({ error: 'Aucune réponse générée.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ reply: data.choices[0].message }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Erreur API OpenAI:', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500
    });
  }
}
