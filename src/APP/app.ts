import * as http from 'http';

import {getFilterEpisodes, getListEpisodes} from '../controllers/podcast-controller.js'
import { Routes } from '../routes/routes.js';
import { httpsMethods } from '../UTILS/http-methods.js';




export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
	
    const [baseurl, query] = req.url?.split('?') || [];
   
     if (req.method === httpsMethods.GET && baseurl === Routes.LIST_EPISODES) {
      await getListEpisodes(req, res);
     }
   
     if (req.method === httpsMethods.GET && baseurl === Routes.FILTER_EPISODES) {
      await getFilterEpisodes(req, res);
     }
   
   }