"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import SectionProject from "./SectionProject";
import SectionAbout from "./SectionAbout";
import SectionCapability from "./SectionCapability";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay'; // Ensure you import the CSS for autoplayimport 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Home() {
  const [scrolltriger, setscrolltriger] = useState(false);

  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY >= 88) {
      setscrolltriger(true);
    } else {
      setscrolltriger(false);
    }
  });

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
          <div className="pt-10">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              modules={[FreeMode, Autoplay]}
              className="mySwiper pointer-events-none"
            >
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 1</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 2</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 3</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 4</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 5</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 6</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 7</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 8</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 9</SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
              }}
              speed={2000}
              modules={[FreeMode, Autoplay]}
              className="mySwiper pointer-events-none"
            >
              <SwiperSlide className="p-2 px-3 whitespace-nowrap !w-[auto] bg-black rounded-xl text-white flex items-center justify-center">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  </div>
                  <div>
                    <span>website</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 2</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 3</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 4</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 5</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 6</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 7</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 8</SwiperSlide>
              <SwiperSlide className="p-2 whitespace-nowrap !w-[200px] bg-black rounded-full text-white">Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>

      </main >
      <footer className="mt-20 ">
      </footer>

    </>

  );



}