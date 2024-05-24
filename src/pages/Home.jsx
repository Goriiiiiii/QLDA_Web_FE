import { useState, useContext } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { AppContexts } from "../contexts/AppContexts";
const Home = () => {

    const { anns } = useContext(AppContexts);
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center ">
                <div className="flex justify-center pb-5">
                    <h1 className="text-black font-bold text-2xl ">Thông báo</h1>
                </div>
                <div className="flex flex-col w-[60%]">
                    <div className="">
                        <h3 className="text-xl font-medium py-2 bg-sky-500 px-4">Thông báo chung</h3>
                    </div>
                    <div>
                        <Announcement options={anns} type={'Chung'}/>
                    </div>
                </div>

                <div className="flex flex-col w-[60%]">
                    <div className="">
                        <h3 className="text-xl font-medium py-2 bg-sky-500 px-4">Thông báo nghỉ</h3>
                    </div>
                    <div>
                        <Announcement options={anns} type={'Nghi'}/>
                    </div>
                </div>

                <div className="flex flex-col w-[60%]">
                    <div className="">
                        <h3 className="text-xl font-medium py-2 bg-sky-500 px-4">Thông báo phòng họp</h3>
                    </div>
                    <div>
                        <Announcement options={anns} type={'Phong'}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home