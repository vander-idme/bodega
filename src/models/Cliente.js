const mongoose= require('mongoose');
let Schema=mongoose.Schema;
let SchemaCliente = new Schema({
    nombre: String,
    telefono: Number,
    direccion:String
});

module.exports=mongoose.model('Cliente',SchemaCliente);
