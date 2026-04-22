"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter(
    (item) =>
      item.first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.last_name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full h-dvh bg-[#ffffff] p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by first or last name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 m-6">
        {filteredData.map((item) => (
          <div
            className="border p-4 w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            key={item.id}
          >
            {/* Main image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.first_name}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}

            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.first_name}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.type === "Student"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {item.type}
              </span>
            </div>

            <p className="text-gray-600">
              <span className="font-semibold">Last Name:</span> {item.last_name}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Age:</span> {item.age}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Country:</span> {item.country}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Points:</span> {item.point}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Created At:</span>{" "}
              {item.created_at}
            </p>

            {item.item && (
              <img
                src={item.item}
                alt="item"
                className="w-20 h-20 object-cover rounded mt-4"
              />
            )}

            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
