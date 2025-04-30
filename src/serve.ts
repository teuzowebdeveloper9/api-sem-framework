import * as http from 'http';

import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller.js'

const serve = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
	
  if (req.method === 'GET' && req.url === "/api/list" ){
   await getListEpisodes(req, res);
  }

  if (req.method === 'GET' && req.url === "/api/episode"){
   await getFilterEpisodes(req, res);
  }

});

serve.listen(3000, () => {
  console.log('serve running on port 3000');    
});