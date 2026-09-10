import express from "express"; //se especifica que vamnos a usar expres 

const app = express(); // contruya el servidor 

const PORT = process.env.PORT || 3000; // aqui que apunte al puerto 300

app.get("/health", (req, res) => { 
    res.status(200).json({ status: "ok" }); // se crea el primer endpoint en este caso al healt y ejecuta el ok es para saber que el servidor esta arriba 
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});