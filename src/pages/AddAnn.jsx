import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppContexts } from "../contexts/AppContexts";
// import{use}
import { useNavigate } from "react-router";

const AddAnn = () => {
    const types =[{loai:"Chung"},{loai:"Nghi"},{loai:"Phong"}]
    const userID = localStorage.getItem("id")
    const navigate = useNavigate()

    
    const [typeDropdown, setTypeDropdown] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [reason, setReason] = useState("");
    
    const handleRequestClick = (request) => {
        setSelectedType(request);
        setTypeDropdown(false);
    };

    function toggleTypeDropdown() {
        setTypeDropdown(!typeDropdown);
    }
 
    const hanleInputchange = (event) => {
        setReason(event.target.value)
    }

    const handleSubmit = () => {
        if(!selectedType)
            {
                alert("Vui lòng chọn lại loại")
                return
            }
            fetch("http://localhost:8081/v1/api/addYeuCauHandle", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({
                    "yeuCauId": selectedRequest._id,
                    "nhanVienId": userID,
                    "noiDung": reason
                  })
            })
            .then(res => res.json())
        .then((data=>{
            if(data)
                {
                    alert("Gửi yêu cầu thành công")
                    navigate("/trang-chu")
                }
            else{
                alert("Gửi thất bại")
            }
        }) 
    
    )
          
    }
    return (

        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center justify-center">
                <div className="flex flex-col w-3/5 bg-white shadow-xl rounded-xl items-center justify-center ">
                    <div className="flex justify-center items-center py-5">
                        <h1 className="font-bold text-2xl">Tạo thông báo</h1>
                    </div>
                    <div className="flex flex-row w-2/3 items-center justify-center ">
                    <div className=" flex basis-1/3 items-center justify-center  ">
                        <label className="bg-cyan-300 rounded-md px-2 py-2 cursor-pointer text-center" onClick={toggleTypeDropdown}>Chọn yêu cầu</label>
                    </div>
                    {typeDropdown && (
                        <div className=" mt-10 bg-cyan-300 rounded-xl absolute w-1/3 item">
                            {types.map((type,index) => (
                                <div className="w-full px-3 py-2 hover:bg-cyan-950 hover:text-white" key={index}>
                                    <button
                                        className="w-full text-left"
                                        onClick={() => handleRequestClick(type)}>
                                        {type.loai}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                        <div className="flex basis-2/3">
                        <label className="w-full text-center">{selectedType ? selectedType.loai : "Chưa chọn yêu cầu"}</label>
                        </div>
                        
                    </div>

                    <div className="flex flex-col py-5 w-full justify-center items-center">
                    <p className="w-4/5 pb-3 text-left">Tiêu đề thông báo</p>
                        <input placeholder="Tiêu đề thông báo" className="py-3 pl-3 w-4/5 border rounded-xl border-stone-900"></input>
                    </div>
                    <div className="flex flex-col py-5 w-full justify-center items-center">
                        <p className="w-4/5 pb-3 text-left">Chi tiết thông báo:</p>
                        <textarea className="w-4/5 border-4 flex " rows={4} cols={20} value={reason} onChange={hanleInputchange} >
                            
                        </textarea>
                    </div>
                    <div className=" flex justify-center items-center py-5">
                        <button onClick={handleSubmit} className="bg-cyan-200 rounded-xl text-zinc-500 text-lg px-16 py-2 hover:bg-cyan-700 hover:text-white ">Gửi yêu cầu</button>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddAnn;
