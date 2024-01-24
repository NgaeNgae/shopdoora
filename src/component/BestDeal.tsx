import { MdOutlineStar } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import pod from '../pod.avif'
const BestDeal = () => {
    let pods = [
        {
            src : pod,
            name : "Refreshing Mint",
            price : 30000,
            star : 600,
            discount : 27
        },
        {
            src : pod,
            name : "Refreshing Mint",
            price : 30000,
            star : 600,
            discount : 25
        },
        {
            src : pod,
            name : "Refreshing Mint",
            price : 30000,
            star : 600,
            discount : 25
        },
        {
            src : pod,
            name : "Refreshing Mint",
            price : 30000,
            star : 600,
            discount : 25
        },
        {
            src : pod,
            name : "Refreshing Mint",
            price : 30000,
            star : 600,
            discount : 25
        },
        {
            src : pod,
            name : "Refreshing Mint",
            price : 30000,
            star : 600,
            discount : 25
        },
    ]
  return (
    <>
        <header className='text-black text-center'>
            <h1 className='text-4xl font-bold'>Best Deals</h1>
            <h3 className='text-lg'>Just For You</h3>
        </header>
        <div className="flex max-md:flex-wrap max-sm:block my-5 justify-around">
            {
                pods.map((pod,index) => {
                    return (
                        <section key={index} className='transform max-md:my-5 active:scale-90 max-md:w-[32%] transition-transform w-[16%] max-sm:my-10 max-sm:gap-6 max-sm:w-[100%] relative text-center'>
                            <span className="bg-red-600/90 absolute py-1 max-sm:left-28 max-sm:right-28 text-xs left-12 right-12 z-50 text-white">{pod.discount}% Off</span>
                            <img src={pod.src} alt={pod.name} className="rounded-lg object-cover max-sm:mx-auto mb-3 max-sm:h-[15rem] h-[12rem]" />
                            <h1>{pod.name}</h1>
                            <h2>{Math.ceil(pod.price / pod.discount)} MMK</h2>
                            <h3 className=' text-xs line-through'>{pod.price} MMK</h3>
                            <span className="flex text-sm justify-center items-center text-yellow-400"><MdOutlineStar/>{pod.star} Points</span>
                        </section>
                    )
                })
            }
        </div>
        <div className="flex flex-col max-md:mb-20 items-center">
        <button className="px-20 py-2 bg-gray-200 flex items-center justify-center rounded-full shadow-lg transform active:scale-90 transition-transform">View More <span><FaChevronRight/></span></button>
        </div>
    </>
  )
}

export default BestDeal