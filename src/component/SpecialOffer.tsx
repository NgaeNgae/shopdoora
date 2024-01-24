import offerBackground from '../offer.jpg'
import pob2 from '../pob2.jpg'
import pob from '../pod.avif'
import { FaChevronRight } from 'react-icons/fa6' 
const SpecialOffer = () => {
  return (
    <>
        <div className='grid text-white h-[22rem] max-sm:h-[60rem] max-sm:grid-rows-7 max-sm:gap-y-1 gap-x-2 my-5 grid-cols-5 max-sm:grid-cols-6 grid-rows-2 grid-flow-col'>
        <section style={{backgroundImage: `url(${offerBackground})`}} className="col-span-3 bg-left rounded-md flex max-sm:col-span-6 items-end row-span-3">
            <div className='p-8'>
            <h1 className='font-bold text-3xl'>Membership Program</h1>
            <h2 className='w-2/3 max-sm:w-[80%] my-3'>Be a Vape Pi member and get our special exclusive offers</h2>
            <button className='bg-gray-600/70 px-8 py-2 rounded-full ocus:ring-4 shadow-lg transform active:scale-90 transition-transform'>view</button>
            </div>
        </section>
        <div className=' max-sm:col-span-3 max-sm:row-span-4 relative rounded-md col-span-1 row-span-3'>
            <img className='h-full w-full object-cover rounded-md' src={pob2} alt="" />
            <section className='absolute active:bg-transparent  transition duration-400 backdrop-blur-sm bg-opacity-40 bg-black rounded-b-md w-full flex justify-between bottom-0 p-2'>
                <div className='w-2/3'>
                <h1 className='font-bold'>Devices</h1>
                <p className='text-sm'>Find the best for you here</p>
                </div>
                <span><FaChevronRight/></span>
            </section>
        </div>
  <div className=" max-sm:row-span-2 max-sm:col-span-3 relative mb-1 rounded-md col-span-1">
  <img className='h-full w-full object-cover rounded-md' src={pob} alt="" />
  <section className=' active:bg-transparent transition duration-400 absolute backdrop-blur-sm bg-opacity-40 bg-black rounded-b-md w-full flex justify-between bottom-0 p-2'>
                <div className='w-2/3'>
                <h1 className='font-bold'>Devices</h1>
                <p className='text-sm'>Find the best for you here</p>
                </div>
                <span><FaChevronRight/></span>
            </section>
  </div>
  <div className=" max-sm:row-span-2 max-sm:col-span-3 relative mt-1 rounded-md col-span-1">
  <img className='h-full w-full object-cover rounded-md' src={pob} alt="" />
  <section className='active:bg-transparent transition duration-400 absolute backdrop-blur-sm bg-opacity-40 bg-black rounded-b-md w-full flex justify-between bottom-0 p-2'>
                <div className='w-2/3'>
                <h1 className='font-bold'>Devices</h1>
                <p className='text-sm'>Find the best for you here</p>
                </div>
                <span><FaChevronRight/></span>
            </section>
  </div>
        </div>
    </>
  )
}

export default SpecialOffer