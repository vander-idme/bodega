const mongoose= require('mongoose');
let Schema = mongoose.Schema;
let SchemaVenta= new Schema({
    fecha:{type: Date, default: Date.now },
    valorTotal=Number,
    cliente:{type: Schema.Types.ObjectId, ref:"Cliente"},
    productos:[{
        producto :{type:Schema.Types.ObjectId,
        ref:"Producto"},
        cantidad: Number
    }],
    usuario:{type: Schema.Types.ObjectId, ref:"Usuario"}
})

module.exports=mongoose.model('Venta',SchemaVenta);
