import mongoose from 'mongoose'
import { transformarADTO } from '../dto/ProductoDto.js'

const productosSchema = new mongoose.Schema({
    id: {type: Number},
    nombre: {type: String},
    desc: {type: String}
})

export default class ProductosDaoDB {
    constructor(connString) {
        this.connString = connString
        this.products = mongoose.model('Productos', productosSchema)
    }

    async init() {
        await mongoose.connect(this.connString)
        console.log('productos dao en mongodb -> listo!')
    }

    async disconnect() {
        await mongoose.disconnect()
        console.log('productos dao en mongodb -> cerrado!')
    }

    async mostrar(req, res) {
        const qNew = req.query.new;
        const qCategory = req.query.category;
        try{
            let producto;
            if(qNew){
                producto = await this.products.find().sort({createdAt: -1}).limit(5)
            }else if(qCategory){
                producto = await this.products.find({categories:{$in: [qCategory],}})
            }else{
                producto = await this.products.find()
            }
            res.status(200).json(producto);
        }catch(err){
            res.status(500).json(err);
        }
    }

    async montar(req, res) {
        const newProduct = new productosSchema(req.body)
    
        try{
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct)
        }catch(err){
            res.status(500).json(err)
        }
    }
}