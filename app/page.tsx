// import Image from "next/image";
import MainPic from '@/components/MainPic'
import Cards1 from '@/components/Cards1'

export default function Home() {
  return (
    <main>
      <div className="m-10 h-96 flex items-center"><MainPic /></div>
      <div className='flex justify-center'><Cards1 /></div>
    </main>
  );
}
