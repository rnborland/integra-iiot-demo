require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const fs = require('fs');

const app = express();
const PORT = 3001;

// ✅ Load SmartAlex system prompt from external file
const systemPrompt = fs.readFileSync('./prompt/system.txt', 'utf8');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Chatbot backend is running.');
});

app.options('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    return res.sendStatus(204);
});

app.post('/', async (req, res) => {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ reply: "No message history provided." });
    }

    // Prepend system prompt
    const fullConversation = [
        { role: "system", content: systemPrompt },
        ...messages
    ];

    try {
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: fullConversation
            })
        });

        const data = await openaiResponse.json();

        if (data.choices && data.choices.length > 0) {
            return res.json({ reply: data.choices[0].message.content.trim() });
        } else {
            return res.json({ reply: "AI did not return a valid response." });
        }

    } catch (error) {
        console.error('OpenAI API error:', error);
        return res.status(500).json({ reply: "Server error, please try again later." });
    }
});


app.listen(PORT, () => {
    console.log(`✅ SmartAlex chatbot backend listening at http://localhost:${PORT}`);
});
