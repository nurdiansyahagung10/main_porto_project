import Image from "next/image";

const SectionAbout = () => {
  const accordionshow = (e: any) => {
    const header = e.currentTarget;
    const accordioncontent = header.parentElement.querySelector(".accordion-content");
    let accordionmaxheight = accordioncontent.style.maxHeight;
    if (accordionmaxheight == "0px" || accordionmaxheight.length == 0) {
      accordioncontent.style.maxHeight = `${accordioncontent.scrollHeight + 32}px`;
    } else {
      accordioncontent.style.maxHeight = `0px`;
    }
  }


  return (
    <>
      <div className="w-full mt-20 mb-10 flex justify-center">
        <button className="py-1.5 items-center flex gap-1 bg-white  border text-purple-600 shadow  font-medium rounded-xl px-4 " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
          Discover
        </button>
      </div>

      <div className="w-full flex flex-col mb-10 items-center text-center">
        <h1 className="font-semibold lg:text-6xl md:text-5xl text-4xl mb-10">About Me</h1>
        <p className="text-stone-600 pe-22 md:w-[75%] lg:w-[50%]">With a well-structured workflow and dedicated expert execution, we consistently deliver outstanding design results.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
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
            <h1 className="text-lg font-medium">Education</h1>


          </div>
          <div className="mt-4">
            <p className="text-stone-600 ">Graduate of SMK Wiraswasta Cimahi, majoring in Software Engineering with an average score of 87.3. Focused on programming, database management, and mathematics. Strong understanding of web development and related technologies.</p>
          </div>
        </div>




        <div className="lg:border-r md:mb-0 mb-10  border-dashed md:p-7">
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
            <h1 className="text-lg font-medium">Personality</h1>


          </div>
          <div className="mt-4">
            <p className="text-stone-600 ">A determined and responsible individual who takes full ownership of every task. Able to work under pressure and quick to learn new things. Good communication skills and a team player, always striving to deliver the best results in every project.</p>
          </div>
        </div>

        <div className=" mb-10 md:mb-0 md:col-span-2 lg:col-span-1 md:p-7">
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
            <h1 className="text-lg font-medium">Skills</h1>


          </div>
          <div className="mt-4">
            <p className="text-stone-600 ">Proficient in various programming languages such as JavaScript, PHP, Python, SQL, and C++. Skilled in software like Word, Excel, Adobe Illustrator, and Canva. A fast learner, detail-oriented, and a problem solver.</p>
          </div>
        </div>
      </div>





      <div className="bg-white md:p-6 border-t border-dashed md:mt-10">
        <h3 className="text-lg font-medium mt-5 text-gray-800">Other about me, you can know</h3>
        <p className="text-stone-600 ">We design Websites and Landing pages to meet any business solution and challenge.</p>

        <div className="h-1 w-full mx-auto  my-5"></div>

        <div className=" border rounded-xl mb-5">

          <button onClick={(e) => { accordionshow(e) }} className="accordion-header w-full cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>Hobbies</h3>
          </button>

          <div className="accordion-content px-5 transition-all duration-500 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 text-stone-600 pl-9 mb-5 text-justify">
              I have a strong passion for graphic design, and I often create posters and digital artwork in my spare time. It’s something I find both relaxing and rewarding. Besides design, I love exploring the world of technology—especially keeping up with new trends in software development. Coding isn't just part of my work, it's also something I enjoy doing as a personal project or hobby during weekends.            </p>
          </div>
        </div>

        <div className="transition border rounded-xl mb-5">

          <button onClick={(e) => { accordionshow(e) }} className="accordion-header w-full cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>Favorite Tools</h3>
          </button>

          <div className="accordion-content px-5 transition-all duration-500 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 text-stone-600 pl-9 mb-5 text-justify">
              When it comes to tools, I have a few favorites that make my work more efficient. Canva is my go-to for quick and creative designs. For coding, Visual Studio Code is where I spend most of my time—it’s lightweight, customizable, and has great extensions for web development. And when it comes to organizing data or managing projects, Excel is my trusty companion. These tools help me stay productive and organized throughout any project.            </p>
          </div>
        </div>


        <div className="transition border rounded-xl mb-5">

          <button onClick={(e) => { accordionshow(e) }} className="accordion-header w-full cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>Fun Fact</h3>
          </button>

          <div className="accordion-content px-5 transition-all duration-500 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 text-stone-600 pl-9 mb-5 text-justify">
              Here’s a fun fact about me—I can type at a speed of 112 words per minute! This has been a huge advantage, especially when working on tight deadlines or needing to get through long documentation quickly. It’s a skill I’ve honed over the years, and it definitely helps me stay efficient when juggling multiple tasks.            </p>
          </div>
        </div>


        <div className="transition border rounded-xl ">

          <button onClick={(e) => { accordionshow(e) }} className="accordion-header w-full cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <h3>Favorite Quote</h3>
          </button>

          <div className="accordion-content px-5 transition-all duration-500 pt-0 overflow-hidden max-h-0">
            <p className="leading-6 text-stone-600 pl-9 mb-5 text-justify">
              One quote that has always resonated with me is: "Success is not the key to happiness. Happiness is the key to success." This simple but powerful idea reminds me to focus on enjoying what I do, because that’s when I truly excel. Whether it's coding, designing, or learning something new, I believe that being passionate and happy about the work I do is the real key to achieving success in life.            </p>
          </div>
        </div>
      </div>




    </>
  );
}

export default SectionAbout;