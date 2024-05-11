"use client"; // This is a client component 👈🏽

import { useState } from "react";

export default function Features04() {

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

    // Just simply set the state with an object
    const [bar, setBar] = useState({ isHidden1: false,isHidden2: false,isHidden3: false,
       isHidden4: false,isHidden5: false,isHidden6: false, isHidden7: false,isHidden8: false,isHidden9: false, 
       isHidden10: false,isHidden11: false,isHidden12: false, });
    const [compdiv,setcompdiv] = useState({divNo:'0'});
    
    const toggledivno = async (num: any) => {

      const setdiv  = await setcompdiv({divNo:num})
      console.log(num)
      setTimeout(() => {
        
        switch(num) {
            case 1:
            return setBar({ isHidden1: !bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
              isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
              isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9 ,
              isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12 
             })
            case 2:
              return setBar({ isHidden1: bar.isHidden1 , isHidden2: !bar.isHidden2 , isHidden3: bar.isHidden3 ,
                isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
               })
            case 3:
              return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: !bar.isHidden3 ,
                isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
               }) 
               case 4:
                return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                  isHidden4: !bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                  isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                  isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                 }) 
                 case 5:
                return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                  isHidden4: bar.isHidden4 , isHidden5: !bar.isHidden5 , isHidden6: bar.isHidden6 ,
                  isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                  isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                 })
                 case 6:
                  return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                    isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: !bar.isHidden6 ,
                    isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                    isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                   })
                   case 7:
                    return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                      isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                      isHidden7: !bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                      isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                     })  
                     case 8:
                      return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                        isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                        isHidden7: bar.isHidden7 , isHidden8: !bar.isHidden8 , isHidden9: bar.isHidden9,
                        isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                       }) 
                       case 9:
                        return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                          isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                          isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: !bar.isHidden9,
                          isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                         })   
                         case 10:
                          return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                            isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                            isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                            isHidden10: !bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: bar.isHidden12
                           })  
                           case 11:
                            return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                              isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                              isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                              isHidden10: bar.isHidden10 , isHidden11: !bar.isHidden11 , isHidden12: bar.isHidden12
                             })  
                             case 12:
                              return setBar({ isHidden1: bar.isHidden1 , isHidden2: bar.isHidden2 , isHidden3: bar.isHidden3 ,
                                isHidden4: bar.isHidden4 , isHidden5: bar.isHidden5 , isHidden6: bar.isHidden6 ,
                                isHidden7: bar.isHidden7 , isHidden8: bar.isHidden8 , isHidden9: bar.isHidden9,
                                isHidden10: bar.isHidden10 , isHidden11: bar.isHidden11 , isHidden12: !bar.isHidden12
                               })         
        }
        
    }, 100);
     

    }
   

  //const style = { display: bar.isHidden ? 'none' : 'block' };

    return (
      <section className="relative" id="reasons">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800" data-aos="zoom-out">
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">Search Authority FAQs.</h2>
          </div>
            <div className="divide-y divide-slate-800">
              
              <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
               
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  
                  <div>
                    <div  onClick={() =>toggledivno(1)} className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">What is keyword clustering and how does this tool help?</h4>
                      
                    </div>
                     <p className={` text-sm text-slate-400 ${!bar.isHidden1  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>Keyword clustering is the process of grouping similar keywords based on Google SERP results to optimize SEO strategies. Our tool automates this process, saving time and increasing accuracy by identifying groups of keywords that share common URLs in search results, making it easier to create authoritative content on the topic.</p>
                    
                  </div>
                  <div>
                    <div onClick={() =>toggledivno(2)} className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">What degree of similarity is required between SERP results for two keywords to be clustered?</h4>
                    </div>
                     <p className={` text-sm text-slate-400 ${!bar.isHidden2 ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`} >By default, our tool clusters keywords that show at least 40% similarity in the top 10 SERP results. However, you can customize this similarity threshold to meet your specific needs by adjusting the percentage as desired.</p>
                    
                 </div>
                  <div>
                    <div onClick={() =>toggledivno(3)}  className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">How does the tool collect and use data from competitors?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden3 ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>Our tool analyzes the top SERP results for each entered keyword, collecting critical data such as titles, topics, meta descriptions, and counting the words in the articles. This data helps understand the strategies that allow competitors to succeed and how you can adjust your own content to compete effectively.</p>
                   
                  </div>
                  
                  
                  
                </div>
              </div>
              <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
               
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  
                  <div>
                    <div onClick={() =>toggledivno(4)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">What are the main advantages of using our SEO tool?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden4  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>The main benefits include significant time savings in manual research, increased organic visibility through more relevant and strategic content, and greater market competitiveness by using up-to-date and accurate data for decision-making.</p>
                  </div>
                  <div>
                    <div onClick={() =>toggledivno(5)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">Does the tool support different languages and locations?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden5  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>Yes, our tool allows you to select the language and location for the search, ensuring that the data collected is relevant to the specific target audience you want to reach.</p>
                  </div>
                  <div>
                    <div onClick={() =>toggledivno(6)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">Can I export the collected data?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden6  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>Yes, you can create, save, and export separate projects with all the collected information, which facilitates the management of multiple SEO campaigns and the sharing of insights with your team or clients.</p>
                  </div>
                  
                  
                  
                </div>
              </div>

              <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
               
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  
                  <div>
                    <div onClick={() =>toggledivno(7)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">How does the tool ensure the accuracy of the data?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden7  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>We use a direct methodology for collecting data from Google's SERP, without assumptions or predictions based on artificial intelligence that could compromise accuracy. This ensures that you receive reliable and updated information to base your SEO strategies on, regardless of changes in the algorithm.</p>
                  </div>
                  <div>
                    <div onClick={() =>toggledivno(8)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">Is support available if I have problems or questions?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden8  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>We offer robust support to all clients, including access to tutorials to ensure you can make the most of our tool.</p>
                  </div>
                  <div>
                    <div onClick={() =>toggledivno(9)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">What are the requirements to start using the tool?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden9  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>You need to provide an initial keyword, a list of keywords, or a competitor's URL to start the analysis. From there, our tool handles the entire process of clustering and data collection automatically.</p>
                  </div>
                  
                  
                  
                </div>
              </div>

              <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
               
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  
                  <div>
                  <div onClick={() =>toggledivno(10)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">How does the tool help improve content creation?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden10  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>With the collected and organized data, content creators can produce more relevant and well-positioned materials in search engines, improving both the quality and reach of the content.</p>
                  </div>
                  <div>
                  <div onClick={() =>toggledivno(11)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">What payment options are available for your plans?</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden11  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>We offer flexible 'Pay As You Go' options tailored to different needs and budgets. You can choose from our Free, Standard, Premium, or Enterprise levels. For specific details on the number of keywords, features included, and pricing, please refer to the pricing section of our website.</p>
                  </div>
                  <div>
                  <div onClick={() =>toggledivno(12)}   className="flex items-center space-x-2 mb-1 cursor-pointer">
                    <svg fill="#ffffff" height="35" width="35" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                      <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> 
                      </svg>
                      <h4 className="font-medium text-slate-50">Have more questions? Feel free to contact us!</h4>
                    </div>
                    <p className={` text-sm text-slate-400 ${!bar.isHidden12  ? 'max-h-0 opacity-0 overflow-hidden mb-0': 'max-h-40 opacity-100 mb-4'}  transition-max-height duration-500`}>If you have more questions or need more information, please email us at contact@searchauthority.pro. We're here to help!</p>
                  </div>
                  
                  
                  
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
      </section>
    )
  }