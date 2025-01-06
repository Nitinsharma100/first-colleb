import React from "react";

const BeautifulTable = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", address: "123 Main St" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", address: "456 Elm St" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", phone: "555-555-5555", address: "789 Oak St" },
    { id: 4, name: "Lisa Brown", email: "lisa@example.com", phone: "444-444-4444", address: "321 Pine St" },
  ];

  return (
    <div className="flex justify-center w-full py-10 bg-gray-100">
      <div className="w-full max-w-[80%] bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Beautiful Table
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-6 text-left uppercase font-medium">#</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Name</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Email</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Phone</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Address</th>
                <th className="py-3 px-6 text-left uppercase font-medium">Opration</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="py-3 px-6">{item.id}</td>
                  <td className="py-3 px-6">{item.name}</td>
                  <td className="py-3 px-6">{item.email}</td>
                  <td className="py-3 px-6">{item.phone}</td>
                  <td className="py-3 px-6">{item.address}</td>
                  <td className="py-3 px-6">
                    <div className="flex gap-1">
                        <button className="bg-red-500 py-1 px-4 text-white rounded shadow-md">DELETE</button>
                        <button className="bg-yellow-500 py-1 px-4 text-white rounded shadow-md">UPDATE</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BeautifulTable;
