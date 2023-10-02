import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  // State untuk menyimpan data input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate(); // Menggunakan hook `useNavigate` untuk navigasi

  // Fungsi untuk menyimpan data service baru
  const saveService = async (e) => {
    e.preventDefault(); // Mencegah perilaku bawaan formulir
    try {
      // Mengirim permintaan POST ke server dengan menggunakan axios
      await axios.post("http://localhost:5000/services", {
        name,
        description,
        currency,
        price,
      });
      // Setelah berhasil menyimpan, navigasi ke halaman utama ("/")
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveService}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Service Name"
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
                placeholder="Named the price"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
