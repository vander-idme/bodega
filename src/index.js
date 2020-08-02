const express=require('express');
const path=require('path');
const flash=require('connect-flash');
const passport=require('passport');

//inicializamos el servidor
const app=express();

//configuraciones
app.set('port', process.env.PORT||3000);

require('./database');
require('./config/passport');

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//configuramos los archivos staticos
app.use(express.static(path.join(__dirname,'public')));

app.use(require('./routers/index'));
app.use(require('./routers/productos'));
app.use(require('./routers/ventas'));
app.use(require('./routers/usuarios'));
app.use(require('./routers/cliente'));

app.listen(app.get('port'),()=>{
    console.log(`sever listening in port ${app.get('port')}`)
})