import Image from "next/legacy/image"
import Illustration from '@/public/images/cta-illustration.svg'
export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="relative bg-gradient-to-tr from-sky-600 to-pink-800 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden" data-aos="zoom-out">
          
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10" aria-hidden="true">
            <Image src={Illustration} className="max-w-none" alt="Illustration" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="text-4xl font-bold font-uncut-sans mb-2">Develop with APIGen.</h3>
              <p className="text-blue-200">See what true AI-driven development looks like with APIGen. Start free, today.</p>
            </div>
            
            <div className="shrink-0">
              <a className="btn-sm text-gray-800 bg-gray-200 hover:to-blue-500 w-full group" href="#0">
                Choose Your Plan <span className="tracking-normal text-gray-700 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}