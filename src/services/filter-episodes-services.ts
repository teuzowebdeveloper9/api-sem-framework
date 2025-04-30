import { IncomingMessage } from "http";
import { getPodcasts } from "../repositories/podcast-respository"

export const serviceFilterEpisodes = async (podcastname: string | undefined) =>{
     const querystring = podcastname?.split('?p=')[1] ?? ''

     const data = await getPodcasts(querystring);
}