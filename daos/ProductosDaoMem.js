import { transformarADTO } from "../dto/ProductoDto.js"

export default class ProductosDaoMem {

    constructor() {
        this.productos = []
    }

    init() {
        console.log('productos dao en memoria -> listo!')
    }

    disconnect() {
        console.log('productos dao en memoria -> cerrado!')
    }

    getIndex(id) {
        return this.productos.findIndex(producto => producto.id === id)
    }

    getAll() {
        return transformarADTO(this.productos)
    }

    getById(id) {
        return transformarADTO(this.productos[this.getIndex(id)])
    }

    save(productoNuevo) {
        this.productos.push(productoNuevo)
        return transformarADTO(productoNuevo)
    }

    deleteById(id) {
        const [ borrada ] = this.productos.splice(this.getIndex(id), 1)
        return transformarADTO(borrada)
    }

    deleteAll() {
        this.productos = []
    }

    updateById(id, nuevo) {
        const index = this.getIndex(id)
        const actualizado = { ...this.productos[index], ...nuevo}
        this.productos.splice(index, 1, actualizado)
        return transformarADTO(actualizado)
    }
}