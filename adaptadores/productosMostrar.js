export default class ProdcutosMostrar {
    producto

    constructor(producto) {
        this.producto = producto
    }

    comoTexto() {
        const lines = []
        lines.push(`id: ${this.producto.id}`);
        lines.push(`nombre: ${this.producto.nombre}`);
        lines.push(`desc: ${this.producto.desc}`)
        return lines.join('\n')
    }
}