import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RoomTimeTable = () => {
    const rooms = ["Phòng 1", "Phòng 2", "Phòng 3", "Phòng 4", "Phòng 5"];
    const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];

    const schedule = {
        "Phòng 3": ["Thứ 5"],
        "Phòng 2": ["Thứ 6"],
        "Phòng 5": ["Thứ 2", "Thứ 4", "Thứ 7"]
    };
    return (

        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center justify-center">
                <div className="flex flex-row w-3/5 py-3 px-2">
                    <div className="flex justify-start basis-1/2">
                        <p className="text-cyan-800 hover:text-blue-700 cursor-pointer">Tuần trước đó</p>
                    </div>
                    <div className="flex  justify-end basis-1/2">
                        <p className="text-cyan-800 hover:text-blue-700 cursor-pointer">Tuần kế tiếp</p>
                    </div>

                </div>
                <div className="w-3/5 bg-[#A0E9FF] rounded-xl p-5">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Phòng / Ngày</th>
                                {daysOfWeek.map((day, index) => (
                                    <th key={index} className="border px-4 py-2">{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="border px-4 py-2">{room}</td>
                                    {daysOfWeek.map((day, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`border px-4 py-2 ${schedule[room] && schedule[room].includes(day) ? 'bg-red-500' : ''}`}
                                        >
                                            {schedule[room] && schedule[room].includes(day) ? 'Đã được đăng ký' : '-'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RoomTimeTable;

