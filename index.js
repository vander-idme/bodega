const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const app=express();

app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutDir:path.join(app.get('views'),'layouts'),
    partialDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');
require('./database');

app.use(require('./routers/index'));
app.use(require('./routers/moduloProductos'));
app.use(require('./routers/moduloVentas'));

app.listen(app.get('port'),()=>{
    console.log('sever listennig')
})