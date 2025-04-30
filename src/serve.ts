import * as http from 'http';
import { app } from './APP/app';


const serve = http.createServer(app);

serve.listen(3000, () => {
  console.log('serve running on port 3000');    
});