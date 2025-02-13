import ky from 'ky';
import { parseStringPromise } from 'xml2js';

async function getAllNews(req, res) {
    try {
        const response = await ky.get(process.env.API_URL).text();
        const result = await parseStringPromise(response, { explicitArray: false });
        res.status(200).json(result.rss.channel.item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function getNewsBySport(req, res) {
    try {
        const response = await ky.get(process.env.API_URL + req.params.sport).text();
        const result = await parseStringPromise(response, { explicitArray: false });
        res.status(200).json(result.rss.channel.item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { getAllNews, getNewsBySport };