export default class Productos {
    #id
    #nombre
    #desc

    constructor({nombre, desc, id }) {
        this.id = id
        this.nombre = nombre
        this.desc = desc
    }

    get id() { return this.#id }

    set id(id) {
        if (!id) throw new Error('"id" es un campo requerido')
        this.#id = id
    }

    get nombre() { return this.#nombre }

    set nombre(nombre) {
        if (!nombre) throw new Error('"nombre" es un campo requerido')
        this.#nombre = nombre
    }

    get desc() { return this.#desc }

    set desc(desc) {
        if (!desc) throw new Error('"desc" es un campo requerido')
        this.#desc = desc
    }

    datos() {
        return JSON.parse(JSON.stringify({
            id: this.#id,
            nombre: this.#nombre,
            desc: this.#desc
        }))
    }
}