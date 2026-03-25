import Link  from "next/link";

import DataJson from "../../utils/data.json";

export default function HomePage(){
    console.log(DataJson);
    return (
        <div className="w-full h-dvh bg-[#ffffff] p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 m-6">
            {DataJson.map((item)=> (
                <div className="border p-4 w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" key={item.id}>
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-gray-800">{item.first_name}</h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.type === 'Student' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                            {item.type}
                        </span>
                    </div>
                    <p className="text-gray-600"><span className="font-semibold">Last Name:</span> {item.last_name}</p>
                    <p className="text-gray-600"><span className="font-semibold">Age:</span> {item.age}</p>
                    <p className="text-gray-600"><span className="font-semibold">Country:</span> {item.country}</p>
                    <p className="text-gray-600"><span className="font-semibold">Points:</span> {item.point}</p>
                    <p className="text-gray-600 text-sm"><span className="font-semibold">Created At:</span> {item.created_at}</p>
                    <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                </div>
            ))}
        </div>
        </div>
    );
}