import express from "express";
import cors from "cors";
import ServiceRoute from "./routes/ServiceRoute.js";

const app = express();

// Menggunakan middleware CORS
app.use(cors());

// Menggunakan middleware untuk mengurai permintaan JSON
app.use(express.json());

// Menggunakan rute yang telah didefinisikan dalam ServiceRoute
app.use(ServiceRoute);

// Mulai server Express dan mendengarkan permintaan pada port 5000
app.listen(5000, () => console.log("Server berjalan dengan baik"));
