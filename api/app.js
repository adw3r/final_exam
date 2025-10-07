import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000


const url = 'https://api.telegram.org/bot8461357406:AAF-yAu2zzBLF20qFg9tPhCnKAYdZL9FM5k/sendMessage'
app.post('/api/sendMessage', async (req, res) => {
    const text = req.body.text;
    const response = await fetch(url, {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            chat_id: '@adw3r_tech', text: text,
        }),
    });
    res.send(await response.json())
})

app.get('/api/health', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
