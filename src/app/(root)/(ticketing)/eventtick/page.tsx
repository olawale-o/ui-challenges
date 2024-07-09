import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const FooterLinks = [
  {
    id: 1,
    heading: "Plan Events",
    links: [
      "Create and Set Up",
      "Sell Tickets",
      "Online RSVP",
      "Online Events",
    ],
  },
  {
    id: 2,
    heading: "Eventick",
    links: [
      "About Us",
      "Press",
      "Contact Us",
      "Help Center",
      "How it Works",
      "Privacy",
      "Terms",
    ],
  },
];

const FooterLink = ({ footerLink }: { footerLink: any }) => {
  return (
    <li className="first:mr-[84px]">
      <h4 className={`${dmSans.className} text-white text-lg font-bold`}>
        {footerLink.heading}
      </h4>
      <ul className="mt-6">
        {footerLink.links.map((link: any, i: number) => (
          <li key={i} className={`${dmSans.className}`}>
            <Link
              href="/"
              className="no-underline text-sm text-[#f3f3f3] leading-7 font-normal"
            >
              <div>{link}</div>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
const FooterSubscribe = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center ps-[25.84px] rounded-[45.595px] relative bg-white border-2 border-[#f1f1f1] border-solid w-[364px] h-[60.793px]">
        <input
          type="text"
          placeholder="Enter your email address"
          className={`${dmSans.className} w-[144.384px] text-[#959595] outline-none border-0 text-[12.159px]`}
        />
        <button
          type="button"
          className={`${dmSans.className} absolute flex items-center right-0 top-[7.6px] bottom-[6.8px] bg-[#F5167E] rounded-[50px] py-[15.198px] px-[30.397px] text-white text-[12.159px] tracking-[0.7px] font-normal`}
        >
          Subscibe Now
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A075F] h-[430px]">
      <div className="max-w-[1220px] mx-auto pt-[56px] h-full">
        <div className="flex flex-col h-full">
          <div className="flex">
            <div className="me-auto w-[333px]">
              <div className="flex gap-x-[8.31px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M24.6697 7.11704C24.6697 7.13139 24.6697 7.13139 24.6697 7.14574C24.311 7.13139 23.9522 7.11704 23.5648 7.11704H12.5161L14.0514 5.59605C15.4576 4.17551 17.0073 2.86975 18.801 2.86975C20.6089 2.86975 22.1586 4.17551 23.5648 5.59605L24.3683 6.39959C24.5692 6.58613 24.6697 6.84441 24.6697 7.11704Z"
                    fill="white"
                  />
                  <path
                    d="M29.9045 18.8965C30.4641 18.8965 30.9089 18.4373 30.9089 17.8634V16.6007C30.9089 10.9616 29.1871 9.25403 23.5623 9.25403H14.5224H10.8779C5.25306 9.25403 3.53119 10.9759 3.53119 16.6007V17.2177C3.53119 17.7916 3.97601 18.2364 4.53562 18.2364C5.74093 18.2364 6.70231 19.2122 6.70231 20.4031C6.70231 21.5941 5.74093 22.5842 4.53562 22.5842C3.97601 22.5842 3.53119 23.029 3.53119 23.603V24.22C3.53119 29.8591 5.25306 31.5666 10.8779 31.5666H14.5081H23.5479C29.1727 31.5666 30.8946 29.8448 30.8946 24.22C30.8946 23.6604 30.4498 23.2012 29.8902 23.2012C28.6849 23.2012 27.7235 22.2398 27.7235 21.0488C27.7378 19.8579 28.6992 18.8965 29.9045 18.8965ZM15.5269 27.0611C15.5269 27.6207 15.0677 28.0798 14.5081 28.0798C13.9485 28.0798 13.4894 27.6207 13.4894 27.0611V23.2155C13.4894 22.6559 13.9485 22.1968 14.5081 22.1968C15.0677 22.1968 15.5269 22.6559 15.5269 23.2155V27.0611ZM15.5269 17.6051C15.5269 18.1647 15.0677 18.6239 14.5081 18.6239C13.9485 18.6239 13.4894 18.1647 13.4894 17.6051V13.7596C13.4894 13.2 13.9485 12.7408 14.5081 12.7408C15.0677 12.7408 15.5269 13.2 15.5269 13.7596V17.6051Z"
                    fill="white"
                  />
                </svg>
                <div className="text-[28.5px]">
                  <span className="font-proxima-nova-extrabold font-extrabold text-white">
                    Event
                  </span>
                  <span className="font-proxima-nova text-white font-normal">
                    ick
                  </span>
                </div>
              </div>
              <div className="mt-[17.44px] w-[333px]">
                <p className="text-[#f3f3f3] text-sm leading-[22.4px]">
                  Eventick is a global self-service ticketing platform for live
                  experiences that allows anyone to create, share, find and
                  attend events that fuel their passions and enrich their lives.
                </p>
              </div>
              <div className="flex gap-x-4 mt-[17px]">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_167)">
                      <path
                        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z"
                        fill="#3B5998"
                      />
                      <path
                        d="M22.5252 18.7046H19.3133V30.4715H14.447V18.7046H12.1326V14.5693H14.447V11.8933C14.447 9.97961 15.3561 6.98303 19.3566 6.98303L22.9613 6.99811V11.0122H20.3459C19.9169 11.0122 19.3136 11.2265 19.3136 12.1394V14.5731H22.9503L22.5252 18.7046Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_167">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_171)">
                      <path
                        d="M18.0002 35.9997C27.9412 35.9997 36 27.9409 36 17.9998C36 8.0588 27.9412 0 18.0002 0C8.05917 0 0.000366211 8.0588 0.000366211 17.9998C0.000366211 27.9409 8.05917 35.9997 18.0002 35.9997Z"
                        fill="#55ACEE"
                      />
                      <path
                        d="M29.0257 12.9359C28.2543 13.278 27.4246 13.5093 26.5544 13.6126C27.4428 13.0803 28.1247 12.238 28.4465 11.2328C27.6151 11.7259 26.6939 12.0837 25.7143 12.2766C24.9295 11.4407 23.8113 10.9183 22.5731 10.9183C20.1974 10.9183 18.2706 12.8451 18.2706 15.2208C18.2706 15.558 18.3088 15.8863 18.3826 16.2014C14.8069 16.022 11.6364 14.3092 9.51424 11.7054C9.14396 12.3407 8.93155 13.0803 8.93155 13.8687C8.93155 15.361 9.69167 16.6785 10.8455 17.4498C10.1406 17.4277 9.4767 17.2342 8.89689 16.9111C8.89657 16.9294 8.89657 16.9477 8.89657 16.9657C8.89657 19.0503 10.3803 20.7891 12.3481 21.1841C11.9875 21.2829 11.6066 21.3352 11.2148 21.3352C10.9369 21.3352 10.6677 21.3086 10.4053 21.2585C10.9527 22.9674 12.5413 24.2114 14.4244 24.2464C12.9517 25.4005 11.0967 26.0882 9.08043 26.0882C8.7339 26.0882 8.39057 26.0679 8.05463 26.0278C9.95767 27.249 12.2198 27.961 14.6493 27.961C22.5631 27.961 26.891 21.4051 26.891 15.7191C26.891 15.5327 26.8868 15.3469 26.8784 15.1627C27.7198 14.5563 28.4491 13.7987 29.0257 12.9359Z"
                        fill="#F1F2F2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_171">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_176)">
                      <path
                        d="M18 35.9998C27.9411 35.9998 36 27.9409 36 17.9998C36 8.05863 27.9411 -0.000244141 18 -0.000244141C8.05888 -0.000244141 0 8.05863 0 17.9998C0 27.9409 8.05888 35.9998 18 35.9998Z"
                        fill="#007AB9"
                      />
                      <path
                        d="M28.7548 19.4483V26.8693H24.4523V19.9456C24.4523 18.2071 23.8311 17.0199 22.2733 17.0199C21.0845 17.0199 20.3783 17.8192 20.0664 18.5931C19.9531 18.8697 19.9239 19.2538 19.9239 19.6417V26.8689H15.6211C15.6211 26.8689 15.6789 15.1425 15.6211 13.9287H19.9243V15.7625C19.9156 15.7769 19.9034 15.791 19.8957 15.8048H19.9243V15.7625C20.496 14.8826 21.5158 13.6248 23.8019 13.6248C26.6326 13.6248 28.7548 15.4743 28.7548 19.4483ZM11.12 7.69104C9.64816 7.69104 8.68524 8.65717 8.68524 9.92652C8.68524 11.1689 9.62025 12.163 11.0635 12.163H11.0914C12.5921 12.163 13.5252 11.1689 13.5252 9.92652C13.4966 8.65717 12.5921 7.69104 11.12 7.69104ZM8.94097 26.8693H13.2422V13.9287H8.94097V26.8693Z"
                        fill="#F1F2F2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_176">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            <ul className="flex-grow gap-x-[84px] justify-center flex">
              {FooterLinks.map((footerLink, i) => (
                <FooterLink key={i} footerLink={footerLink} />
              ))}
            </ul>
            <ul className="w-[362px]">
              <li className="ms-auto">
                <h4
                  className={`${dmSans.className} text-white text-lg font-bold`}
                >
                  Stay in The Loop
                </h4>
                <div className="mt-6 ">
                  <p
                    className={`${dmSans.className} text-[#f3f3f3] text-sm leading-[22.4px] font-normal`}
                  >
                    Join our mailing list to stay in the loop with our newest
                    for Event and concert
                  </p>
                </div>
                <FooterSubscribe />
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="bg-[#4C4D8B] h-px" />
            <div className="mt-[15px] pb-[21px]">
              <div className="text-center text-sm leading-[22.4px] text-[#fefefe]">
                Copyright © 2022 Avi Yansah
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function EventTick() {
  return (
    <div>
      <Footer />
    </div>
  );
}
