import { getPodcasts } from "../repositories/podcast-respository"

export const serviceFilterEpisodes = async (podcastname: string) =>{
     const data = await getPodcasts(podcastname);
}