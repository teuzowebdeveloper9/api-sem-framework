import {IncomingMessage, ServerResponse} from "http"
import { serviceListEpisodes } from "../services/list-episodes-podcasts.js";
import { serviceFilterEpisodes } from "../services/filter-episodes-services.js";
import { json } from "stream/consumers";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    res.writeHead(200, {'content-type': 'application/json'});

    const data = await serviceListEpisodes();
    
    res.end(JSON.stringify(data));
}

export async function getFilterEpisodes(
    req: IncomingMessage,
    res: ServerResponse) {
    const querystring = req.url?.split('?p=')[1] ?? ''
    
    const content = await serviceFilterEpisodes(querystring);

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content));
}