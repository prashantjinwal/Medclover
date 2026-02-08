import Card from './Cardfunc'
import { MoveRight } from 'lucide-react';
import Link from "next/link";

export default function Services() {
  return (
    <section className="pb-26 pt-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-labrada opacity-80 text-black font-semibold text-center">
          what we do
        </h2>

        <h2 className="text-4xl font-labrada text-black font-semibold text-center mb-12  ">
          Our Services
          <div className="flex justify-center mt-4">
            <span className="w-10 sm:w-12 h-[3px] bg-orange-500 rounded-full mr-2"></span>
            <span className="w-10 sm:w-12 h-[3px] bg-blue-900 rounded-full"></span>
          </div>
        </h2>
        
      <Link key="services" href="/services">
        <p className='text-right text-xl flex justify-end font-labrada hover:text-orange-400'> See all &nbsp; <span className='flex justify-center items-center'>  <MoveRight /></span></p>
      </Link>
          <Card/>
          
        
      </div>
    </section>
  );
}
