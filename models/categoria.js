const mongoose= require('mongoose');
let Schema=mongoose.Schema;
let SchemaCategoria = new Schema({
    nombre_cat: String,
    descripcion_cat:String
});

module.exports = moongoose.model('Categoria',SchemaCategoria); 