import TextAos from "@/components/TextAos";

const SectionHeader = () => {
    return (
        <div className=" relative">
            <div className="  py-3 pb-4  mt-10 flex flex-col gap-3">
                <h2 className="inline-flex flex-wrap gap-1 md:text-xl sm:text-lg font-medium">
                    <TextAos animate={'fade-up'} duration={'1000'} text={'—Hello'} />
                    <TextAos animate={'fade-up'} duration={'1100'} text={'Iam'} />
                    <TextAos animate={'fade-up'} duration={'1200'} text={'Agung'} />
                    <TextAos animate={'fade-up'} duration={'1300'} text={'nurdiansyah'} />
                    <TextAos animate={'fade-up'} duration={'1400'} text={'AKA Yasya'} classname={'whitespace-nowrap'} />
                </h2>
                <h1 className="font-semibold gap-3 flex-wrap lg:text-7xl md:text-6xl text-5xl inline-flex">
                    <TextAos animate={'fade-up'} duration={'1100'} text={'Self'} />
                    <TextAos animate={'fade-up'} duration={'1200'} text={'taught'} />
                    <TextAos animate={'fade-up'} duration={'1300'} text={'fullstack'} />
                    <TextAos animate={'fade-up'} duration={'1400'} text={'web'} />
                    <TextAos animate={'fade-up'} duration={'1500'} text={'developer,'} />
                    <TextAos animate={'fade-up'} duration={'1600'} text={'data'} />
                    <TextAos animate={'fade-up'} duration={'1700'} text={'analyst'} />
                    <TextAos animate={'fade-up'} duration={'1800'} text={'and'} />
                    <TextAos animate={'fade-up'} duration={'1900'} text={'design'} />
                    <TextAos animate={'fade-up'} duration={'2000'} text={'grafis'} />

                </h1>
                    <TextAos animate={'fade-up'} duration={'2100'} text={"Based in Indonesian as Vocational school graduates majoring in Software Engineering who have interests and talents in the field of programming or in the field related to computers with communication experience"}  classname={'text-stone-600 md:text-base text-sm pe-22'} />
            </div>
        </div>

    );
}

export default SectionHeader;