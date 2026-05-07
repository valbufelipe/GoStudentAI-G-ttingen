export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { tool, data } = req.body;

    const prompt = `
Du bist ein hilfreicher Assistent für junge Menschen und Studierende in Göttingen.

Tool: ${tool}

Daten:
${JSON.stringify(data, null, 2)}

Erstelle einen natürlichen, professionellen Text auf Deutsch und Englisch.
Der Text soll modern, hilfreich und nicht zu steif klingen.
`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: result.error?.message || "OpenAI error" });
    }

    return res.status(200).json({
      text: result.output_text
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}