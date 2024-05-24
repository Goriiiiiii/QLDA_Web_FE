import { useState, useContext, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { AppContexts } from "../contexts/AppContexts";
import axios from "axios";
const Home = () => {

    const { anns, setAnns } = useContext(AppContexts);
    const [isLoading, setIsLoading] = useState(true)

    const fetchAnns = () => {
        setIsLoading(true)
        // axios.get("http://localhost:8081/v1/api/getAllThongBao")
        //     .then((res) => {
        //         console.log(res.data);
        //         setAnns(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        //     .finally(() =>
        //         setIsLoading(false)
        //     )
            
            fetch("http://localhost:8081/v1/api/getAllThongBao")
            .then(res => res.json())
            .then((data) => {
                setAnns(data);
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() =>
                setIsLoading(false)
            )
    };

    useEffect(() => {
        fetchAnns()
    }, [])

    return (
        <>
            {
                isLoading == false ?
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
                                    <Announcement options={anns} type={'Chung'} />
                                </div>
                            </div>

                            <div className="flex flex-col w-[60%]">
                                <div className="">
                                    <h3 className="text-xl font-medium py-2 bg-sky-500 px-4">Thông báo nghỉ</h3>
                                </div>
                                <div>
                                    <Announcement options={anns} type={'Nghi'} />
                                </div>
                            </div>

                            <div className="flex flex-col w-[60%]">
                                <div className="">
                                    <h3 className="text-xl font-medium py-2 bg-sky-500 px-4">Thông báo phòng họp</h3>
                                </div>
                                <div>
                                    <Announcement options={anns} type={'Phong'} />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                    :
                    <div>Loadinggggggggggg</div>
            }
        </>
    )
}
export default Home