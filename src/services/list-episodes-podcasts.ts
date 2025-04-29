import { getPodcasts } from "../repositories/podcast-respository.js";

export const serviceListEpisodes = async ()=> {

    
    const data = getPodcasts();

    return data;
}

