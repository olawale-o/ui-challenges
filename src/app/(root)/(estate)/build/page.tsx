import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

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
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M68.6875 21.2188V33.7188C68.6875 42.9063 64.4687 47.8438 56.0625 48.5625C56.1562 47.8125 56.1875 47.0313 56.1875 46.2188V33.7188C56.1875 23.75 51.1875 18.75 41.2187 18.75H21.2187C20.4062 18.75 19.625 18.7813 18.875 18.875C19.5937 10.4688 24.5625 6.25 33.7187 6.25H53.7187C63.6875 6.25 68.6875 11.25 68.6875 21.2188Z"
                    stroke="#58BF52"
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M42.1734 41.4062H42.2016"
                    stroke="#58BF52"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.2359 41.4062H31.2641"
                    stroke="#58BF52"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.2984 41.4062H20.3266"
                    stroke="#58BF52"
                    stroke-width="3.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M53.4583 28.125L43.677 35.9375C40.4582 38.5 35.177 38.5 31.9582 35.9375L22.2083 28.125"
                    stroke="#FF791A"
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.58325 51.5625H25.3333"
                    stroke="#FF791A"
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.58325 39.0625H15.9583"
                    stroke="#FF791A"
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M37.8228 15.7812C39.1665 24.4063 46.1665 31 54.854 31.875"
                    stroke="#3741B5"
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0415 68.75H66.2915"
                    stroke="#3741B5"
                    stroke-width="3.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

export default function Build() {
  return (
    <>
      <ThreeHows />
    </>
  );
}
