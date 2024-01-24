import { Swiper, SwiperSlide } from 'swiper/react'
import image from '../image.avif';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper';
const Slider = () => {
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
    <div className='relative my-10'>
        <Swiper
        className='w-[200%] slide'
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={10}
        navigation
        >
             {sliders.map((slider,index) => {
            return (
              <SwiperSlide key={index}>
                <div style={{backgroundImage: `url(${slider.src})`}}  className='bg-cover rounded-xl flex flex-row-reverse'>
                      <div className='text-center w-1/2 max-sm:w-full p-9 text-white'>
                      <h2 className='text-lg font-extralight'>The Best Look</h2>
                      <h1 className='text-4xl font-bold'>{slider.title }</h1>
                      <h3 className='text-lg font-extralight my-3'>Starts from 10,000 MMK</h3>
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

export default Slider