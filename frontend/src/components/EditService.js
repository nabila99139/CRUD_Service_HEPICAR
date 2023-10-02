import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditService = () => {
  // State untuk menyimpan data input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate(); // Menggunakan hook `useNavigate` untuk navigasi
  const { id } = useParams(); // Menggunakan hook `useParams` untuk mendapatkan parameter dari URL

  // Menggunakan useEffect untuk melakukan pengambilan data service berdasarkan ID saat komponen dimount
  useEffect(() => {
    getServiceById();
  }, []);

  // Fungsi untuk mengirim permintaan PATCH untuk memperbarui data service
  const updateService = async (e) => {
    e.preventDefault(); // Mencegah perilaku bawaan formulir
    try {
      // Mengirim permintaan PATCH ke server dengan menggunakan axios
      await axios.patch(`http://localhost:5000/services/${id}`, {
        name,
        description,
        currency,
        price,
      });
      // Setelah berhasil memperbarui data, navigasi kembali ke halaman utama ("/")
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk mengambil data service berdasarkan ID
  const getServiceById = async () => {
    try {
      // Mengirim permintaan GET ke server untuk mendapatkan data service berdasarkan ID
      const response = await axios.get(`http://localhost:5000/services/${id}`);
      // Memperbarui state dengan data service yang diterima dari server
      setName(response.data.name);
      setDescription(response.data.description);
      setCurrency(response.data.currency);
      setPrice(response.data.price);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateService}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Currency</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  className="input"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value=""></option>
                  <option value="IDR">IDR</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditService;
