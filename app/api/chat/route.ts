import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return Response.json({ error: 'Message required' }, { status: 400 });
        }

        const key = process.env.GEMINI_API_KEY;

        if (!key) {
            return Response.json(
                { error: 'Missing GEMINI_API_KEY' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(key);

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
        });

        const result = await model.generateContent(message);
        const reply = result.response.text();

        return Response.json({ reply });
    } catch (error: any) {
        return Response.json(
            { error: error?.message || 'Unknown server error' },
            { status: 500 }
        );
    }
}