const PICTURE = 0;
const TEXT = 1;

const API_CONFIG = {
    apiKey: 'YOUR_API_KEY', // OpenAI APIキーをここに入れてください
    imageEndpoint: 'https://api.openai.com/v1/images/generations',
    textEndpoint: 'https://api.openai.com/v1/chat/completions'
};

async function generateImage(prompt) {
    const response = await fetch(API_CONFIG.imageEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_CONFIG.apiKey}`,
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

async function generateText(prompt) {
    const response = await fetch(API_CONFIG.textEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_CONFIG.apiKey}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 100, // 必要に応じて調整
        }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content; // 生成されたテキストを取得
}

function sendToGPT(prompt, mode) {
    if (mode === PICTURE) { // 画像生成
        generateImage(prompt).then(imageUrl => {
            console.log('prompt:', prompt);
            console.log('生成された画像のURL:', imageUrl);
            document.getElementById('output').value = `生成された画像のURL: ${imageUrl}`; // outputに表示

            // 画像を表示する
            const imgElement = document.getElementById('generatedImage');
            imgElement.src = imageUrl;
            imgElement.style.display = 'block'; // 画像を表示

        }).catch(error => {
            console.error('エラー:', error);
            document.getElementById('output').value = `エラー: ${error.message}`; // エラーをoutputに表示
        });
    } else if (mode === TEXT) { // テキスト生成
        generateText(prompt).then(text => {
            console.log('prompt:', prompt);
            console.log('生成されたテキスト:', text);
            document.getElementById('output').value = `生成されたテキスト: ${text}`; // outputに表示

        }).catch(error => {
            console.error('エラー:', error);
            document.getElementById('output').value = `エラー: ${error.message}`; // エラーをoutputに表示
        });
    } else {
        console.error('無効なモード:', mode);
        document.getElementById('output').value = 'エラー: 無効なモード'; // エラーをoutputに表示
    }
}
