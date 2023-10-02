import express from "express";
import { getServices, getServiceById, createService, updateService, deleteService } from "../controllers/ServiceController.js";

const router = express.Router();

// Mengatur rute untuk mendapatkan daftar semua layanan
router.get('/services', getServices);

// Mengatur rute untuk mendapatkan detail layanan berdasarkan ID
router.get('/services/:id', getServiceById);

// Mengatur rute untuk membuat layanan baru
router.post('/services/', createService);

// Mengatur rute untuk memperbarui layanan berdasarkan ID
router.patch('/services/:id', updateService);

// Mengatur rute untuk menghapus layanan berdasarkan ID
router.delete('/services/:id', deleteService);

// Mengekspor router yang telah dikonfigurasi
export default router;
