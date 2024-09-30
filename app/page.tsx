"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrolltriger, setscrolltriger] = useState(false);

    window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY >= 88){
      setscrolltriger = true;
    }else{
    
    }
    });

  return (
    <>
      <nav className="w-full h-auto z-20 top-0 py-3 fixed">
        <div className="items-center flex justify-center">

          <div className="md:block hidden">
            <ul className="inline-flex p-1 gap-3 text-white items-center  bg-neutral-900 rounded-full border">
              <a href="" className="bg-neutral-600 font-medium rounded-full p-1.5 px-3  "><li>
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
              <a href="" className="border flex items-center w-full overflow-hidden transition-all gap-2 border-neutral-600 font-medium rounded-full p-1.5 px-3  ">
                <div className="w-[0.45rem] h-[0.45rem] rounded-full bg-green-400">

                </div>
              <li>
                Contact
              </li></a>
            </ul>
          </div>


        </div>

      </nav>
      <main className={' w-full h-screen mx-auto px-3 relative container'}>
        <nav className="w-full mt-0.5 h-auto z-20 py-3  ">
          <div className="items-center flex justify-between">
            <a href="" className="font-medium ">
              Yasyean
            </a>

            <a className="p-2.5 md:block hidden border text-purple-600 shadow-sm  font-medium rounded-full px-4 " href="">
              Contact me?
            </a>
            <div className="w-[28px] h-[20px] md:hidden   relative cursor-pointer inline-block">
              <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute top-0 left-0 qubic" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
              <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute top-[8px] left-0 placeholder-opacity-100" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
              <span className="rounded-full bg-black w-full h-[3px] duration-500  absolute bottom-0 left-0" style={{ transition: ' .3s cubic-bezier(.8, .5, .2, 1.4)' }}></span>
            </div>
          </div>

        </nav>
        <header className=" relative">
          <div className="  py-4  mt-7 flex flex-col gap-3">
            <h2 className="text-xl">- Hello Iam Agung nurdiansyah <span className="whitespace-nowrap">AKA Yasya</span></h2>
            <h1 className="font-semibold text-7xl">Self taught fullstack web developer, data analyst and design grafis </h1>
            <p className=" text-stone-600 pe-22">Based in Indonesian as Vocational school graduates majoring in Software Engineering who have interests and talents in the field of
              programming or in the field related to computers with communication experience</p>
          </div>
        </header>
        <div className=" mt-20  rounded-b-[50%] relative ">
        <Image src={'/header/profile/Desain tanpa judul (1).svg'} alt=""  style={{boxShadow: 'inset 0px 0px 10px 20px white'}} className={"w-[70%] mx-auto  h-full"}  width={100} height={100}></Image>
        </div>
      </main>
    </>

  );



}