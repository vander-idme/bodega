const express= require('express');
const router=express.Router();
const cliente=require('../../models/Cliente');
const Cliente = require('../../models/Cliente');

router.get('/cliente',async(req,res)=>{
    const cliente=await Cliente.find();
    res.render('htmlcliente',{
        cliente
    });
});

router.post('/cliente',async(req,res)=>{
    const{nombre,telefono,direccion}=req.body;

    const newCliente= new Cliente({
        nombre,
        telefono,
        direccion
    });
    await newCliente.save;
    res.redirect('/cliente');
});