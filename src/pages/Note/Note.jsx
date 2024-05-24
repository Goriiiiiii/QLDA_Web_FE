import React from 'react'
import './blogPage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import BlogHeader from '../../Components/LayoutBlog/BlogHeader/BlogHeader '
import { useState, useRef } from 'react';
import BlogInfo from '../../Components/LayoutBlog/BlogInfo/BlogInfo';
import Footer from '../../Components/Footer/Footer'
import Login from '../../Components/Forms/Login/Login'
import Register from '../../Components/Forms/Register/Register'
import Search from '../../Components/Forms/Search/Search';

function Note() {
    const [openLogin, setopenLogin] = useState(false);
    const [openRegister, setopenRegister] = useState(false);
    const [openSearchForm, setopenSearchForm] = useState(false);


    return (

        <section className="blogInfo">
            <div className="secContainer">
                <div className="desScriptDiv itemDiv">
                    <div className="info">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Đơn yêu cầu"
                        //value={cost}

                        />

                    </div>
                    <div className="desScript">
                        <textarea
                            name="ShortDecription"
                            rows="4"
                            placeholder="Hãy viết về yêu cầu của bạn ..."
                            className="form-control travelBlogDescription bar-10 bn card6 p-15 resize-none w-fit h-inherit bn fs-18 bar-2"
                        // value={data.ShortDecription}
                        ></textarea>
                    </div>
                </div>


                <div className="submit">
                    {/* <button className='btn icon' onClick={handleSubmit}>Gửi yêu cầu</button> */}
                </div>
            </div>
        </section>
    )
}

export default Note