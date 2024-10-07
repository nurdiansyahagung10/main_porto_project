const SectionCapability = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                <div
                    className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
                    <div
                        className="absolute inset-0 opacity-45 [mask-image:radial-gradient(white,transparent)]  ">
                        <svg aria-hidden="true"
                            className="absolute inset-x-0 inset-y-[-50%] -scale-75  h-[200%] w-full fill-black stroke-black">
                            <defs>
                                <pattern id=":S1:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
                                    <path d="M.5 56V.5H72" fill="none" stroke="white"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#:S1:)"></rect>

                        </svg>


                    </div>
                </div>
            </div>
            <div >
                <div className="w-full  mb-10 flex justify-center">
                    <button className="py-1.5 items-center flex gap-1 bg-white  border text-purple-600 shadow  font-medium rounded-xl px-4 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        Discover
                    </button>
                </div>

                <div className="w-full flex flex-col  items-center text-center">
                    <h1 className="font-semibold lg:text-6xl md:text-5xl text-4xl mb-10">About Me</h1>
                    <p className="text-stone-600 pe-22 md:w-[50%]">With a well-structured workflow and dedicated expert execution, we consistently deliver outstanding design results.</p>
                </div>
            </div>

        </>
    );
}

export default SectionCapability;