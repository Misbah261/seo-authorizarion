import Link from 'next/link'
import Image from 'next/image'
import LogoWhite from '@/public/images/Search-Authority-Logo-500x200.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-4">
              <Image src={LogoWhite} height={90} width={190}  alt="Center Logo" />
            </div>
            <div className="text-sm text-gray-600">
              <a className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out" href="">Terms</a> · <a className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out" href="">Privacy Policy</a>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">Plans</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#pricing">Personal</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#pricing">Standard Dev</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#pricing">Pro Dev</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#pricing">Team & Enterprise</a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">Address</h6>
            <ul className="text-sm space-y-0.5">
              <li>
                <a className="text-gray-400 transition duration-150 ease-in-out"> 2222 dummy Street 5555</a>
              </li>
              <li>
                <a className="text-gray-400 transition duration-150 ease-in-out">San Francisco</a>
              </li>
              <li>
                <a className="text-gray-400 transition duration-150 ease-in-out">CA 11111</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
