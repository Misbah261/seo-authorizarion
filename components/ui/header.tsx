import Link from 'next/link'
import Image from "next/legacy/image"
import LogoWhite from '@/public/images/Search-Authority-Logo-500x200.png'


export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="mt-2 md:mt-10 shrink-0 mr-4 w-1/4 md:w-1/6">
            <Link href="/" passHref>
              
                <Image src={LogoWhite} layout="responsive" priority alt="Logo" />
            
            </Link>
          </div>

          {nav &&
            <nav className="flex grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <a className="font-medium text-gray-400 hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="#aboutus">About</a>
                </li>
                <li>
                  <a className="font-medium text-gray-400 hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="#pricing">Pricing</a>
                </li>
                <li>
                  <a className="font-medium text-gray-400 hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="#reasons">FAQs</a>
                </li>
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-sky-800 hover:to-blue-500 w-full  group" href="/signup">
                    Sign Up <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li>
                {/* <li className="ml-3">
                  <Link className="btn-sm text-white bg-sky-800 hover:to-blue-500 w-full  group" href="/signin">
                    Sign In <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li> */}
                
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
