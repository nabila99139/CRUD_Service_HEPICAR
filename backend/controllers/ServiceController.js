import Service from "../models/ServiceModel.js";

// Mendapatkan semua layanan
export const getServices = async (req, res) => {
    try {
        const response = await Service.findAll(); // Mengambil semua entri layanan dari database
        res.status(200).json(response); // Mengirim respons JSON yang berisi daftar layanan
    } catch (error) {
        console.log(error.message); // Menangani kesalahan dan mencetak pesan kesalahan ke konsol
    }
}

// Mendapatkan layanan berdasarkan ID
export const getServiceById = async (req, res) => {
    try {
        const response = await Service.findOne({
            where: {
                id: req.params.id // Mengambil satu entri layanan berdasarkan ID yang diberikan
            }
        });
        res.status(200).json(response); // Mengirim respons JSON yang berisi entri layanan yang sesuai dengan ID
    } catch (error) {
        console.log(error.message); // Menangani kesalahan dan mencetak pesan kesalahan ke konsol
    }
}

// Membuat layanan baru
export const createService = async (req, res) => {
    try {
        await Service.create(req.body); // Membuat entri layanan baru berdasarkan data dalam permintaan POST
        res.status(201).json({ msg: "Service baru berhasil dibuat" }); // Mengirim respons JSON yang berisi pesan sukses
    } catch (error) {
        console.log(error.message); // Menangani kesalahan dan mencetak pesan kesalahan ke konsol
    }
}

// Memperbarui layanan berdasarkan ID
export const updateService = async (req, res) => {
    try {
        await Service.update(req.body, {
            where: {
                id: req.params.id // Menggantikan entri layanan yang sesuai dengan ID dengan data yang baru
            }
        });
        res.status(200).json({ msg: "Service berhasil diupdate" }); // Mengirim respons JSON yang berisi pesan sukses
    } catch (error) {
        console.log(error.message); // Menangani kesalahan dan mencetak pesan kesalahan ke konsol
    }
}

// Menghapus layanan berdasarkan ID
export const deleteService = async (req, res) => {
    try {
        await Service.destroy({
            where: {
                id: req.params.id // Menghapus entri layanan yang sesuai dengan ID yang diberikan
            }
        });
        res.status(200).json({ msg: "Service berhasil dihapus" }); // Mengirim respons JSON yang berisi pesan sukses
    } catch (error) {
        console.log(error.message); // Menangani kesalahan dan mencetak pesan kesalahan ke konsol
    }
}
