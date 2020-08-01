const mongoose= require('mongoose');
let Schema=mongoose.Schema;
let SchemaProducto = new Schema({
    nombre: String,
    precio: Number,
    cantidad:Number,
    categoria:String
});

module.exports = mongoose.model('Producto',SchemaProducto); 