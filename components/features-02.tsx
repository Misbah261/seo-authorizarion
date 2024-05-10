'use client'

import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image'
import Illustration from '@/public/images/side-illust.svg'
import lottie from 'lottie-web';
import CenterLogo from '@/public/images/routes-center.svg'
import * as animationData from '@/public/images/0TM0tGjn5o.json';
import FeaturesImage1 from '@/public/images/keyword-clustering.png';
import FeaturesImage2 from '@/public/images/feature-keywords.png';
import FeaturesImage3 from '@/public/images/kwfinder.png';



export default function Features02() {
  const animationContainer = useRef(null);


  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy(); 
    }
  }, []);
  return (
    <section className="relative">
      <div id="aboutus" className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -z-10 " aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4 " data-aos="zoom-out">About Search Authority.</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400" data-aos="zoom-out">Search Authority discovers and group keywords, collects
              competitor information, and enables you to create, save and export individual SEO projects for each campaign.</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-5 md:py-5">
          
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans" data-aos="zoom-out">Features.</h2>
          </div>
          
          
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:gap-16 items-start md:max-w-none">
            
            <div className="flex flex-col items-center" data-aos="zoom-out">
            <div className="mb-6">
            <Image src={FeaturesImage1}   alt="Hero Illustration" />
            </div>
            <h4 className="h4 text-gray-200 text-center mb-2">Keyword Discovery and Clustering</h4>
            <p className="text-lg text-gray-400 text-center">Surpass your competitors with our advanced tool that not only discovers new keywords but also smartly clusters them. Use our data-driven SERP-based cluster analysis to structure more effective and targeted SEO campaigns.</p>
          </div>
            
            
            
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="400">
            <div className="mb-6">
            <Image src={FeaturesImage3}   alt="Hero Illustration" />
            </div>
            <h4 className="h4 text-gray-200 text-center mb-2">Competitive Data Collection</h4>
            <p className="text-lg text-gray-400 text-center"> Uncover the secrets of market leaders with direct access to competitors' data. Extract titles, meta descriptions, headings, and word counts from successful articles for each identified keyword. This critical information allows for precise adjustments in your content strategy, boosting your relevance and visibility. </p>
          </div>
          </div>
        </div>
      </div>
          </div>
        
      </div>
    </section>
  )
}