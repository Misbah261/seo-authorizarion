import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/hero-illustration.svg'


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" priority alt="Hero Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-xl mx-auto md:max-w-[700px] md:mx-0 text-center md:text-left">
            
          <p className="text-lg" data-aos="zoom-out" data-aos-delay="200">
          Discover Keywords, Build Clusters, and Analyze Competitors in Seconds with
            </p>
            <h1 className="h1 font-uncut-sans mb-6" data-aos="zoom-out" data-aos-delay="100">
              <em className="font-italic bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent">Search Authority</em>
            </h1>
            <p className="text-xl text-gray-400 mb-10" data-aos="zoom-out" data-aos-delay="200">
            Automate your keyword analysis and data collection with unmatched precision. Eliminate guesswork and rework with a 100% reliable tool, designed to optimize your SEO performance.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <Link className="btn text-gray bg-sky-800 hover:bg-sky-700 w-full transition duration-150 ease-in-out group" href="/signup">
                  Get Started For Free{' '}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <Link className="btn text-gray-300 bg-gray-800 w-full shadow-lg hover:bg-gray-700 w-full transition duration-150 ease-in-out group" href="#pricing">
                  Explore Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}