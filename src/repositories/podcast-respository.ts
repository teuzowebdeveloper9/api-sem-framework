import { promises } from "dns";
import fs from "fs";
import path from "path";
import { podcasts } from "../models/models-Podcast.js";




export const pathdata = path.join(__dirname, "../repositories/podcasts.json");

export const getPodcasts = async (
podcastname?: string
): Promise<podcasts[]> => {

    const rawdata = fs.readFileSync(pathdata, "utf-8");
    let jsonData = JSON.parse(rawdata);

    if (podcastname){
        jsonData = jsonData.filter((
            (podcast: { podcastname: string; }) => podcast.podcastname.toLowerCase() == podcastname.toLowerCase())
    );
    }

    
    return jsonData
   
}