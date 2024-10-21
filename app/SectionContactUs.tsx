import TextAos from "@/components/TextAos";

const SectionContactUs = () => {
    return (
        <>
            <div className="w-full mt-24 mb-10 flex justify-center">
                <button data-aos='fade-up' data-aos-duration='1100' className="py-1.5 items-center flex gap-1 bg-white  border text-purple-600 shadow  font-medium rounded-xl px-4 " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    Contact
                </button>
            </div>

            <div className="w-full flex flex-col mb-5 items-center text-center">
                <div className="font-semibold inline-flex gap-3 lg:text-6xl md:text-5xl text-4xl mb-10">
                    <TextAos animate={'fade-up'} duration={'1300'} text={'Lets'} />
                    <TextAos animate={'fade-up'} duration={'1400'} text={'Talk!'} />
                </div>
            </div>

            <div className="border rounded-2xl bg-[#f5f5f5]">
                <div className=" mx-auto  md:p-5 p-2">
                    <div data-aos='zoom-in' data-aos-duration='1500' className="grid grid-cols-1 py-10 lg:grid-cols-12 border rounded-2xl shadow-lg bg-white">
                        <div className=" md:col-span-4 border-r border-dashed px-10 text-black">
                            <div className="text-4xl sm:text-4xl inline-flex gap-2 leading-normal font-medium tracking-tight">
                                <TextAos animate={'fade-up'} duration={'1600'} text={'Say'} />
                                <TextAos animate={'fade-up'} duration={'1700'} text={'Hi'} />
                                <TextAos animate={'fade-up'} duration={'1800'} text={'to'} />
                                <TextAos animate={'fade-up'} duration={'1900'} text={'Me'} />
                            </div>
                            <TextAos animate={'fade-up'} classname="mt-4  text-stone-600" duration={'2000'} text={'Does your project not fit into the plan mentioned above? We can work out a custom solution to your needs and requests. Whether its adjusting timelines or refining project scope, Im here to ensure your vision is brought to life seamlessly.                            '} />

                            <div className="flex items-center ">

                            </div>

                        </div>

                        <form className="md:col-span-8 lg:mt-0 mt-5 flex flex-col  px-10">

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide  text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        className="appearance-none block w-full   border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none  "
                                        id="grid-email"
                                        type="email"
                                        placeholder="********@*****.**"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full  px-3">
                                    <label className="block uppercase tracking-wide  text-sm font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full h-28   border  rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none  "
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex w-full px-3">

                                    <button
                                        className="shadow w-full bg-black hover:bg-stone-900 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-6 rounded-lg"
                                        type="submit"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>

    );
};

export default SectionContactUs;
