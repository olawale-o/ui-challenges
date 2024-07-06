import Link from "next/link";

const whys = [
  {
    id: 1,
    title: "Luxury facilities",
    text: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    id: 2,
    title: "Affordable Price",
    text: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
  },
  {
    id: 3,
    title: "Many Choices",
    text: "We provide many unique work space choices so that you can choose the workspace to your liking.",
  },
];
const footerLinks = [
  {
    id: 1,
    heading: "Services",
    links: ["Email Marketing", "Branding", "Campaigns"],
  },
  {
    id: 2,
    heading: "Furniture",
    links: ["Beds", "Chair", "All"],
  },
];

const WhyUs = () => {
  return (
    <div className="">
      <div className="px-20 py-[120px]">
        <div className="flex gap-x-[40px]">
          <div className="min-w-[242px] flex-grow flex place-items-center">
            <h2 className="font-gilroy-bold text-[#1e1e1e] text-[42px] font-normal">
              Why <br />
              Choosing Us
            </h2>
          </div>
          <div className="grid gap-x-7">
            {whys.map((why) => (
              <li key={why.id} className="row-start-1 list-none">
                <div className="text-[#1e1e1e] font-normal font-gilroy-bold text-2xl">
                  {why.title}
                </div>
                <div className="mt-5">
                  <div className="text-base text-start text-[#1e1e1e] leading-[29.6px] font-gilroy-regular">
                    {why.text}
                  </div>
                </div>
                <div className="mt-3.5">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-between text-sm leading-[25.9px] font-normal font-gilroyMedium text-[#F57E00]"
                  >
                    More Info{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="24"
                      viewBox="0 0 48 24"
                      fill="none"
                    >
                      <path
                        d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
                        stroke="#E58411"
                        style={{ stroke: "#E58411", strokeOpacity: 1 }}
                        strokeLinecap="square"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1440px] mx-auto h-[462px] bg-[#f7f7f7] px-[188px] pt-[118px] pb-[56px]  box-border">
        <div className="flex flex-col h-full">
          <div className="flex pb-2.5">
            <div className="me-[152px]">
              <h6 className="font-gilroy text-[#1e1e1e] text-[28px] traxking-[0.28px] font-normal">
                Panto
              </h6>
              <div className="mt-[29px] w-[293px]">
                <div className="text-[#1e1e1e] text-[15px] font-gilroyMedium font-regular leading-6 opacity-80">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </div>
              </div>
            </div>
            <ul className="grid flex-grow gap-x-[110px]">
              {footerLinks.map((footerLink: any) => (
                <li className="row-start-1" key={footerLink.id}>
                  <h6 className="text-[#ff911d] text-[17px] font-normal font-['Dm_Sans'] -tracking-[0.232px]">
                    {footerLink.heading}
                  </h6>
                  <ul className="grid">
                    {footerLink.links.map((link: any, i: number) => (
                      <li key={i} className="pt-4">
                        <div className="flex">
                          <Link
                            href="/"
                            className="inline-flex text-[#1e1e1e]  text-[15px] leading-6 font-normal font-gilroyMedium opacity-80"
                          >
                            {link}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="row-start-1">
                <h6 className="text-[#ff911d] text-[17px] font-normal font-['Dm_Sans'] -tracking-[0.232px]">
                  Follow Us
                </h6>
                <ul className="mt-5">
                  <li className="mt-4">
                    <Link href="/">
                      <div className="text-[#1e1e1e] text-[15px] font-gilroyMedium leading-6 font-normal opacity-80">
                        <div className="flex items-center gap-x-[5.16px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="20"
                            viewBox="0 0 10 20"
                            fill="none"
                          >
                            <path
                              d="M8.14971 3.29509H9.96139V0.139742C9.64884 0.0967442 8.5739 0 7.32201 0C4.70992 0 2.92057 1.643 2.92057 4.66274V7.44186H0.0380859V10.9693H2.92057V19.845H6.45462V10.9701H9.22052L9.65958 7.44269H6.4538V5.01251C6.45462 3.99297 6.72915 3.29509 8.14971 3.29509Z"
                              fill="#1E2833"
                              style={{ fill: "#1E2833", fillOpacity: 1 }}
                            />
                          </svg>
                          Facebook
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href="/" className="inline-flex">
                      <div className="text-[#1e1e1e] text-[15px] font-gilroyMedium leading-6 font-normal opacity-80">
                        <div className="flex items-center gap-x-[5.16px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                          >
                            <path
                              d="M19.5556 1.881C18.8283 2.2 18.0534 2.41144 17.2456 2.51411C18.0767 2.01789 18.711 1.23811 19.0092 0.298222C18.2343 0.760222 17.3788 1.08656 16.467 1.26867C15.7312 0.485222 14.6826 0 13.5386 0C11.319 0 9.53211 1.80156 9.53211 4.01011C9.53211 4.32789 9.559 4.63344 9.625 4.92433C6.292 4.76178 3.34278 3.16433 1.36156 0.730889C1.01567 1.331 0.812778 2.01789 0.812778 2.75733C0.812778 4.14578 1.52778 5.37656 2.59356 6.08911C1.94944 6.07689 1.31756 5.88989 0.782222 5.59533C0.782222 5.60756 0.782222 5.62344 0.782222 5.63933C0.782222 7.58756 2.17189 9.20578 3.99422 9.57856C3.66789 9.66778 3.31222 9.71056 2.94311 9.71056C2.68644 9.71056 2.42733 9.69589 2.18411 9.64211C2.70356 11.2298 4.17756 12.397 5.93022 12.4349C4.56622 13.5019 2.83433 14.1448 0.959444 14.1448C0.630667 14.1448 0.315333 14.1301 0 14.0898C1.77589 15.235 3.88056 15.8889 6.15022 15.8889C13.5276 15.8889 17.5609 9.77778 17.5609 4.48067C17.5609 4.30344 17.5548 4.13233 17.5462 3.96244C18.3419 3.39778 19.0104 2.69256 19.5556 1.881Z"
                              fill="#1E2833"
                              style={{ fill: "#1E2833", fillOpacity: 1 }}
                            />
                          </svg>
                          Twitter
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link href="/">
                      <div className="text-[#1e1e1e] font-gilroyMedium text-[15px] leading-6 font-normal opacity-80">
                        <div className="flex items-center gap-x-[5.16px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.25 0H13.75C17.2013 0 20 2.79875 20 6.25V13.75C20 17.2013 17.2013 20 13.75 20H6.25C2.79875 20 0 17.2013 0 13.75V6.25C0 2.79875 2.79875 0 6.25 0ZM13.75 18.125C16.1625 18.125 18.125 16.1625 18.125 13.75V6.25C18.125 3.8375 16.1625 1.875 13.75 1.875H6.25C3.8375 1.875 1.875 3.8375 1.875 6.25V13.75C1.875 16.1625 3.8375 18.125 6.25 18.125H13.75Z"
                              fill="#1E2833"
                              style={{ fill: "#1E2833", fillOpacity: 1 }}
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 10C5 7.23875 7.23875 5 10 5C12.7613 5 15 7.23875 15 10C15 12.7613 12.7613 15 10 15C7.23875 15 5 12.7613 5 10ZM6.875 10C6.875 11.7225 8.2775 13.125 10 13.125C11.7225 13.125 13.125 11.7225 13.125 10C13.125 8.27625 11.7225 6.875 10 6.875C8.2775 6.875 6.875 8.27625 6.875 10Z"
                              fill="#1E2833"
                              style={{ fill: "#1E2833", fillOpacity: 1 }}
                            />
                            <circle
                              cx="15.3752"
                              cy="4.62499"
                              r="0.66625"
                              fill="#1E2833"
                              style={{ fill: "#1E2833", fillOpacity: 1 }}
                            />
                          </svg>
                          Instagram
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between">
              <span>Copyright © 2021</span>
              <div className="flex gap-x-10">
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Panto() {
  return (
    <div>
      <WhyUs />
      <Footer />
    </div>
  );
}
