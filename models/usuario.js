const mongoose= require('mongoose');
let Schema=mongoose.Schema;
let SchemaUsuario = new Schema({
    nombre: String,
    contraseña:String,
    telefono: Number,
    direccion:String
});

module.exports=mongoose.model('Usuario',SchemaUsuario);
