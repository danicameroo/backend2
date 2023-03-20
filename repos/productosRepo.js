import ProductosDaoFactory from "../daos/ProductosDaoFactory.js";
import { transformarADTO } from "../dto/ProductoDto.js";
import Productos from "../modelo/Productos.js";

export default class ProdcutoRepo {
    dao

    constructor() {
        this.dao = ProductosDaoFactory.getDao()
    }

    async getAll() {
        const productos = await this.dao.getAll()
        return productos.map(p => new Productos(p))
    }

    async getById(id) {
        const producto = await this.dao.getById(id)
        return new Productos(producto)
    }

    async save(nuevo) {
        await this.dao.save(transformarADTO(nuevo))
        return nuevo
    } 

    async deleteById(id) {
        const removida = await this.dao.deleteById(id)
        return new Productos(removida)
    }

    async deleteAll() {
        await this.dao.deleteAll()
    }
}