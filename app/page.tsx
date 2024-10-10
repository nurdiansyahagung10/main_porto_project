"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import SectionProject from "./SectionProject";
import SectionAbout from "./SectionAbout";
import SectionCapability from "./SectionCapability";


export default function Home() {
  const [scrolltriger, setscrolltriger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 88) {
        setscrolltriger(true);
      } else {
        setscrolltriger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div
          className="absolute left-1/2 scale-125 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
          <div
            className="absolute inset-0 opacity-45 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <svg aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full  fill-black/40 stroke-black/20 ">
              <defs>
                <pattern id=":S1:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#:S1:)"></rect><svg x="-12" y="4"
                className="overflow-visible">
                <rect stroke-width="0" width="73" height="57" x="288" y="168"></rect>
                <rect stroke-width="0" width="73" height="57" x="144" y="56"></rect>
              </svg>
            </svg>
          </div>
        </div>
      </div>

      <nav className="w-full  h-auto z-20 top-0 py-3.5 fixed">
        <div className="items-center flex justify-center">
          <div className="md:block hidden">
            <ul className={`inline-flex w-[21.6rem] transition-all duration-500 overflow-hidden p-1 gap-3 text-white items-center  bg-neutral-950 rounded-full shadow-lg  ${scrolltriger === true ? '!w-[calc(100%-0.1px)] shadow-lg' : ''} `}>
              <a href="" className="bg-neutral-700 font-medium rounded-full p-1.5 px-3  "><li>
                Jurnal
              </li></a>
              <a href="" className=" font-medium rounded-full p-1.5 px-3  "><li>
                Jurnal
              </li></a>
              <a href="" className=" font-medium rounded-full p-1.5 px-3  "><li>
                Jurnal
              </li></a>
              <a href="" className=" font-medium rounded-full p-1.5 px-3  "><li>
                Jurnal
              </li></a>
              <a href="" className={"border flex items-center overflow-hidden transition-all gap-2 border-neutral-600 font-medium rounded-full p-1.5 px-3 "}>
                <div className="w-[0.45rem] h-[0.45rem] rounded-full bg-green-400">

                </div>
                <li>
                  Contact
                </li></a>
            </ul>
          </div>
        </div>
      </nav>


      <main className={' w-full  mx-auto px-3 relative container'}>

        <nav className=" md:relative sticky top-0 pt-3 md:pt-0.5 z-20">
          <div className="items-center w-full  rounded-xl md:border-none border md:px-0 px-3  h-auto  py-3  md:bg-transparent bg-white flex justify-between">
            <a href="" className="font-medium ">
              Yasyean
            </a>

            <a className="p-2.5 md:block bg-white hidden border text-purple-600 shadow  font-medium rounded-full px-4 " href="">
              Contact me?
            </a>
            <div className="w-[28px] h-[20px] md:hidden   relative cursor-pointer inline-block">
              <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute top-0 left-0 qubic" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
              <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute top-[8px] left-0 placeholder-opacity-100" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
              <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute bottom-0 left-0" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
            </div>
          </div>
        </nav>

        <SectionHeader />

        <main className="bg-white">
          <div className=" bg-white flex justify-center overflow-hidden rounded-b-[50%] relative" >
            <Image
              src={'/header/profile/Trending feeds (3).svg'}
              alt=""
              className="w-full max-w-[80%] min-w-[22rem] translate-y-1 aspect-video border md:rounded-3xl rounded-xl mx-auto h-full"
              width={100}
              height={100}
            />
            <div className="absolute w-full h-full rounded-b-[50%]" style={{ boxShadow: 'inset 0px -10px 30px 10px white' }}></div>
          </div>


          <SectionAbout />

          <SectionProject />



        </main>

        <div className="w-full relative px-3 mt-20 py-10">
          <SectionCapability />

        </div>

      </main >
      <footer className="mt-20 ">
      </footer>

    </>

  );



}