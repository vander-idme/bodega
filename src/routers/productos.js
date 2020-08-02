const express= require('express');
const router=express.Router();
const Producto=require('../models/Producto');
const {isAuthenticated}=require('../helpers/auth');

router.get('/producto',async(req,res)=>{
    const productos=await Producto.find();
    res.json(productos);
});

router.post('/producto',async(req,res)=>{
    const{nombre,precio,cantidad,categoria}=req.body;

    const newProducto= new Producto({
        nombre,
        precio,
        cantidad,
        categoria
    });
    await newProducto.save;
    res.json({status:'producto recibido'});
});


router.put('producto/:id',async(req,res)=>{
    const{nombre,precio,cantidad, categoria}=req.body;
    const newProducto= {nombre,precio,cantidad,categoria};
    await Producto.findByIdAndUpdate(req.params.id,newProducto);
    res.json({status: 'producto actualizado'});
})

router.delete('producto/:id',async(req,res)=>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status:'producto eliminado'});
})


/*
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
*/

module.exports=router;
