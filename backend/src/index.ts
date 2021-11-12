//FITXER EXECUCIÓ DEL PROJECTE
import app from './app'; 

import './database'; 

app.listen(app.get('port'));
console.log('Servidor escoltant al port:', app.get('port'));