import React from 'react'
import { Navigation, Pagination,Autoplay} from 'swiper'
import { SwiperSlide,Swiper } from 'swiper/react'
import { AiOutlineSearch,AiOutlineShopping,AiOutlineMenu } from "react-icons/ai";
import image from '../image.avif';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

const Home = () => {
  let sliders = [
    {
      src : image,
      title : "Anytime Anywhere",
    },
    {
      src : image,
      title : "Anytime Anywhere",
    },
    {
      src : image,
      title : "Anytime Anywhere",
    },
    {
      src : image,
      title : "Anytime Anywhere",
    },
    {
      src : image,
      title : "Anytime Anywhere",
    },
    {
      src : image,
      title : "Anytime Anywhere",
    },
  ]
  return (
    <div className='relative'>
      
            <Swiper className=" relative w-full"
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation
                          pagination
                          loop={true}
                          autoplay={{ delay:2000 }}
        >
                  <nav className='flex z-50 text-white absolute top-0 justify-between px-32 py-4 w-full mx-auto max-sm:px-5'>
          <section>
            <h1 className='text-3xl font-bold'>LOGO</h1>
</section>
          <section className='text-2xl flex gap-3'>
          <AiOutlineSearch />
          <AiOutlineShopping/>
          <AiOutlineMenu/>
          </section>
        </nav>
          {sliders.map((slider,index) => {
            return (
              <SwiperSlide className='mb-10' key={index}>
                <div style={{backgroundImage: `url(${slider.src})`}}  className='w-full items-end max-sm:items-center flex bg-cover max-sm:h-[800px] h-[580px]'>
                      <div className='mx-auto tracking-wider gap-10 p-9 text-center text-white'>
                      <h2 className='text-2xl font-extralight'>The Best Look</h2>
                      <h1 className='text-6xl font-semibold'>{slider.title }</h1>
                      <h3 className='text-xl font-extralight my-3'>Starts from 10,000 MMK</h3>
                      <button className='bg-gray-900/70 px-8 py-2 rounded-full'>view</button>
                      </div>

                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  )
}

export default Home