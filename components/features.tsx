import Image from 'next/image'
import FeaturesImage from '@/public/images/features.svg'
import FeaturesImage1 from '@/public/images/keyword-cluster.png'
import FeaturesImage2 from '@/public/images/feature-keywords.png'
import FeaturesImage3 from '@/public/images/keyword-grouping.png'
export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-5 md:py-5">
          
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans" data-aos="zoom-out">But it doesn't stop there.</h2>
          </div>
          
          
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            
            <div className="flex flex-col items-center" data-aos="zoom-out">
            <div className="mb-4">
            <Image src={FeaturesImage1}   alt="Hero Illustration" />
            </div>
            <h4 className="h4 text-gray-200 text-center mb-2">Enhanced Efficiency</h4>
            <p className="text-lg text-gray-400 text-center">Stop wasting time on repetitive tasks. Automate keyword discovery and clustering to focus on strategies that scale your results.</p>
          </div>
            
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="200">
            <div className="mb-4">
            <Image src={FeaturesImage2}   alt="Hero Illustration" />
            </div>
            <h4 className="h4 text-gray-200 text-center mb-2">Reliable Data</h4>
            <p className="text-lg text-gray-400 text-center">Base your decisions on data directly from Google. Our algorithm provides precise analysis that you can rely on to continually improve your search rankings.</p>
          </div>
            
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="400">
            <div className="mb-4">
            <Image src={FeaturesImage3}   alt="Hero Illustration" />
            </div>
            <h4 className="h4 text-gray-200 text-center mb-2">Competition</h4>
            <p className="text-lg text-gray-400 text-center"> Stay ahead, not just in pace. Utilize detailed insights into competitors' content to outperform them where it really matters: in search results.
</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}