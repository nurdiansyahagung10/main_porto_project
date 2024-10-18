

const SectionTimeline = () => {
    return (

        <>
            <div className="w-full mt-10 mb-10 flex justify-center">
                <button className="py-1.5 items-center flex gap-1 bg-white  border text-purple-600 shadow  font-medium rounded-xl px-4 " >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    Timeline
                </button>
            </div>

            <div className="w-full flex flex-col mb-10 items-center text-center">
                <h1 className="font-semibold lg:text-6xl md:text-5xl text-4xl mb-10">My History</h1>
                <p className="text-stone-600 pe-22 md:w-[75%] lg:w-[50%]">With a well-structured workflow and dedicated expert execution, we consistently deliver outstanding design results.</p>
            </div>

            <div className="">
                <div className="flex flex-col items-center">

                    <div className="relative pl-8 sm:pl-32 py-6 md:w-3/4 lg:w-2/4 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-white shadow-lg rounded-full">2021 - 2024</time>
                            <div className="text-xl font-bold">Education | SMK Wiraswasta Cimahi</div>
                        </div>
                        <div className="text-stone-600 bg-white p-4 border rounded-xl">As Software Engineering (Rekayasa Perangkat Lunak)
                            Focused on web development, databases, and mathematics. Graduated with an average score of 87.3, Gained foundational knowledge in programming and related technologies.</div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 md:w-3/4 lg:w-2/4 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-white shadow-lg rounded-full">2022</time>
                            <div className="text-xl font-bold"> National Student Competitions</div>
                        </div>
                        <div className="text-stone-600 bg-white p-4 border rounded-xl">
                            <ul className="list-dic">
                                <li className="flex gap-2">
                                    <span>
                                        •
                                    </span>
                                    <span>
                                        Graphic Design Competition (City Level)
                                        Achieved 3rd place by designing packaging for a donut product.

                                    </span>

                                </li>
                                <li className="flex gap-2 mt-2">
                                    <span>
                                        •
                                    </span>
                                    <span>
                                        Web Technologies Competition (City Level)
                                        Developed a website focused on vaccination and COVID-19 information.

                                    </span>


                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 md:w-3/4 lg:w-2/4 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-white shadow-lg rounded-full">2023</time>
                            <div className="text-xl font-bold">Internship at PT ForIT Asta Solusindo</div>
                        </div>
                        <div className="text-stone-600 bg-white p-4 border rounded-xl">as Web Developer Intern
                            Worked on developing an online marketplace project using the Django framework with Python. Learned key skills in teamwork, communication, and data processing.</div>
                    </div>

                    <div className="relative pl-8 sm:pl-32 py-6 md:w-3/4 lg:w-2/4 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-white shadow-lg rounded-full">2023</time>
                            <div className="text-xl font-bold">Freelance Projects</div>
                        </div>
                        <div className="text-stone-600 bg-white p-4 border rounded-xl">Offered services in website development, copywriting, and graphic design.
                            Worked on various freelance projects, providing design and web solutions for clients.</div>
                    </div>
                    <div className="relative pl-8 sm:pl-32 py-6 md:w-3/4 lg:w-2/4 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-white shadow-lg rounded-full">2023</time>
                            <div className="text-xl font-bold">School & Class Instagram Admin</div>
                        </div>
                        <div className="text-stone-600 bg-white p-4 border rounded-xl">Managed social media for school and class events.
                            Handled the design and scheduling of posts for school-related activities</div>
                    </div>
                    <div className="relative pl-8 sm:pl-32 py-6 md:w-3/4 lg:w-2/4 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-purple-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-purple-600 bg-white shadow-lg rounded-full">2024</time>
                            <div className="text-xl font-bold">IT Support and Client Trainer at PT Indiga Nusa Digitama</div>
                        </div>
                        <div className="text-stone-600 bg-white p-4 border rounded-xl">Joined PT Indiga Nusa Digitama as an IT Support, where I also serve as a Trainer for clients. My responsibilities include providing technical support and conducting training sessions to help clients effectively use the company’s software solutions.</div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default SectionTimeline;