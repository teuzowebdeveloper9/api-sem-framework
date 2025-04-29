import * as http from 'http';

import {getListEpisodes} from './controllers/podcast-controller.js'

const serve = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
	
  if (req.method === 'GET' ){
   await getListEpisodes(req, res);
  }

});

serve.listen(3000, () => {
  console.log('serve running on port 3000');    
});