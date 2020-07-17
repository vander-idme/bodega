const mongoose= require('mongoose');
let Schema=mongoose.Schema;
let SchemaProducto = new Schema({
    nombre: String,
    precion: Number,
    cantidad:Number,
    categoria:{type: Schema.Types.ObjectId, ref:"Categoria"}
});

module.exports = moongoose.model('Producto',SchemaProducto); 