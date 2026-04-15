import Image from "next/image";

const SidebarItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer text-[#8499A2] text-xs">
    <div className="w-6 h-6 flex items-center justify-center">
      {icon}
    </div>
    <span>{label}</span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-white">
      <div className="flex gap-4 p-4">
        <div className="w-[6%] h-dvh bg-[#0f1419] rounded-[2vw] flex flex-col items-center justify-between py-6">
          <div className="flex flex-col items-center gap-8">
            <SidebarItem
              label="Weather"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              }
            />

            <SidebarItem
              label="Cities"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4v18" />
                  <path d="M19 21V11l-7-4" />
                </svg>
              }
            />

            <SidebarItem
              label="Map"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" />
                  <path d="M9 4v14M15 6v14" />
                </svg>
              }
            />
          </div>

          <SidebarItem
            label="Settings"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82 2 2 0 1 1-3.32 0 1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15c0-.38-.14-.74-.39-1.02a1.65 1.65 0 0 0-1.82-.33 2 2 0 1 1 0-3.32c.6.26 1.3.1 1.82-.33.25-.28.39-.64.39-1.02s-.14-.74-.39-1.02a1.65 1.65 0 0 0-1.82-.33 2 2 0 1 1 2.83-2.83l.06.06c.5.5 1.22.65 1.82.33.28-.25.64-.39 1.02-.39s.74.14 1.02.39c.6.32 1.32.17 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.5.5-.65 1.22-.33 1.82.25.28.39.64.39 1.02s-.14.74-.39 1.02c-.32.6-.17 1.32.33 1.82z" />
              </svg>
            }
          />
        </div>

        <div className="w-[54%] h-dvh">

          <div className="w-full h-[8%] flex items-center justify-center bg-[#0f1419] rounded-[1vw]">
            <input
              type="text"
              placeholder="Search for cities"
              className="text-white px-4 w-full h-full bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between px-10 mt-6">
            <div>
              <div className="text-white font-bold text-5xl">Madrid</div>
              <div className="text-gray-400 text-sm mt-1">
                Chance of rain: 0%
              </div>
              <div className="text-white font-bold text-6xl mt-4">31°</div>
            </div>
            <img
              src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
              alt="Sunny"
              className="w-40 h-40"
            />
          </div>

          <div className="w-full h-[30%] flex flex-col p-6 mt-6 bg-[#0f1419] rounded-[2vw]">
            <p className="text-[#8499A2] font-bold text-xl mb-6">
              TODAY'S FORECAST
            </p>

            <div className="flex justify-between text-[#8499A2]">
              {[
                { time: "6:00 AM", temp: "25°" },
                { time: "9:00 AM", temp: "28°" },
                { time: "12:00 PM", temp: "33°" },
                { time: "3:00 PM", temp: "34°" },
                { time: "6:00 PM", temp: "32°" },
                { time: "9:00 PM", temp: "30°" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 border-r last:border-none border-[#2f3c4f] pr-4"
                >
                  <p>{item.time}</p>
                  <img
                    src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                    className="w-16 h-16"
                  />
                  <span>{item.temp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[30%] flex flex-col justify-between mt-6 bg-[#0f1419] rounded-[2vw] p-6">
            <div className="flex justify-between items-center">
              <p className="text-[#8499A2] font-bold text-xl">
                AIR CONDITIONS
              </p>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                See more
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4 text-[#8499A2]">
              <div>
                <p>Real Feel</p>
                <p className="text-white text-2xl font-semibold">30°</p>
              </div>

              <div>
                <p>Wind</p>
                <p className="text-white text-2xl font-semibold">0.2 km/h</p>
              </div>

              <div>
                <p>Chance of rain</p>
                <p className="text-white text-2xl font-semibold">0%</p>
              </div>

              <div>
                <p>UV Index</p>
                <p className="text-white text-2xl font-semibold">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] h-[calc(100vh-120px)] bg-[#0f1419] rounded-[2vw] mt-20 p-6">
          <p className="text-[#8499A2] font-bold text-xl mb-6">
            7 DAY FORECAST
          </p>

          <div className="flex flex-col gap-6">
            {[
              { day: "Today", temp: "36/22", status: "Sunny" },
              { day: "Tue", temp: "37/21", status: "Sunny" },
              { day: "Wed", temp: "37/21", status: "Sunny" },
              { day: "Thu", temp: "37/21", status: "Cloudy" },
              { day: "Fri", temp: "37/21", status: "Cloudy" },
              { day: "Sat", temp: "37/21", status: "Rainy" },
              { day: "Sun", temp: "37/21", status: "Sunny" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-[#2f3c4f] pb-4"
              >
                <p className="text-[#8499A2] w-[20%]">{item.day}</p>

                <div className="flex items-center gap-4 w-[50%]">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/9744/9744519.png"
                    className="w-10 h-10"
                  />
                  <p className="text-white">{item.status}</p>
                </div>

                <p className="text-white">{item.temp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}