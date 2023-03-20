import ProductosDaoMem from "./ProductosDaoMem.js";
import ProductosDaoDB from "./ProductosDaoDB.js";

const connString = 'mongondb://localhost/test'

const opcion = process.argv[2] || 'Mem'

let dao
switch (opcion) {
    case 'Mongo':
        dao = new ProductosDaoDB(connString)
        await dao.init()
        break
    default:
        dao = new ProductosDaoMem()
        dao.init()
}

export default class ProductosDaoFactory {
    static getDao() {
        return dao
    }
}