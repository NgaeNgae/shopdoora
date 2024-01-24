import { Navigation } from 'swiper';
import { SwiperSlide,Swiper } from 'swiper/react';
import offer from '../offer.jpg'
import 'swiper/css';
import 'swiper/css/navigation'
import { MdOutlineStar } from 'react-icons/md';
const Product = () => {
    let data = [
        {
            src : offer,
            name : "Devices",
            subTitle : "Find the best for you here!",
            data : [
                {
                    src : offer,
                    name : "Refreshing Mint",
                    price : 30000,
                    star : 600
                },
                {
                    src : offer,
                    name : "Refreshing Mint",
                    price : 30000,
                    star : 600
                },
                {
                    src : offer,
                    name : "Refreshing Mint",
                    price : 30000,
                    star : 600
                },
                {
                    src : offer,
                    name : "Refreshing Mint",
                    price : 30000,
                    star : 600
                },
                {
                    src : offer,
                    name : "Refreshing Mint",
                    price : 30000,
                    star : 600
                },
                {
                    src : offer,
                    name : "Refreshing Mint",
                    price : 30000,
                    star : 600
                },
            ]
        },
            {
                src : offer,
                name : "Pods",
                subTitle : "Variety of choices available",
                data : [
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                ]
            },
            {
                src : offer,
                name : "Disposable",
                subTitle : "Easy, clean & superb flavor",
                data : [
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                    {
                        src : offer,
                        name : "Refreshing Mint",
                        price : 30000,
                        star : 600
                    },
                ]
            },
         ];

  return (
    <>
        {
            data.map((category) => {
                return (
                   <div key={category.name}>
                     <div className='bg-center rounded-xl overflow-x-hidden my-5 text-white h-80 max-sm:h-[30rem]' style={{ backgroundImage : `url(${category.src})` }}>
                        <div className='w-[110%] max-sm:block
                         bg-black bg-opacity-80 items-center max-md:items-start h-full relative flex'>
                        <div className='text-start max-sm:w-full max-md:w-[50%] max-md:pt-28 max-md:ml-5 max-sm:pt-5 w-[30%] ml-20 max-sm:ml-10'>
                        <h1 className='text-4xl max-md:text-2xl tracking-wider w-1/3 font-bold '>{category.name}</h1>
                        <h2 className='text-xl max-md:text-sm max-md:w-full w-[60%]'>{category.subTitle}</h2>
                        </div>
                        <Swiper
                        className='w-[100%] max-md:hidden max-sm:hidden backdrop-blur-md h-full slide2'
                         slidesPerView={5}
                         spaceBetween={10}
                         loop={true}
                         modules={[Navigation]}
                         navigation
                         >
                            {category.data.map((product,index) => {
                                return (
                                    <SwiperSlide className='flex shadow-lg transform active:scale-90 transition-transform items-center h-full' key={index}>
                                        <div className='text-center'>
                                        <img src={product.src} className="h-[170px] rounded-lg" alt={product.name} />
                                        <div className='pt-5'>
                                        <h1>{product.name}</h1>
                                        <h2 className='text-ms'>{product.price} MMK</h2>
                                        <h3 className='text-xs'>{product.star} Points</h3>
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Swiper
                        className='w-[80%] lg:hidden max-sm:hidden backdrop-blur-sm h-full slide4'
                         slidesPerView={2}
                         spaceBetween={10}
                         loop={true}
                         modules={[Navigation]}
                         navigation
                         >
                            {category.data.map((product,index) => {
                                return (
                                    <SwiperSlide className='flex shadow-lg transform active:scale-90 transition-transform items-center h-full' key={index}>
                                        <div className='text-center'>
                                        <img src={product.src} className="h-[170px] rounded-lg" alt={product.name} />
                                        <div className='pt-5'>
                                        <h1>{product.name}</h1>
                                        <h2 className='text-ms'>{product.price} MMK</h2>
                                        <h3 className='text-xs'>{product.star} Points</h3>
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Swiper
                        className='w-[150%] sm:hidden slide3'
                         slidesPerView={2}
                         spaceBetween={10}
                         loop={true}
                         modules={[Navigation]}
                         navigation
                         >
                            {category.data.map((product,index) => {
                                return (
                                    <SwiperSlide className='mt-16' key={index}>
                                        <div className='text-center shadow-lg transform active:scale-90 transition-transform'>
                                        <img src={product.src} className="h-[170px] max-sm:h-[200px] rounded-lg" alt={product.name} />
                                        <div className='pt-5'>
                                        <h1>{product.name}</h1>
                                        <h2 className='text-ms'>{product.price} MMK</h2>
                                        <span className="flex text-xs justify-center items-center text-yellow-400"><MdOutlineStar/>{product.star} Points</span>
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        </div>
                    </div>
                   </div>
                )
            })
        }
    </>
  )
}

export default Product