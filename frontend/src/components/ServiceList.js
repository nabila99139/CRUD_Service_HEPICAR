import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceList = () => {
  // State untuk menyimpan daftar layanan
  const [services, setServices] = useState([]);

  // Menggunakan useEffect untuk memanggil fungsi getServices saat komponen dimount
  useEffect(() => {
    getServices();
  }, []);

  // Fungsi untuk mengambil daftar layanan dari server
  const getServices = async () => {
    try {
      // Mengirim permintaan GET ke server untuk mendapatkan daftar layanan
      const response = await axios.get("http://localhost:5000/services");
      // Memperbarui state `services` dengan data yang diterima dari server
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Fungsi untuk menghapus layanan berdasarkan ID
  const deleteService = async (id) => {
    try {
      // Mengirim permintaan DELETE ke server untuk menghapus layanan berdasarkan ID
      await axios.delete(`http://localhost:5000/services/${id}`);
      // Setelah berhasil menghapus layanan, memanggil kembali fungsi getServices untuk memperbarui daftar layanan
      getServices();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        {/* Link untuk menuju halaman "Add Service" */}
        <Link to={`add`} className="button is-success">
          Tambah Service
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Currency</th>
              <th>Price</th>
              {/* Memberikan class "is-wider" untuk mengatur lebar kolom Action */}
              <th className="is-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping daftar layanan dan membuat baris untuk setiap layanan */}
            {services.map((service, index) => (
              <tr key={service.id}>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.currency}</td>
                <td>{service.price}</td>
                <td>
                  {/* Link untuk menuju halaman "Edit Service" berdasarkan ID layanan */}
                  <Link
                    to={`edit/${service.id}`}
                    className="button is-small is-warning"
                  >
                    Edit
                  </Link>
                  {/* Tombol untuk menghapus layanan dengan memanggil fungsi deleteService */}
                  <button
                    onClick={() => deleteService(service.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceList;
