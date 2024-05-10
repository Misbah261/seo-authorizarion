'use client'
import { useState } from 'react'
export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)
  return (
    <section className="relative">
      <div id="pricing"  className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">Choose only what works for you.</h2>
            <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400">Prices: Monthly / Annual </p>
            <p className="text-xl text-gray-400">Contact us for custom Enterprise solutions.</p>

              <p className="text-xl text-gray-400">
              Our pay-as-you-go plan lets you choose: buy monthly credits or opt for an annual payment. There are no automatic renewals—simply contact support to add more credits or switch to a subscription if needed.
              </p>
              <p className="text-xl text-gray-400"> For a limited time - Sign up now and receive personalized support to help you get the most out of the tool.</p>
            </div>
          </div>
          
          
      
      <div className="grid md:grid-cols-5 xl:-mx-6 text-sm [&>div]:px-6 [&>div]:bg-slate-700/20 [&>div:nth-of-type(5n+1)]:bg-transparent max-md:[&>div:nth-of-type(5n+5)]:hidden max-md:[&>div:nth-of-type(5n+2)]:order-1 max-md:[&>div:nth-of-type(5n+3)]:order-2 max-md:[&>div:nth-of-type(5n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 md:[&>div:nth-of-type(5)]:rounded-tr-3xl md:[&>div:nth-last-of-type(4)]:rounded-bl-3xl md:[&>div:nth-last-of-type(5)]:rounded-br-3xl">
        
        <div className="px-6 flex flex-col justify-end">
          <div className="pb-5 md:border-b border-slate-800">
            
            <div className="max-md:text-center">
              <div className="inline-flex items-center whitespace-nowrap">
                <div className="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden">Monthly</div>
                <div className="relative">
                  <input type="checkbox" id="toggle" className="peer sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                  <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-gray-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-white">
                    <span className="sr-only">Pay Anually</span>
                  </label>
                </div>
                <div className="text-sm text-slate-500 font-medium ml-2">Yearly <span className="hidden md:block text-white">(-20%)</span></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end rounded-tl-3xl">
          <div className=" pb-4 mb-4 border-b border-slate-800">
            {/* <div className="text-base font-medium bg-clip-text mt-7 bg-white pb-0.5">Personal</div> */}
            <div className="mb-1">
              <span className="text-3xl font-bold text-slate-50">FREE</span>
            </div>
            {/* <div className="text-slate-200">Become fluent with SEO fundamentals.</div> */}
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/signup">
              Get Started <span className="tracking-normal text-gray-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className=" pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text bg-white mt-7 pb-0.5">Standard  <span className="ml-1 bg-gradient-to-r from-green-300 to-green-400 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded shadow-lg">Trial</span></div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '157' : '17'}</span><span className="text-sm text-slate-600 font-medium">{annual ? '/yr' : '/mo'}</span>
            </div>
            {/* <div className="text-slate-200">Everything you need to start developing.</div> */}
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/signup">
            Get Started<span className="tracking-normal text-gray-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className=" pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text bg-white mt-7 pb-0.5">Premium <span className="ml-2 bg-gradient-to-r from-pink-300 to-indigo-300 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded shadow-lg">Popular</span></div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '497' : '57'}</span><span className="text-sm text-slate-600 font-medium">{annual ? '/yr' : '/mo'}</span>
            </div>
            {/* <div className="text-slate-200">Full capabilities of Search Authority for pro development.</div> */}
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/signup">
              Get Started <span className="tracking-normal text-gray-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className=" pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text bg-white mt-7 pb-0.5"> Enterprise</div>
            <div className="mb-1">
              {/* <span className="text-lg font-medium text-slate-500"></span><span className="text-3xl font-bold text-slate-50">Contact Us</span> */}
            </div>
            <div className="text-slate-200">Contact Us.</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/signup">
              Contact Sales <span className="tracking-normal text-gray-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Number of keywords</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>50 <span className="md:hidden">Number of keywords</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>2000/Month <span className="md:hidden">Number of keywords</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>10000/Month <span className="md:hidden">Number of keywords</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Custom <span className="md:hidden">Number of keywords</span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Keywords clustering</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
          <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Keywords clustering</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Keywords clustering</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Keywords clustering</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Keywords clustering</span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Competitors data extraction</div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <span>No<span className="md:hidden"></span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Competitors data extraction</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Competitors data extraction</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes<span className="md:hidden">Competitors data extraction</span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Project management</div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <span>No<span className="md:hidden"></span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Project management</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Project management</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes<span className="md:hidden">Project management</span></span>
          </div>
        </div>

        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Download analysis</div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <span>No<span className="md:hidden"></span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Download analysis</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes <span className="md:hidden">Download analysis</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Yes<span className="md:hidden">Download analysis</span></span>
          </div>
        </div>
        
       
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Support</div>
        </div>
        
        <div className="px-6 flex flex-col justify-end rounded-br-2xl">
          <div className="py-2 text-slate-400 border-b border-slate-800">Premium Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
          <svg className="shrink-0 fill-white mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  )
}