const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const flash=require('connect-flash');
const passport=require('passport');
const bodyParser = require('body-parser')
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
require('./config/passport');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    res.locals.user=req.user || null;
    next();
})


app.use(require('./routers/index'));
app.use(require('./routers/productos'));
app.use(require('./routers/ventas'));
app.use(require('./routers/usuarios'));
app.listen(app.get('port'),()=>{
    console.log('sever listennig')
})