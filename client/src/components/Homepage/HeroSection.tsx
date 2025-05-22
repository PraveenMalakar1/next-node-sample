import HeroForm from "./HeroForm";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section className="bg-[radial-gradient(65.89%_100%_at_100%_0%,_#D1DDFB_0%,_rgba(209,221,251,0)_100%)] py-10 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
        <HeroForm />
        <div>
          <h1 className="items-center text-center text-[#050B20] font-semibold text-[22px] leading-[32px] sm:text-[44px] sm:leading-[64px] sm:tracking-[0%] sm:font-[600] align-middle ">
            Start Your Journey with the
          </h1>
          <h1 className=" font-dm-sans font-bold text-[24.84px] leading-[32px] tracking-[0] text-[#405FF2] text-center align-middle sm:text-[60px] sm:leading-[64px] sm:tracking-[-0.05em] ">
            Car of Your Dreams
          </h1>

          <p className=" font-dm-sans font-normal text-[14px] leading-[18px] tracking-[0] text-[#050B20] text-center align-middle sm:flex sm:items-center sm:text-[20px] sm:leading-[30px] ">
            Choose from 1000+ high-quality cars with flexible financing and
            delivery to your door.
          </p>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
