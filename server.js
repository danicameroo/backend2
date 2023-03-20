
import express from "express";
const app = express();
import ProductosRoute from "./routes/ProductosRoute.js"


app.use(express.json());
app.use("/api/products", ProductosRoute);

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
