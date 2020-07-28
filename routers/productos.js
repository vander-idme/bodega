const express= require('express');
const router=express.Router();
const Producto=require('../models/Producto');
const {isAuthenticated}=require('../helpers/auth');
/*
    nombre: String,
    precio: Number,
    cantidad:Number,
    categoria:String
*/
router.get('/productos',async(req,res)=>{
    const productos=await Producto.find();
    res.render('htmlproductos',{
        productos
    });
});

router.post('/agregar',async(req,res)=>{
    const{nombre,precio,cantidad,categoria}=req.body;

    const newProducto= new Producto({
        nombre,
        precio,
        cantidad,
        categoria
    });
    await newProducto.save;
    res.redirect('/productos');
});

router.get('/edit/:id',async(req,res)=>{
 const{id}=req.params;
 const producto= await Producto.findById(id);
 res.render('edit',{
     producto
 });
});

router.post('/edit/:id',async(req,res)=>{
    const {id}=req.params;
    Producto.update({_id: id},req.body);
    res.redirect('/productos')
})

router.get('/delete/:id',async(req,res)=>{
    const {id}=req.params;
    await Producto.remove({_id: id});
    res.redirect('/productos');
});


module.exports=router;
