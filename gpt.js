// gpt.js

async function generateImage(prompt) {
    const apiKey = 'YOUR_API_KEY'; // OpenAI APIキーをここに入れてください
    const endpoint = 'https://api.openai.com/v1/images/generations';

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
        }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data[0].url; // 生成された画像のURLを取得
}

function sendToGPT() {
    const prompt = 'おはよう'; // 送信する固定の文字列
    generateImage(prompt).then(imageUrl => {
        console.log('生成された画像のURL:', imageUrl);
        document.getElementById('output').value = `生成された画像のURL: ${imageUrl}`; // outputに表示
    }).catch(error => {
        console.error('エラー:', error);
        document.getElementById('output').value = `エラー: ${error.message}`; // エラーをoutputに表示
    });
}
