import {IncomingMessage, ServerResponse} from "http"
import { serviceListEpisodes } from "../services/list-episodes-podcasts.js";
import { serviceFilterEpisodes } from "../services/filter-episodes-services.js";
import { json } from "stream/consumers";
import { statusCode } from "../UTILS/status-code.js";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    res.writeHead(statusCode.OK, {'content-type': 'application/json'});

    const data = await serviceListEpisodes();
    
    res.end(JSON.stringify(data));
}

export async function getFilterEpisodes(
    req: IncomingMessage,
    res: ServerResponse) {
    
    
    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(statusCode.OK, { 'content-type': 'application/json' });
    res.end(JSON.stringify(content));
}