"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import SectionProject from "./SectionProject";
import SectionAbout from "./SectionAbout";
import SectionCapability from "./SectionCapability";
import SectionTimeline from "./SectionTimeline";
import SectionContactUs from "./SectionContactUs";
import SectionFooter from "./SectionFooter";


export default function Home() {
  const [scroll, setscroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setscroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navshow = () => {
    document.getElementById('offcanvas')?.classList.toggle('invisible');
    document.getElementById('offcanvas')?.classList.toggle('!opacity-100');
    document.getElementById('backdrop')?.classList.toggle('invisible');
    document.getElementById('backdrop')?.classList.toggle('!opacity-100');
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div
          className="absolute left-1/2 scale-110 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
          <div
            className="absolute inset-0 opacity-45 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <svg aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full  fill-black/40 stroke-black/20 ">
              <defs>
                <pattern id=":S1:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#:S1:)"></rect>
            </svg>
          </div>
        </div>
      </div>

      <nav className="w-full z-30 h-auto top-0 py-3.5 fixed">
        <div className="items-center flex justify-center">
          <div className="md:block hidden">
            <ul className={`inline-flex w-[24.6rem] transition-all duration-500 overflow-hidden p-1 gap-3 text-white items-center  bg-black rounded-full shadow-lg  ${scroll >= 88 ? '!w-[calc(100%-0.1px)] ' : ''} `}>
              <a href="#about" className={` ${scroll >= 890 && scroll <= 2050 ? 'bg-stone-700 ' : ''} font-medium transition-all duration-500  rounded-full p-1.5 px-3`} ><li>
                About
              </li></a>
              <a href="#project" className={` ${scroll >= 2050 && scroll <= 3900 ? 'bg-stone-700 ' : ''} font-medium transition-all duration-500  rounded-full p-1.5 px-3`} ><li>
                Project
              </li></a>
              <a href="#timeline" className={` ${scroll >= 3900 && scroll <= 5200 ? 'bg-stone-700 ' : ''} font-medium transition-all duration-500  rounded-full p-1.5 px-3`} ><li>
                Timeline
              </li></a>
              <a href="#capability" className={` ${scroll >= 5200 && scroll <= 5700 ? 'bg-stone-700 ' : ''} font-medium transition-all duration-500  rounded-full p-1.5 px-3`} ><li>
                Capability
              </li></a>
              <a href="#contact" className={"border flex items-center overflow-hidden gap-2 border-neutral-600 font-medium rounded-full p-1.5 px-3 "}>
                <div className="w-[0.45rem] h-[0.45rem] rounded-full bg-green-400">

                </div>
                <li>
                  Contact
                </li></a>
            </ul>
          </div>
        </div>
      </nav>

      <nav className=" md:hidden px-3 container mx-auto sticky top-0 pt-3  z-20">
        <div id="nav" className="items-center transition-shadow duration-300  w-full shadow-lg  rounded-xl border  px-4  h-auto  py-3  bg-white flex justify-between">
          <a href="" className="font-medium text-lg ">
            Yasyean
          </a>

          <button onClick={navshow} className="w-[28px] h-[20px] relative cursor-pointer inline-block">
            <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute top-0 left-0 qubic" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
            <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute top-[8px] left-0 placeholder-opacity-100" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
            <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute bottom-0 left-0" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
          </button>
        </div>
      </nav>

      <div id="backdrop" className="bg-black/20 invisible opacity-0 fixed top-0 left-0 right-0 bottom-0 z-20 transition-all duration-300"></div>
      <div id="offcanvas" className="bg-white w-3/4 sm:w-3/5  invisible opacity-0 fixed top-0 left-0 right-0 bottom-0 z-30 transition-all duration-300">
        <div className=" px-4 container w-full mx-auto">
          <div className="w-full  ">
            <div className="py-3 border-b flex justify-between mt-3 text-lg items-center  gap-2 w-full bg-white   font-medium  px-3 " >
              Yasyean
              <button onClick={navshow}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
              </button>
            </div>
          </div>

          <ul className=" w-full">
            <a href="#about" className="w-full " onClick={navshow}>
              <button className="py-3 mt-4 items-center flex hover:border hover:text-purple-600 transiition-all duration-200 hover:bg-[#f8fafb] gap-2 w-full bg-white text-stone-600  font-medium rounded-xl px-4 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                About
              </button>
            </a>
            <a href="#project" className="w-full " onClick={navshow}>
              <button className="py-3 mt-4 items-center flex hover:border hover:text-purple-600 transiition-all duration-200 hover:bg-[#f8fafb] gap-2 w-full bg-white text-stone-600  font-medium rounded-xl px-4 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                Project
              </button>
            </a>
            <a href="#timeline" className="w-full " onClick={navshow}>
              <button className="py-3 mt-4 items-center flex hover:border hover:text-purple-600 transiition-all duration-200 hover:bg-[#f8fafb] gap-2 w-full bg-white text-stone-600  font-medium rounded-xl px-4 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                Timeline
              </button>
            </a>
            <a href="#capability" className="w-full " onClick={navshow}>
              <button className="py-3 mt-4 items-center flex hover:border hover:text-purple-600 transiition-all duration-200 hover:bg-[#f8fafb] gap-2 w-full bg-white text-stone-600  font-medium rounded-xl px-4 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                Cavability
              </button>
            </a>
            <a href="#contact" className="w-full " onClick={navshow}>
              <button className="py-3 mt-4 flex items-center justify-between hover:border hover:text-purple-600 transiition-all duration-200 hover:bg-[#f8fafb] gap-2 w-full bg-white text-stone-600  font-medium rounded-xl px-4 " >
                <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                Contact

                </div>

                <div className="w-[0.45rem] h-[0.45rem] rounded-full bg-green-400"></div>

              </button>
            </a>
          </ul>
        </div>
      </div>

      <main className={' w-full   mx-auto px-6 relative container'}>

        <header className="md:mb-14 mb-12">
          <nav className=" hidden md:block relative pt-0.5 z-20">
            <div className="items-center w-full  rounded-xl md:border-none border px-0  h-auto  py-3  bg-transparent  flex justify-between">
              <a href="" className="font-medium text-lg ">
                Yasyean
              </a>

              <a className="p-2.5 block bg-white  border text-purple-600 shadow  font-medium rounded-full px-4 " href="">
                Contact me?
              </a>
            </div>
          </nav>

          {/* header section */}
          <SectionHeader />

        </header>

        <main className="bg-white">
          <div className=" bg-white flex justify-center overflow-hidden rounded-b-[50%] relative" >
            <Image
              src={'/header/profile/Trending feeds (3).svg'}
              alt=""
              className="w-full max-w-[80%] min-w-[24rem] translate-y-1 aspect-video border md:rounded-3xl rounded-xl mx-auto h-full"
              width={100}
              height={100}
            />
            <div className="absolute w-full h-full rounded-b-[50%]" style={{ boxShadow: 'inset 0px -10px 30px 10px white' }}></div>
          </div>

          {/* about section */}
          <div id="about" ></div>

          <SectionAbout />

          {/* project section   */}
          <div id="project">          </div>

          <SectionProject />


        </main>


      </main >
      <div className="bg-[#f8fafb]" id="timeline">
        <div className="w-full mx-auto container  relative px-6 mt-20 pb-16 py-10">
          {/* timeline section */}
          <SectionTimeline />
        </div>

      </div>

      <div id="capability"></div>
      <div className="w-full mx-auto container relative px-6 mt-20  py-10" >
        {/* cabapibility section */}
        <SectionCapability />

        {/* contactus section */}
        <div id="contact"></div>

        <SectionContactUs />
      </div>

      <footer className="bg-black ">
        <div className="w-full mx-auto container  relative px-6 mt-10 pb-10 py-10">
          {/* footer section */}
          <SectionFooter />
        </div>
      </footer>

    </>

  );
}