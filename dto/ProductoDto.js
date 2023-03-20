export default class ProductoDTO {
    constructor({ id, nombre, desc }) {
        this.id = id
        this.nombre = nombre
        this.desc = desc
    }
}

export function transformarADTO(productos) {
    if (Array.isArray(productos)) {
        return productos.map(p => new ProductoDTO(p))
    } else {
        return new ProductoDTO(productos)
    }
}