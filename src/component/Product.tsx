import { Navigation } from 'swiper';
import { SwiperSlide,Swiper } from 'swiper/react';
import offer from '../offer.jpg'
import 'swiper/css';
import 'swiper/css/navigation'
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
                         bg-black bg-opacity-80 items-center h-full relative flex'>
                        <div className='text-start max-sm:w-full max-sm:pt-5 w-[30%] ml-20 max-sm:ml-10'>
                        <h1 className='text-4xl max-sm: tracking-wider w-1/3 font-bold '>{category.name}</h1>
                        <h2 className='text-xl w-[60%]'>{category.subTitle}</h2>
                        </div>
                        <Swiper
                        className='w-[100%] max-sm:hidden backdrop-blur-md h-full slide2'
                         slidesPerView={5}
                         spaceBetween={10}
                         loop={true}
                         modules={[Navigation]}
                         navigation
                         >
                            {category.data.map((product,index) => {
                                return (
                                    <SwiperSlide className='flex items-center h-full' key={index}>
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
                                        <div className='text-center'>
                                        <img src={product.src} className="h-[170px] max-sm:h-[200px] rounded-lg" alt={product.name} />
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