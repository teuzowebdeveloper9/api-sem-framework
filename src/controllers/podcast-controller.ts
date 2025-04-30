import {IncomingMessage, ServerResponse} from "http"
import { serviceListEpisodes } from "../services/list-episodes-podcasts.js";
import { serviceFilterEpisodes } from "../services/filter-episodes-services.js";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    res.writeHead(200, {'content-type': 'application/json'});

    const data = await serviceListEpisodes();
    
    res.end(JSON.stringify(data));
}

export const  getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) =>{
    const content = await serviceFilterEpisodes('podpah') 

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(content));
}