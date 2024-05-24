import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const AnnInfo = () => {
    const testDatas = [
        {
            id: '1', title: 'Đánh nhanh thua nhanh, đánh lâu cũng thua. Tốt nhất là cứ đánh',
            date: '10-10-2024',
            context: 'Hội thi sáng tạo kỹ thuật Thành phố Hồ Chí Minh được tổ chức nhằm thúc đẩy tinh thần sáng tạo của các nhà nghiên cứu khoa học, chuyên gia, cán bộ, công chức, người lao động trên địa bàn Thành phố Hồ Chí Minh, phát hiện những giải pháp sáng tạo trong lĩnh vực khoa học công nghệ và kỹ thuật, áp dụng có hiệu quả các giải pháp kỹ thuật, ứng dụng vào sản xuất và đời sống, góp phần phát triển kinh tế - xã hội của Thành phố Hồ Chí Minh. Lĩnh vực dự thi: các đề tài hoặc giải pháp kỹ thuật phục vụ sản xuất, đời sống, kinh tế, xã hội, an ninh và quốc phòng đều có quyền tham dự hội thi'
        }]
    return (

        <div className="flex flex-col min-h-screen relative items-center">
            <Header />
            <div className=" pt-28 pb-96  flex flex-col flex-grow w-3/5">
                <div className='pt-8 shadow-sm flex flex-col justify-between'>
                    <div className='py-5'>
                        <h3 className='font-medium text-xl'>{testDatas[0].title}</h3>

                    </div>
                    <div className=' pb-5'>
                        <p className='font-thin italic'>{testDatas[0].date}</p>
                    </div>
                    <div className='pb-5'>
                        <p className='font-normal tracking-wider leading-loose'>{testDatas[0].context}</p>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default AnnInfo