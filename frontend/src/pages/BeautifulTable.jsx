import axios from "axios";
import React, { useState } from "react";

const BeautifulTable = ({ formData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:4000/api/delete/${id}`);
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("Something is wrong for deletion");
    }
  };

  // Open Update Popup
  const handleUpdate = (item) => {
    setEditData(item); // Fill the popup form with the current row data
    setIsPopupOpen(true); // Show the popup
  };

  // Handle Update API Call
  const handleSave = async () => {
    try {
      const { data } = await axios.put(`http://localhost:4000/api/update/${editData._id}`, editData);
    //   alert(data.message);
      setIsPopupOpen(false); 
    } catch (error) {
      console.log(error)
      alert("Something went wrong during the update");
    }
  };

  return (
    <div className="flex justify-center w-full py-10 bg-gray-100">
      <div className="w-full max-w-[80%] bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Beautiful Table</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-6 text-left uppercase font-medium">#</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Name</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Email</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Phone</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Address</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Operation</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                >
                  <td className="py-3 px-6">{item.id}</td>
                  <td className="py-3 px-6">{item.name}</td>
                  <td className="py-3 px-6">{item.email}</td>
                  <td className="py-3 px-6">{item.phone}</td>
                  <td className="py-3 px-6">{item.address}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 py-1 px-4 text-white rounded shadow-md"
                      >
                        DELETE
                      </button>
                      <button
                        onClick={() => handleUpdate(item)}
                        className="bg-yellow-500 py-1 px-4 text-white rounded shadow-md"
                      >
                        UPDATE
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Window */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-bold mb-4">Update Details</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
              </div>
             
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editData.phone}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={editData.address}
                  onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsPopupOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeautifulTable;
