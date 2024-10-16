import Image from "next/image";

const SectionAbout = () => {
  return (
    <>
      <div className="w-full mt-20 mb-10 flex justify-center">
        <button className="py-1.5 items-center flex gap-1 bg-white  border text-purple-600 shadow  font-medium rounded-xl px-4 " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
          Discover
        </button>
      </div>

      <div className="w-full flex flex-col mb-10 items-center text-center">
        <h1 className="font-semibold lg:text-6xl md:text-5xl text-4xl mb-10">About Me</h1>
        <p className="text-stone-600 pe-22 md:w-[75%] lg:w-[50%]">With a well-structured workflow and dedicated expert execution, we consistently deliver outstanding design results.</p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="md:border-r md:mb-0 mb-10  border-dashed md:p-7">
          <div className="border md:p-3 p-2 rounded-3xl">
            <div className="bg-white w-full h-auto">
              <Image
                src={'/header/profile/b1oysJMBAcwj6oXLrF6f191BmU.avif'}
                alt=""
                className="aspect-video shadow-lg rounded-3xl w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>


          <div className="mt-7 flex items-center justify-between">
            <h1 className="text-lg font-medium">Website sistem</h1>


          </div>
          <div className="mt-4">
            <p className="text-stone-600 ">We design Websites and Landing pages to meet any business solution and challenge.</p>
          </div>
        </div>




        <div className="md:border-r md:mb-0 mb-10  border-dashed md:p-7">
          <div className="border md:p-3 p-2 rounded-3xl">
            <div className="bg-white w-full h-auto">
              <Image
                src={'/header/profile/b1oysJMBAcwj6oXLrF6f191BmU.avif'}
                alt=""
                className="aspect-video shadow-lg rounded-3xl w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>


          <div className="mt-7 flex items-center justify-between">
            <h1 className="text-lg font-medium">Website sistem</h1>


          </div>
          <div className="mt-4">
            <p className="text-stone-600 ">We design Websites and Landing pages to meet any business solution and challenge.</p>
          </div>
        </div>

        <div className=" mb-10 md:mb-0 border-dashed md:p-7">
          <div className="border md:p-3 p-2 rounded-3xl">
            <div className="bg-white w-full h-auto">
              <Image
                src={'/header/profile/b1oysJMBAcwj6oXLrF6f191BmU.avif'}
                alt=""
                className="aspect-video shadow-lg rounded-3xl w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>


          <div className="mt-7 flex items-center justify-between">
            <h1 className="text-lg font-medium">Website sistem</h1>


          </div>
          <div className="mt-4">
            <p className="text-stone-600 ">We design Websites and Landing pages to meet any business solution and challenge.</p>
          </div>
        </div>
      </div>





      <div className="bg-white md:p-6 border-t border-dashed md:mt-10">
        <h3 className="text-lg font-medium mt-5 text-gray-800">Other about me, you can know</h3>
        <p className="text-stone-600 ">We design Websites and Landing pages to meet any business solution and challenge.</p>

        <div className="h-1 w-full mx-auto  my-5"></div>

        <div className="transition border rounded-xl mb-5">

          <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>What is term?</h3>
          </div>

          <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
              Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
              far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
          </div>
        </div>

        <div className="transition border rounded-xl mb-5">

          <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>When to use Accordion Components?</h3>
          </div>

          <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
              Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
              far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
          </div>
        </div>


        <div className="transition border rounded-xl mb-5">

          <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>How can it be defined?</h3>
          </div>

          <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
              Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
              far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
          </div>
        </div>


        <div className="transition border rounded-xl ">

          <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>Chamber reached do he nothing be?</h3>
          </div>

          <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 font-light pl-9 text-justify">
              Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
              far daughter.
            </p>
            <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
          </div>
        </div>
      </div>




    </>
  );
}

export default SectionAbout;