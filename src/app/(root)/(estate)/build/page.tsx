import Image from "next/image";
import Link from "next/link";
import "./page.css";

const projects = [
  "/build/build1.png",
  "/build/build2.png",
  "/build/build3.png",
];

const Header = () => {
  return (
    <header>
      <div className="bg-white">
        <div className="h-[86px]">
          <div className="bg-[#fafafa] h-full px-6 py-[13px] rounded-[70px] relative flex items-center">
            <Link
              href="/"
              className="leading-[0px] box-border relative block"
              aria-label="Build logo"
            >
              <Image
                src="/build/build_logo.png"
                alt="logo"
                width={100}
                height={40}
              />
            </Link>
            <div className="basis-2/4 mx-auto bg-[#fefeff] rounded-[40px] py-[18px] px-[35.56px] flex justify-between items-center">
              <Link
                className="font-[Poppins] text-base font-normal leading-[19.2px]"
                href="/"
              >
                About us
              </Link>
              <Link
                className="font-[Poppins] text-base font-normal leading-[19.2px]"
                href="/"
              >
                Projects
              </Link>
              <Link
                className="font-[Poppins] text-base font-normal leading-[19.2px]"
                href="/"
              >
                Agents
              </Link>
              <Link
                className="font-[Poppins] text-base font-normal leading-[19.2px]"
                href="/"
              >
                Services
              </Link>
              <Link
                className="font-[Poppins] text-base font-normal leading-[19.2px]"
                href="/"
              >
                Listings
              </Link>
              <button
                type="button"
                aria-label="Search"
                className="outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M11.9438 21C17.1906 21 21.4438 16.7467 21.4438 11.5C21.4438 6.25329 17.1906 2 11.9438 2C6.69714 2 2.44385 6.25329 2.44385 11.5C2.44385 16.7467 6.69714 21 11.9438 21Z"
                    stroke="#1F1F1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.4438 22L20.4438 20"
                    stroke="#1F1F1F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-x-[30px]">
              <Link
                className="font-[Poppins] text-base font-normal leading-[19.2px]"
                href="/"
              >
                Other Services
              </Link>

              <Link
                className="rounded-[40px] font-[Poppins] text-base font-normal leading-[19.2px] inline-flex border-[1px] py-[15px] px-[35px]"
                role="button"
                href="/"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="pt-[100px]">
      <section>
        <div className="rounded-[15px] px-[25px] back">
          <div className="grid grid-cols-2">
            <div className="col-span-1 self-center">
              <div className="inline-block">
                <div>
                  <span className="mb-[15px] font-[Poppins] font-normal leading-[19.2px] text-black">
                    Welcome to Realstate
                  </span>
                  <div className="mb-4 font-[Poppins] text-black font-semibold text-[50px] leading-[60px]">
                    Manage Your <br /> Property
                  </div>
                  <div className="mb-[45px] max-w-[526px] w-full text-black text-base font-normal font-[Poppins]">
                    Your will have everything nearby supermarket, buses , <br />
                    station, the carmen neighborhood, etc
                  </div>
                  <div className="mt-auto relative flex items-center rounded-[40px] gap-x-[167px]">
                    <input
                      type="email"
                      name="email"
                      className="rounded-[40px] w-full pl-5 bg-white outline-none h-[60px]"
                      placeholder="Enter email"
                    />
                    <button
                      className="absolute right-0 bg-[#1f1f1f] self-stretch rounded-[40px] px-[25px] py-[18px] text-[#fefefe]"
                      type="button"
                    >
                      Get a quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <figure className="rounded-2xl aspect-square w-full relative">
                  <div className="h-full absolute inset-0">
                    <Image
                      src="/build/main-building.png"
                      alt="3D Building"
                      className="block object-contain h-full w-full inset-0 absolute"
                      fill
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ThreeHows = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center">
        <span className="font-[Poppins] font-normal leading-[19.2px]">
          Three steps. Three minutes.
        </span>
        <div className="mt-4">
          <h2 className="text-[50px] font-semibold text-black leading-[60px] font-[Poppins]">
            Everything should be this easy.
          </h2>
        </div>
      </div>
      <div className="mt-[45px]">
        <div>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                >
                  <path
                    d="M56.1875 33.7188V46.2188C56.1875 47.0313 56.1563 47.8125 56.0625 48.5625C55.3438 57 50.375 61.1875 41.2188 61.1875H39.9688C39.1875 61.1875 38.4375 61.5625 37.9687 62.1875L34.2188 67.1875C32.5625 69.4063 29.875 69.4063 28.2187 67.1875L24.4687 62.1875C24.0625 61.6562 23.1563 61.1875 22.4688 61.1875H21.2188C11.25 61.1875 6.25 58.7188 6.25 46.2188V33.7188C6.25 24.5625 10.4688 19.5938 18.875 18.875C19.625 18.7813 20.4063 18.75 21.2188 18.75H41.2188C51.1875 18.75 56.1875 23.75 56.1875 33.7188Z"
                    stroke="#58BF52"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M68.6875 21.2188V33.7188C68.6875 42.9063 64.4687 47.8438 56.0625 48.5625C56.1562 47.8125 56.1875 47.0313 56.1875 46.2188V33.7188C56.1875 23.75 51.1875 18.75 41.2187 18.75H21.2187C20.4062 18.75 19.625 18.7813 18.875 18.875C19.5937 10.4688 24.5625 6.25 33.7187 6.25H53.7187C63.6875 6.25 68.6875 11.25 68.6875 21.2188Z"
                    stroke="#58BF52"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.1734 41.4062H42.2016"
                    stroke="#58BF52"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.2359 41.4062H31.2641"
                    stroke="#58BF52"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.2984 41.4062H20.3266"
                    stroke="#58BF52"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-[22px]">
                <h3 className="text-[28px] font-semibold leading-[33.6px] font-[Poppins]">
                  Answer questions
                </h3>
              </div>
              <div className="mt-[22px] max-w-[329px]">
                <div className="font-normal leding-6 font-[Poppins] text-base text-black">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                  bibendum in in vestibulum
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                >
                  <path
                    d="M6.58325 26.5625C6.58325 15.625 12.8333 10.9375 22.2083 10.9375H53.4583C62.8333 10.9375 69.0833 15.625 69.0833 26.5625V48.4375C69.0833 59.375 62.8333 64.0625 53.4583 64.0625H22.2083"
                    stroke="#FF791A"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.4583 28.125L43.677 35.9375C40.4582 38.5 35.177 38.5 31.9582 35.9375L22.2083 28.125"
                    stroke="#FF791A"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.58325 51.5625H25.3333"
                    stroke="#FF791A"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.58325 39.0625H15.9583"
                    stroke="#FF791A"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-[22px]">
                <h3 className="text-[28px] font-semibold leading-[33.6px] font-[Poppins]">
                  Select a quote
                </h3>
              </div>
              <div className="mt-[22px] max-w-[329px]">
                <div className="font-normal leding-6 font-[Poppins] text-base text-black">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                  bibendum in in vestibulum
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="75"
                  viewBox="0 0 76 75"
                  fill="none"
                >
                  <path
                    d="M42.104 11.25L16.4477 38.4062C15.479 39.4375 14.5415 41.4687 14.354 42.875L13.1977 53C12.7915 56.6562 15.4165 59.1562 19.0415 58.5312L29.104 56.8125C30.5102 56.5625 32.479 55.5312 33.4477 54.4687L59.104 27.3125C63.5415 22.625 65.5415 17.2812 58.6352 10.75C51.7602 4.28125 46.5415 6.5625 42.104 11.25Z"
                    stroke="#3741B5"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.8228 15.7812C39.1665 24.4063 46.1665 31 54.854 31.875"
                    stroke="#3741B5"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0415 68.75H66.2915"
                    stroke="#3741B5"
                    strokeWidth="3.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-[22px]">
                <h3 className="text-[28px] font-semibold leading-[33.6px] font-[Poppins]">
                  Get registered
                </h3>
              </div>
              <div className="mt-[22px] max-w-[329px]">
                <div className="font-normal leding-6 font-[Poppins] text-base text-black text-left">
                  Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                  bibendum in in vestibulum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestProjectHeader = () => {
  return (
    <div>
      <span className="font-[Poppins] font-normal leading-[19.2px] text-black">
        Best Project of the Years
      </span>
      <div className="flex justify-between mt-[31px]">
        <h2 className="text-[50px] font-semibold text-black leading-[60px] font-[Poppins]">
          Our recent projects
        </h2>
        <div className="flex gap-x-4 items-center">
          <button
            type="button"
            aria-label="View previous projects"
            className="w-[45px] h-[45px] rounded-full bg-transparent hover:bg-[#1f1f1f] flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="fill-[#fefefe]"
            >
              <path
                d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07999"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="View next projects"
            className="bg-transparent hover:bg-[#1f1f1f] w-[45px] h-[45px] rounded-full text-[#fefefe] flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="fill-[#fefefe]"
            >
              <path
                d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07999"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const BestProject = ({ i }: { i: number }) => {
  return (
    <div className="col-span-1">
      <div>
        <div className="col-span-3">
          <div>
            <div className="overflow-hidden rounded-2xl relative">
              <div className="grid auto-cols-fr">
                <div>
                  <figure className="rounded-2xl aspect-[3/2] w-full relative">
                    <div className="h-full absolute inset-0">
                      <Image
                        src={projects[i]}
                        alt="Building 1"
                        className="rounded-2xl block object-cover h-full w-full inset-0 absolute"
                        fill
                      />
                    </div>
                  </figure>
                </div>
                <div className="mt-[19px]">
                  <span className="text-black font-[Poppins] text-[21px] font-semibold leading-[21.2px]">
                    Sobha Hearland I Villas
                  </span>
                </div>
                <div className="mt-[19px] max-w-[329px]">
                  <div className="text-base text-black font-[Poppins] font-normal">
                    Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                    bibendum
                  </div>
                </div>
                <div className="mt-[19px]">
                  <div className="flex items-center">
                    <div className="flex justify-between">
                      {Array.from([1, 2, 3, 4], (x) => x).map((item) => (
                        <button key={item}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.28949 14.0413L4.0662 16.3442C3.70048 16.5436 3.26557 16.2346 3.33353 15.8236L4.14475 10.918L0.69181 7.42705C0.404191 7.13627 0.568347 6.64197 0.972777 6.58102L5.7279 5.86437L7.838 1.42986C8.01892 1.04964 8.56006 1.04964 8.74099 1.42986L10.8511 5.86437L15.6062 6.58102C16.0106 6.64197 16.1748 7.13627 15.8872 7.42705L12.4342 10.918L13.2455 15.8236C13.3134 16.2346 12.8785 16.5436 12.5128 16.3442L8.28949 14.0413Z"
                              fill="#F59914"
                            />
                          </svg>
                        </button>
                      ))}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.71039 14.0413L4.4871 16.3442C4.12138 16.5436 3.68647 16.2346 3.75443 15.8236L4.56565 10.918L1.11271 7.42705C0.82509 7.13627 0.989245 6.64197 1.39368 6.58102L6.1488 5.86437L8.2589 1.42986C8.43982 1.04964 8.98096 1.04964 9.16188 1.42986L11.272 5.86437L16.0271 6.58102C16.4315 6.64197 16.5957 7.13627 16.3081 7.42705L12.8551 10.918L13.6664 15.8236C13.7343 16.2346 13.2994 16.5436 12.9337 16.3442L8.71039 14.0413Z"
                          stroke="#9B9B9B"
                        />
                      </svg>
                    </div>
                    <div className="ml-[19px]">
                      <div>4.84</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestProjects = () => {
  return (
    <div className="py-[100px]">
      <BestProjectHeader />
      <div className="mt-[31px]">
        <div>
          <div className="grid grid-cols-3 gap-x-5">
            {Array.from([0, 1, 2], (x) => x).map((item: number, i: number) => (
              <BestProject key={item} i={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="pb-[100px]">
      <div className="flex items-center justify-center">
        <h2 className="text-[50px] font-semibold text-black text-center leading-[60px] font-[Poppins]">
          We are a global, boutique real <br /> estate brokerage
        </h2>
      </div>
      <div>
        <div className="mt-[45px] pl-[70px] pe-[69px]">
          <div className="grid grid-cols-2 gap-x-[176px] h-full">
            <div className="col-span-1 flex flex-col gap-y-[63px] self-center box-border">
              <div className="flex flex-col gap-y-6">
                <div className="font-[Poppins] text-[38px] text-black font-semibold leading-[45.6px]">
                  The transfer of real estate
                </div>
                <div className="text-base font-[Poppins] text-black font-normal">
                  Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
                  pellentesque sollicitudin. Egestas faucibus lacus diam in
                  senectus consectetur. Mattis elit adipiscing quisque tellus
                  scelerisque vehicula ante nunc. Tellus consequat nisl quis
                  nisl justo.
                </div>
              </div>
              <div className="flex gap-x-6 items-center">
                <button
                  type="button"
                  className="px-[35px] py-[15px] bg-[#1f1f1f] inline-flex rounded-[40px] font-[Poppins] text-base font-normal text-[#fefefe] leading-[19.2px]"
                >
                  Book Now!
                </button>
                <button
                  type="button"
                  className="px-[35px] py-[15px] bg-[#fefefe] border-[1px] border-[#bebebe] inline-flex rounded-[40px] font-[Poppins] text-base font-normal text-[#1f1f1f] leading-[19.2px]"
                >
                  Read More{" "}
                </button>
              </div>
              <div className="flex gap-x-[92px]">
                <span>
                  <div className="font-[Poppins] font-semibold leading-[80.4px] text-[67px]">
                    12+
                  </div>
                  <div className="text-base font-normal font-[Poppins] leading-[19.2px]">
                    customers
                  </div>
                </span>
                <span>
                  <div className="font-[Poppins] font-semibold leading-[80.4px] text-[67px]">
                    14+
                  </div>
                  <div className="text-base font-normal font-[Poppins] leading-[19.2px]">
                    offices
                  </div>
                </span>
                <span>
                  <div className="font-[Poppins] font-semibold leading-[80.4px] text-[67px]">
                    10+
                  </div>
                  <div className="text-base font-normal font-[Poppins] leading-[19.2px]">
                    students
                  </div>
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <figure className="relative aspect-square h-full w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 h-full rounded-xl">
                  <Image
                    src="/office.png"
                    className="absolute inset-0 block h-full w-full rounded-xl object-cover"
                    alt="Office"
                    sizes="100vw"
                    fill
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="rounded-[15px] px-[25px] back">
          <div className="grid grid-cols-3">
            <div className="col-span-2 self-center">
              <div className="inline-block">
                <div>
                  <div className="mb-4 font-[Poppins] text-black font-semibold text-[50px] leading-[60px]">
                    Subscribe Our Newsletter
                  </div>
                  <div className="mb-[45px] max-w-[526px] w-full text-black text-base font-normal font-[Poppins]">
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                    sit pellentesque sollicitudin. Egestas faucibus lacus diam
                    in senectus consectetur. Mattis elit adipiscing quisque
                    tellus scelerisque vehicula ante nunc.
                  </div>
                  <div className="mt-auto relative flex items-center rounded-[40px] gap-x-[167px]">
                    <input
                      type="email"
                      name="email"
                      className="rounded-[40px] w-full pl-5 bg-white outline-none h-[60px]"
                      placeholder="Enter email"
                    />
                    <button
                      className="absolute right-0 bg-[#1f1f1f] self-stretch rounded-[40px] px-[25px] py-[18px] text-[#fefefe]"
                      type="button"
                    >
                      Get a quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <figure className="rounded-2xl aspect-square w-full relative">
                  <div className="h-full absolute inset-0">
                    <Image
                      src="/build/3d-building.png"
                      alt="3D Building"
                      className="block object-contain h-full w-full inset-0 absolute"
                      fill
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default function Build() {
  return (
    <section>
      <div className="max-w-[1384px] mx-6">
        <Header />
        <Hero />
        <ThreeHows />
        <BestProjects />
        <About />
        <Footer />
      </div>
    </section>
  );
}
