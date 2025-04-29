import {IncomingMessage, ServerResponse} from "http"
import { serviceListEpisodes } from "../services/list-episodes-podcasts.js";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    res.writeHead(200, {'content-type': 'application/json'});

    const data = await serviceListEpisodes();
    
    res.end(JSON.stringify(data));
}