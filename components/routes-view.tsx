import Image from 'next/image'
import Icon01 from '@/public/images/integration-icon-01.svg'
import Icon02 from '@/public/images/integration-icon-02.svg'
import Icon03 from '@/public/images/integration-icon-03.svg'
import Icon04 from '@/public/images/integration-icon-04.svg'
import Icon05 from '@/public/images/integration-icon-05.svg'
import Icon06 from '@/public/images/integration-icon-06.svg'
import Side1 from '@/public/images/side-illust.svg'
import CenterLogo from '@/public/images/routes-center.svg'
import { useState } from 'react'
export default function Integrations() {


  return (
    <>
    <section className="relative">
      
      <div className="hidden md:block absolute w-0.5 h-8 bottom-0 bg-slate-800 left-1/2 -translate-x-1/2" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-slate-800">
          
          <div className="max-w-3xl mx-auto text-center pb-12 z-10 " data-aos="zoom-out">
            <h2 className=" h2">Learn more in the video below and sign up for FREE today! </h2>
          </div>
          
          <div className="relative flex flex-col items-center p-16">
            
            <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none -z-10">
              <Image src={Side1}  className="max-w-none pointer-events-none -z-10" alt="Hero Illustration" />
            </div>
            <div className="relative w-full h-96		 flex justify-center items-center" data-aos-delay="100">
              
            <iframe className='video w-full h-96		'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://www.youtube.com/embed/3fC-CD59fUw?si=3Q07K32vvDRhVmNK`}>
</iframe>
              {/* <Image src={CenterLogo} width={150} height = {65} className="max-w-none" priority alt="Hero Illustration" /> */}
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
    </>
  )
}