import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RequestRender from "../components/RequestRender";

const Requests = () => {
    const testDatas = [
        {
            yeucau: 'nghỉ khỏe',
            nhanvien: 'Siêu nhân gao', 
            noidung: 'Đánh nhanh thua nhanh, đánh lâu cũng thua. Tốt nhất là cứ đánh',
            pheduyet: 'true',
            phanHoi:''
        },
        {
            yeucau: 'nghỉ khỏe',
            nhanvien: 'Siêu nhân gao', 
            noidung: 'Đánh nhanh thua nhanh, đánh lâu cũng thua. Tốt nhất là cứ đánh',
            pheduyet: 'false',
            phanHoi:''
        },
        {
            yeucau: 'nghỉ khỏe',
            nhanvien: 'Siêu nhân gao', 
            noidung: 'Đánh nhanh thua nhanh, đánh lâu cũng thua. Tốt nhất là cứ đánh',
            pheduyet: '',
            phanHoi:''
        },
        {
            yeucau: 'nghỉ khỏe',
            nhanvien: 'Siêu nhân gao', 
            noidung: 'Đánh nhanh thua nhanh, đánh lâu cũng thua. Tốt nhất là cứ đánh',
            pheduyet: '',
            phanHoi:''
        }

    ]
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center ">
                <div className="flex justify-center pb-5">
                    <h1 className="text-black font-bold text-2xl ">Các yêu cầu</h1>
                </div>
                <div className="flex flex-col w-[60%]">
                    <div>
                        <RequestRender requests={testDatas}/>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Requests