import Image from 'next/image'
import Synthine from '@/public/images/eventica-logo-dummy-02.png'
import Phemeral from '@/public/images/phemeral-logo.svg'
import Perceptify from '@/public/images/perceptify-logo.svg'
import Zdravi from '@/public/images/zdravi-logo.svg'
import Vibrilify from '@/public/images/vibrilify-logo.svg'


export default function PressLogos() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 border-b border-gray-800">
          <div className="max-w-sm md:max-w-5xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" >
            <Image src={Phemeral} width={160} height = {75} className="max-w-none" priority alt="Hero Illustration" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" >
            <Image src={Phemeral} width={160} height = {75} className="max-w-none" priority alt="Hero Illustration" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" >
            <Image src={Phemeral} width={160} height = {75} className="max-w-none" priority alt="Hero Illustration" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" >
            <Image src={Phemeral} width={160} height = {75} className="max-w-none" priority alt="Hero Illustration" />
            </div>
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" >
            <Image src={Phemeral} width={160} height = {75} className="max-w-none" priority alt="Hero Illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}