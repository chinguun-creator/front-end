import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 m-4">
      <div className="w-[6%] h-dvh bg-[#202B3B] rounded-[2vw]"></div>

      <div className="w-[54%] h-dvh ">
        <div className="w-full h-[8%] flex items-center justify-center bg-[#202B3B] rounded-[1vw]">
          <input
            type="text"
            placeholder="Search for cities"
            className="text-white px-4 w-full h-full focus:outline-none"
          />
        </div>
        <div className="flex items-center ml-20 mt-4">
          <div>
            <div className="text-white font-bold text-5xl">Madrid</div>
            <div className="text-gray-400 text-sm mt-1">Chance of rain: 0%</div>
            <div className="text-white font-bold text-6xl mt-4">31°</div>
          </div>
          <img
            src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
            alt="Sunny"
            className="w-28 h-28 right-4"
          />
        </div>
        <div className="w-full h-[30%] flex flex-col p-6 mt-4 bg-[#202B3B] rounded-[2vw]">
          <p className="text-[#8499A2] font-bold text-xl place-self-start mb-4">
            TODAY'S FORECAST
          </p>
          <div className="ml-6 flex items-center gap-4 text-[#8499A2]">
            <div className="border-r h-full pr-4 flex flex-col items-center gap-2">
              <p>6:00 AM</p>
              <img
                src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                alt="Sunny"
                className="w-24 h-24"
              />
              <span>20°</span>
            </div>
            <div className="border-r h-full pr-4 flex flex-col items-center gap-2">
              <p>6:00 AM</p>
              <img
                src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                alt="Sunny"
                className="w-24 h-24"
              />
              <span>20°</span>
            </div>
            <div className="border-r h-full pr-4 flex flex-col items-center gap-2">
              <p>6:00 AM</p>
              <img
                src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                alt="Sunny"
                className="w-24 h-24"
              />
              <span>20°</span>
            </div>
            <div className="border-r h-full pr-4 flex flex-col items-center gap-2">
              <p>6:00 AM</p>
              <img
                src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                alt="Sunny"
                className="w-24 h-24"
              />
              <span>20°</span>
            </div>

            <div className="border-r h-full pr-4 flex flex-col items-center gap-2">
              <p>6:00 AM</p>
              <img
                src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                alt="Sunny"
                className="w-24 h-24"
              />
              <span>20°</span>
            </div>

            <div className="border-r h-full pr-4 flex flex-col items-center gap-2">
              <p>6:00 AM</p>
              <img
                src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                alt="Sunny"
                className="w-24 h-24"
              />
              <span>20°</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex items-center mt-4 bg-[#202B3B] rounded-[2vw]">
          <div className="text-[#8499A2] font-bold text-xl ml-6 place-self-start mt-6">
            AIR CONDITIONS
          </div>
        </div>
      </div>

      <div className="w-[40%] h-[calc(100vh-120px)] bg-[#202B3B] rounded-[2vw] mt-20">
        <div className="text-[#8499A2] font-bold text-xl ml-4 place-self-start mt-6">
          7 DAY FORECAST
        </div>
      </div>
    </div>
  );
}
