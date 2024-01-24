import { FaChevronRight } from 'react-icons/fa6';
import relesed from '../relesed.jpg';
const NewReleased = () => {
  let products = [
      {
        src : relesed,
        name : "Strawberry Yogurt with Refreshing Flavor Nic 3 Percent",
        price : 30000
      },
      {
        src : relesed,
        name : "Strawberry Yogurt with Refreshing Flavor Nic 3 Percent",
        price : 30000
      },
      {
        src : relesed,
        name : "Strawberry Yogurt with Refreshing Flavor Nic 3 Percent",
        price : 30000
      },
      {
        src : relesed,
        name : "Strawberry Yogurt with Refreshing Flavor Nic 3 Percent",
        price : 30000
      }
  ];
  return (
    <>
    <header className="text-center my-10">
    <h1 className='font-bold text-4xl tracking-wider'><span className='text-red-500'>New </span><span>Relesed</span></h1>
        <h2 className="">Try Our Latest Flavors Here</h2>
    </header>
    <div className='flex max-sm:block max-md:flex-wrap max-sm:gap-10 max-md:gap-y-7 gap-2'>
      {
                products.map((product,index) => {
                  return (
                    <div key={index} className="w-[25%] max-md:w-[49%] shadow-lg transform active:scale-90 transition-transform max-sm:w-[90%] max-sm:my-5 max-sm:mx-auto relative rounded-lg">
                      <img className='rounded-xl' src={product.src} alt="" />
                      <div className='absolute max-md:text-sm max-md:w-[70%] bottom-0 w-[59%] p-4'>
                        <p>{product.name}</p>
                        <p>{product.price} MMK</p>
                      </div>
                    </div>
                  )
                })
      }

    </div>
    <div className="flex flex-col my-5 items-center">
    <button className="shadow-lg transform active:scale-90 transition-transform px-20 py-2 bg-gray-200 flex items-center justify-center rounded-full">View More <span><FaChevronRight/></span></button> 
    </div>
    </>
  )
}

export default NewReleased