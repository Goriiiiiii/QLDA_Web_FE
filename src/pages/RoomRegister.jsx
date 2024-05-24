import { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppContexts } from "../contexts/AppContexts";
const RoomRegister = () => {
    const [roomDropdown, setRoomDropdown] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    function toggleRoomDropdown() {
        setRoomDropdown(!roomDropdown);
    }

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        setRoomDropdown(false);
    };

    const {rooms} = useContext(AppContexts)

    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center justify-center">
                <div className="px-3 py-5 flex flex-row w-3/5 bg-[#A0E9FF] rounded-xl ">
                    <div className="flex basis-1/5 ">
                        <div className=" flex items-center  ">
                            <label className="bg-cyan-300 w-full px-3 py-3 rounded-xl cursor-pointer" onClick={toggleRoomDropdown}>Chọn phòng</label>
                        </div>
                        {roomDropdown && (
                            <div className=" mt-14 bg-cyan-300 rounded-xl absolute w-1/6 item">
                                {rooms.map((room) => (
                                    <div className="w-full px-3 py-2 hover:bg-cyan-950 hover:text-white" key={room._id}>
                                        <button
                                            className="w-full text-left"
                                            onClick={() => handleRoomClick(room)}>
                                            {room.ten}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex basis-3/5 items-center justify-center">
                        <label>{selectedRoom ? selectedRoom.ten : "Chưa chọn phòng"}</label>
                    </div>
                    <div className="basis-1/5">
                        <button className="py-3 px-3 rounded-xl bg-cyan-300">Đăng ký phòng họp</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RoomRegister;
