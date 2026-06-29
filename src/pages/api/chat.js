import OpenAI from "openai";

export default async function handler(req, res) {
  // Only allow POST requests, as your frontend sends a POST request
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed." });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required." });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        reply:
          "Chat service is not configured. Set OPENAI_API_KEY in your environment.",
      });
    }

    const openai = new OpenAI({ apiKey });

    // Call the GPT-4o-mini model
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are the AI Front Desk Assistant for NJ Physio Friend, a premier physiotherapy clinic located in Rawalpindi and Islamabad. Your tone is warm, empathetic, highly professional, and reassuring.

          YOUR PRIMARY GOALS:
          1. Answer basic questions about our services (e.g., back pain, neck pain, sports injuries, post-surgery rehab, frozen shoulder, dry needling, pediatric physio).
          2. Guide the user to book an appointment or call the clinic. 

          CRITICAL MEDICAL RULES:
          - YOU ARE NOT A DOCTOR. You cannot diagnose conditions, prescribe exercises, or offer medical advice. 
          - If a user describes their pain, validate their discomfort ("I'm sorry to hear you're experiencing that"), and suggest that our expert physiotherapists can help evaluate and treat the root cause.
          - If a user mentions severe, sudden, or life-threatening pain, instruct them to seek immediate emergency medical attention or call the clinic directly.

          CONVERSATION RULES:
          - Keep answers highly precise, direct, and concise (under 3 sentences when possible).
          - Always overlook and internally correct user typos without pointing them out.
          - Do not use overly complex medical jargon unless explaining a service simply.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      // Temperature lowered to 0.3 for a medical setting.
      // This makes the AI more predictable, factual, and less likely to hallucinate medical info.
      temperature: 0.3,
      max_tokens: 250, // Keeps the AI from writing long medical essays
      presence_penalty: 0,
      frequency_penalty: 0,
    });

    // Extract the text response
    const reply = completion.choices[0].message.content;

    // Send the response back to your frontend
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI API Error:", error);

    // Fallback message
    return res.status(500).json({
      reply:
        "Sorry, I'm having trouble connecting right now. Please call our clinic directly at [Insert Phone Number] to speak with our team.",
    });
  }
}
