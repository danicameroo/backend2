import { Router } from 'express'
import ProductosDaoDB from '../daos/ProductosDaoDB.js'

const router = Router()

router.get('/', ProductosDaoDB.mostrar)

router.put('/', ProductosDaoDB.montar)


export default router