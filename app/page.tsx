// import Image from "next/image";
import Accordian from '@/components/Accordian'
import MainPic from '@/components/MainPic'
import Cards1 from '@/components/Cards1'
import Picture1 from '@/components/Picture1'
import Cards2 from '@/components/Cards2'
import Reviews from '@/components/Reviews'
import OurWork from '@/components/OurWork'
import Plans from '@/components/plans'

export default function Home() {
  return (
    <main>
      <div className='my-6 mx-10'><Accordian /></div>
      <div className="my-2 md:my-10 h-44 md:h-96 flex items-center z-1"><MainPic /></div>
      <h1 className='text-lg md:text-2xl font-semibold text-center m-2 text-slate-800'>Technology-Driven, Results-Oriented Digital Marketing Agency</h1>
      <h5 className='text-sm md:text-base text-center font-light text-slate-600'>We ensure your investment is maximized, with campaigns that elevate your brand to the next level.</h5>
      <div className='flex justify-center'><Cards1 /></div>
      <div className="m-2 md:m-10 h-96 flex items-center"><Picture1 /></div>
      <div><Cards2 /></div>
      <div><Reviews /></div>
      <div><OurWork /></div>
      <div><Plans /></div>
    </main>
  );
}
