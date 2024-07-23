import Link from "next/link";

const sellings = [
  {
    id: 1,
    title: "Introduction to Design System in Figma",
    pricing: "$350",
    rating: 4.9,
    lesson: 16,
    week: 16,
    assets: "/education/selling_1.png",
  },
  {
    id: 2,
    title: "Introduction to Design Thinking Framework",
    pricing: "$360",
    rating: 4.7,
    lesson: 17,
    week: 16,
    assets: "/education/selling_2.png",
  },
  {
    id: 3,
    title: "Design Principle and Fundamentals for UI Designer",
    pricing: "$340",
    rating: 4.8,
    lesson: 15,
    week: 16,
    assets: "/education/selling_3.png",
  },
  {
    id: 4,
    title: "Design Principle and Fundamentals for UI Designer",
    pricing: "$380",
    rating: 5.0,
    lesson: 19,
    week: 16,
    assets: "/education/selling_4.png",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
    rating: 4.9,
    name: "Michael Wong",
    role: "UI/UX Design Student",
    asset: "/education/student_1.png",
  },
  {
    id: 2,
    text: "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
    rating: 4.8,
    name: "Avril Song",
    role: "Web Development Student",
    asset: "/education/student_2.png",
  },
  {
    id: 3,
    text: "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
    rating: 5.0,
    name: "Jeane Wood",
    role: "Data Science Student",
    asset: "/education/student_3.png",
  },
];

const articles = [
  {
    id: "1",
    text: "Lorem ipsum dolor sit amet consectetur.",
    assets: "/education/article_1.png",
    author: "Tom Kennedy",
    date: "Feb 23, 2024",
  },
  {
    id: "2",
    text: "Lorem ipsum dolor sit amet consectetur.",
    assets: "/education/article_2.png",
    author: "Tom Kennedy",
    date: "Feb 23, 2024",
  },
  {
    id: "3",
    text: "Lorem ipsum dolor sit amet consectetur.",
    assets: "/education/article_3.png",
    author: "Tom Kennedy",
    date: "Feb 23, 2024",
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Quick Links",
    links: ["About Us", "Our Class", "Blog", "Contact"],
  },
  {
    id: 2,
    title: "Resources",
    links: ["Support", "Privacy Policy", "Terms & Condition"],
  },
];

const PrefixDash = () => {
  return <div className="h-1 w-16 bg-[#A4074D]"></div>;
};

const Button = ({
  title,
  label = "",
  pVertical = "6",
  pHorizontal = "12",
  bgColor = "bg-[#A4074D]",
  textStyle = "text-white text-2xl leading-6 font-inter tracking-[0.4px]",
  borderThickness,
  borderStyle,
  borderColor,
}: {
  title: string;
  label?: string;
  pVertical?: string;
  pHorizontal?: string;
  bgColor: string;
  borderThickness?: string;
  borderStyle?: string;
  borderColor?: string;
  textStyle?: string;
}) => {
  const px = `px-${pHorizontal}`;
  const py = `py-${pVertical}`;
  const border =
    borderThickness && borderStyle && borderColor
      ? `border-${borderThickness} border-[#${borderColor}] border-${borderStyle}`
      : "border-none";
  return (
    <button
      type="button"
      className={`${px} ${bgColor} ${border} ${textStyle} ${py} rounded-2xl`}
      aria-label={label}
    >
      {title}
    </button>
  );
};

const Blog = () => {
  return (
    <section>
      <div className="p-5 xl:p-10 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <div className="flex gap-6 items-center justify-center">
              <PrefixDash />
              <div className="text-2xl text-[#1A2434] leading-[28.8px] font-normal font-inter">
                Blog
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-pjs text-4xl font-semibold text-[#1A2434] semi-bold leading-[43.2px]">
                Browse Articles
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div className="col-span-1" key={article.id}>
                  <div className="p-1 md:p-3 xl:p-6 rounded-[32px] border-solid border-[1px] border-[#EBEFF6]">
                    <div className="">
                      <figure className="relative w-full aspect-[2/1] md:aspect-square rounded-[32px]">
                        <img
                          src={article.assets}
                          alt="Picture"
                          className="absolute inset-0 w-full h-full object-cover block rounded-[32px]"
                        />
                      </figure>
                      <div className="mt-6">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_34_2310)">
                                <path
                                  d="M8.5 10.625C10.8472 10.625 12.75 8.72221 12.75 6.375C12.75 4.02779 10.8472 2.125 8.5 2.125C6.15279 2.125 4.25 4.02779 4.25 6.375C4.25 8.72221 6.15279 10.625 8.5 10.625Z"
                                  stroke="#1A2434"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.125 14.3438C3.41129 12.1211 5.74746 10.625 8.5 10.625C11.2525 10.625 13.5887 12.1211 14.875 14.3438"
                                  stroke="#1A2434"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_34_2310">
                                  <rect width="17" height="17" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>Tom Kennedy</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="17"
                              viewBox="0 0 18 17"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_34_2300)">
                                <path
                                  d="M14.4791 2.65625H3.85413C3.56072 2.65625 3.32288 2.8941 3.32288 3.1875V13.8125C3.32288 14.1059 3.56072 14.3438 3.85413 14.3438H14.4791C14.7725 14.3438 15.0104 14.1059 15.0104 13.8125V3.1875C15.0104 2.8941 14.7725 2.65625 14.4791 2.65625Z"
                                  stroke="#1A2434"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.3541 1.59375V3.71875"
                                  stroke="#1A2434"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5.97913 1.59375V3.71875"
                                  stroke="#1A2434"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.32288 5.84375H15.0104"
                                  stroke="#1A2434"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_34_2300">
                                  <rect
                                    width="17"
                                    height="17"
                                    fill="white"
                                    transform="translate(0.666626)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="text-[#1A2434] font-pjs text-base xl:text-2xl font-semibold leading-[33.6px]">
                          Lorem ipsum dolor sit amet consectetur.
                        </div>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/"
                          className="text-[#1A2434] font-inter text-base xl:text-xl font-bold leading-6 flex justify-center items-center gap-4"
                        >
                          Read more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <g opacity="0.8" clip-path="url(#clip0_24_1741)">
                              <path
                                d="M4.08337 12H20.5834"
                                stroke="#1A2434"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.8334 5.25L20.5834 12L13.8334 18.75"
                                stroke="#1A2434"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_24_1741">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.333374)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section>
      <div className="p-5 xl:p-10 bg-[#A4074D]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-col-1 xl:grid-cols-2 gap-5">
            <div className="col-span-1">
              <div className="text-white font-pjs text-4xl leading-[43.2px] font-semibold">
                Join the world largest online learning platform
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative flex items-center gap-2 py-2 pr-2 ps-10 bg-[rgba(255,255,255,0.70)] rounded-3xl">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g opacity="0.7" clip-path="url(#clip0_34_2290)">
                      <path
                        d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                        stroke="#1A2434"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 7L16 18L4 7"
                        stroke="#1A2434"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34_2290">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-transparent outline-none focus:outline-none flex-grow text-[#1A2434] text-xl leading-6 tracking-[0.4px] font-normal font-inter"
                />
                <Button bgColor="bg-[#1A2434]" title="Join Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Social = () => {
  return (
    <li className="col-span-1">
      <h4 className="font-pjs text-white text-base xl:text-[27px] xl:leading-[37.8px] font-semibold">
        Social Media
      </h4>
      <ul className="list-none flex gap-2">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M29.8725 25.5624L30.5564 21.2171H26.3435V18.3927C26.3435 17.2045 26.9317 16.0435 28.8124 16.0435H30.7547V12.3432C29.6236 12.1628 28.4807 12.0653 27.3352 12.0513C23.8678 12.0513 21.604 14.1357 21.604 17.9038V21.2171H17.7605V25.5624H21.604V36.0726H26.3435V25.5624H29.8725Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M35.9131 16.4008C35.1206 16.7422 34.2874 16.9799 33.4341 17.1081C33.833 17.0396 34.42 16.3209 34.6537 16.03C35.0086 15.5912 35.2792 15.0903 35.4515 14.5527C35.4515 14.5128 35.4914 14.4557 35.4515 14.4272C35.4314 14.4162 35.4089 14.4105 35.386 14.4105C35.3631 14.4105 35.3405 14.4162 35.3204 14.4272C34.3939 14.9294 33.4078 15.3127 32.3855 15.568C32.3499 15.5789 32.3119 15.5799 32.2758 15.5708C32.2396 15.5618 32.2066 15.5431 32.1803 15.5167C32.1008 15.4218 32.0151 15.3323 31.9239 15.2486C31.5069 14.8746 31.0338 14.5686 30.5219 14.3416C29.831 14.0579 29.0846 13.935 28.3392 13.9823C27.616 14.028 26.9099 14.2222 26.2648 14.5527C25.6296 14.9012 25.0713 15.3746 24.6235 15.9445C24.1525 16.531 23.8124 17.2118 23.6262 17.9409C23.4727 18.6344 23.4552 19.3512 23.5749 20.0513C23.5749 20.1711 23.5749 20.1882 23.4723 20.1711C19.409 19.5722 16.0751 18.1291 13.351 15.0318C13.2313 14.8949 13.1687 14.8949 13.0718 15.0318C11.8864 16.8343 12.462 19.6863 13.9437 21.0952C14.1432 21.2834 14.3483 21.4659 14.5649 21.6371C13.8855 21.5888 13.2228 21.4045 12.6159 21.0952C12.5019 21.021 12.4392 21.061 12.4335 21.1979C12.4173 21.3876 12.4173 21.5785 12.4335 21.7683C12.5524 22.6778 12.9105 23.5394 13.4713 24.265C14.032 24.9906 14.7752 25.5541 15.6249 25.898C15.832 25.9868 16.0479 26.0537 16.2689 26.0976C15.64 26.2215 14.9949 26.2408 14.3597 26.1546C14.223 26.1261 14.1717 26.2003 14.223 26.3315C15.0607 28.6131 16.8787 29.3089 18.2122 29.6968C18.3946 29.7253 18.577 29.7253 18.7821 29.771C18.7821 29.771 18.7821 29.771 18.7479 29.8052C18.3547 30.5239 16.7647 31.0087 16.0352 31.2597C14.7038 31.7384 13.2842 31.9214 11.875 31.7959C11.6527 31.7617 11.6015 31.7674 11.5445 31.7959C11.4875 31.8244 11.5445 31.8872 11.6071 31.9442C11.8921 32.1324 12.177 32.2979 12.4734 32.4576C13.3556 32.9392 14.2883 33.3218 15.2545 33.5984C20.2581 34.9787 25.8887 33.9634 29.6443 30.2273C32.5964 27.2954 33.6336 23.2513 33.6336 19.2014C33.6336 19.0474 33.8216 18.9562 33.9299 18.8763C34.6768 18.2939 35.3352 17.606 35.8846 16.8343C35.9798 16.7192 36.0286 16.5728 36.0214 16.4236C36.0214 16.338 36.0214 16.3551 35.9131 16.4008Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M20.0054 24.0614C20.0054 21.8504 21.7968 20.0576 24.0072 20.0576C26.2176 20.0576 28.0099 21.8504 28.0099 24.0614C28.0099 26.2725 26.2176 28.0653 24.0072 28.0653C21.7968 28.0653 20.0054 26.2725 20.0054 24.0614ZM17.8416 24.0614C17.8416 27.4677 20.602 30.2288 24.0072 30.2288C27.4124 30.2288 30.1728 27.4677 30.1728 24.0614C30.1728 20.6552 27.4124 17.8941 24.0072 17.8941C20.602 17.8941 17.8416 20.6552 17.8416 24.0614ZM28.976 17.6496C28.9759 17.9346 29.0603 18.2133 29.2185 18.4504C29.3767 18.6875 29.6017 18.8723 29.8649 18.9815C30.1281 19.0907 30.4178 19.1194 30.6974 19.0639C30.9769 19.0084 31.2337 18.8712 31.4353 18.6697C31.6369 18.4682 31.7742 18.2115 31.8299 17.9319C31.8856 17.6523 31.8572 17.3625 31.7482 17.0991C31.6393 16.8357 31.4547 16.6106 31.2178 16.4521C30.9809 16.2936 30.7024 16.209 30.4174 16.2089C30.0355 16.2091 29.6686 16.3609 29.3984 16.631C29.1282 16.9011 28.9763 17.2675 28.976 17.6496ZM19.1563 33.8378C17.9856 33.7845 17.3494 33.5895 16.9265 33.4247C16.3659 33.2064 15.9659 32.9464 15.5454 32.5263C15.1248 32.1062 14.8645 31.7065 14.6473 31.1457C14.4824 30.7229 14.2874 30.0863 14.2342 28.9153C14.176 27.6493 14.1644 27.269 14.1644 24.0615C14.1644 20.8541 14.177 20.4749 14.2342 19.2078C14.2875 18.0368 14.484 17.4014 14.6473 16.9774C14.8655 16.4166 15.1254 16.0165 15.5454 15.5958C15.9654 15.1752 16.365 14.9148 16.9265 14.6975C17.3492 14.5326 17.9856 14.3375 19.1563 14.2843C20.4219 14.2261 20.8021 14.2144 24.0072 14.2144C27.2123 14.2144 27.5928 14.227 28.8596 14.2843C30.0302 14.3376 30.6654 14.5341 31.0893 14.6975C31.6499 14.9148 32.0499 15.1758 32.4705 15.5958C32.891 16.0159 33.1503 16.4166 33.3686 16.9774C33.5334 17.4001 33.7284 18.0368 33.7816 19.2078C33.8399 20.4749 33.8515 20.8541 33.8515 24.0615C33.8515 27.269 33.8399 27.6482 33.7816 28.9153C33.7283 30.0863 33.5324 30.7228 33.3686 31.1457C33.1503 31.7065 32.8904 32.1066 32.4705 32.5263C32.0505 32.946 31.6499 33.2064 31.0893 33.4247C30.6667 33.5896 30.0302 33.7846 28.8596 33.8378C27.5939 33.8961 27.2137 33.9077 24.0072 33.9077C20.8007 33.9077 20.4216 33.8961 19.1563 33.8378ZM19.0569 12.1235C17.7786 12.1817 16.9052 12.3845 16.1424 12.6814C15.3524 12.988 14.6837 13.3993 14.0154 14.0667C13.3471 14.7342 12.9369 15.4042 12.6304 16.1944C12.3336 16.9579 12.1309 17.8311 12.0727 19.1097C12.0135 20.3903 12 20.7997 12 24.0614C12 27.3232 12.0135 27.7326 12.0727 29.0132C12.1309 30.2919 12.3336 31.165 12.6304 31.9285C12.9369 32.7183 13.3472 33.389 14.0154 34.0561C14.6836 34.7233 15.3524 35.134 16.1424 35.4415C16.9066 35.7384 17.7786 35.9411 19.0569 35.9994C20.3378 36.0576 20.7464 36.0721 24.0072 36.0721C27.268 36.0721 27.6773 36.0586 28.9575 35.9994C30.2359 35.9411 31.1087 35.7384 31.872 35.4415C32.6615 35.134 33.3307 34.7236 33.999 34.0561C34.6673 33.3887 35.0766 32.7183 35.384 31.9285C35.6808 31.165 35.8844 30.2918 35.9417 29.0132C35.9999 27.7316 36.0134 27.3232 36.0134 24.0614C36.0134 20.7997 35.9999 20.3903 35.9417 19.1097C35.8835 17.831 35.6808 16.9574 35.384 16.1944C35.0766 15.4046 34.6662 14.7352 33.999 14.0667C33.3318 13.3983 32.6615 12.988 31.873 12.6814C31.1087 12.3845 30.2358 12.1808 28.9585 12.1235C27.6782 12.0653 27.2689 12.0508 24.0082 12.0508C20.7474 12.0508 20.3378 12.0643 19.0569 12.1235Z"
              fill="white"
            />
            <path
              d="M20.0054 24.0614C20.0054 21.8504 21.7968 20.0576 24.0072 20.0576C26.2176 20.0576 28.0099 21.8504 28.0099 24.0614C28.0099 26.2725 26.2176 28.0653 24.0072 28.0653C21.7968 28.0653 20.0054 26.2725 20.0054 24.0614ZM17.8416 24.0614C17.8416 27.4677 20.602 30.2288 24.0072 30.2288C27.4124 30.2288 30.1728 27.4677 30.1728 24.0614C30.1728 20.6552 27.4124 17.8941 24.0072 17.8941C20.602 17.8941 17.8416 20.6552 17.8416 24.0614ZM28.976 17.6496C28.9759 17.9346 29.0603 18.2133 29.2185 18.4504C29.3767 18.6875 29.6017 18.8723 29.8649 18.9815C30.1281 19.0907 30.4178 19.1194 30.6974 19.0639C30.9769 19.0084 31.2337 18.8712 31.4353 18.6697C31.6369 18.4682 31.7742 18.2115 31.8299 17.9319C31.8856 17.6523 31.8572 17.3625 31.7482 17.0991C31.6393 16.8357 31.4547 16.6106 31.2178 16.4521C30.9809 16.2936 30.7024 16.209 30.4174 16.2089C30.0355 16.2091 29.6686 16.3609 29.3984 16.631C29.1282 16.9011 28.9763 17.2675 28.976 17.6496ZM19.1563 33.8378C17.9856 33.7845 17.3494 33.5895 16.9265 33.4247C16.3659 33.2064 15.9659 32.9464 15.5454 32.5263C15.1248 32.1062 14.8645 31.7065 14.6473 31.1457C14.4824 30.7229 14.2874 30.0863 14.2342 28.9153C14.176 27.6493 14.1644 27.269 14.1644 24.0615C14.1644 20.8541 14.177 20.4749 14.2342 19.2078C14.2875 18.0368 14.484 17.4014 14.6473 16.9774C14.8655 16.4166 15.1254 16.0165 15.5454 15.5958C15.9654 15.1752 16.365 14.9148 16.9265 14.6975C17.3492 14.5326 17.9856 14.3375 19.1563 14.2843C20.4219 14.2261 20.8021 14.2144 24.0072 14.2144C27.2123 14.2144 27.5928 14.227 28.8596 14.2843C30.0302 14.3376 30.6654 14.5341 31.0893 14.6975C31.6499 14.9148 32.0499 15.1758 32.4705 15.5958C32.891 16.0159 33.1503 16.4166 33.3686 16.9774C33.5334 17.4001 33.7284 18.0368 33.7816 19.2078C33.8399 20.4749 33.8515 20.8541 33.8515 24.0615C33.8515 27.269 33.8399 27.6482 33.7816 28.9153C33.7283 30.0863 33.5324 30.7228 33.3686 31.1457C33.1503 31.7065 32.8904 32.1066 32.4705 32.5263C32.0505 32.946 31.6499 33.2064 31.0893 33.4247C30.6667 33.5896 30.0302 33.7846 28.8596 33.8378C27.5939 33.8961 27.2137 33.9077 24.0072 33.9077C20.8007 33.9077 20.4216 33.8961 19.1563 33.8378ZM19.0569 12.1235C17.7786 12.1817 16.9052 12.3845 16.1424 12.6814C15.3524 12.988 14.6837 13.3993 14.0154 14.0667C13.3471 14.7342 12.9369 15.4042 12.6304 16.1944C12.3336 16.9579 12.1309 17.8311 12.0727 19.1097C12.0135 20.3903 12 20.7997 12 24.0614C12 27.3232 12.0135 27.7326 12.0727 29.0132C12.1309 30.2919 12.3336 31.165 12.6304 31.9285C12.9369 32.7183 13.3472 33.389 14.0154 34.0561C14.6836 34.7233 15.3524 35.134 16.1424 35.4415C16.9066 35.7384 17.7786 35.9411 19.0569 35.9994C20.3378 36.0576 20.7464 36.0721 24.0072 36.0721C27.268 36.0721 27.6773 36.0586 28.9575 35.9994C30.2359 35.9411 31.1087 35.7384 31.872 35.4415C32.6615 35.134 33.3307 34.7236 33.999 34.0561C34.6673 33.3887 35.0766 32.7183 35.384 31.9285C35.6808 31.165 35.8844 30.2918 35.9417 29.0132C35.9999 27.7316 36.0134 27.3232 36.0134 24.0614C36.0134 20.7997 35.9999 20.3903 35.9417 19.1097C35.8835 17.831 35.6808 16.9574 35.384 16.1944C35.0766 15.4046 34.6662 14.7352 33.999 14.0667C33.3318 13.3983 32.6615 12.988 31.873 12.6814C31.1087 12.3845 30.2358 12.1808 28.9585 12.1235C27.6782 12.0653 27.2689 12.0508 24.0082 12.0508C20.7474 12.0508 20.3378 12.0643 19.0569 12.1235Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M18.4787 33.7264V20.7602H14.1728V33.7264H18.4787ZM16.3266 18.9902C17.8279 18.9902 18.7625 17.9945 18.7625 16.7503C18.7344 15.4776 17.8279 14.5098 16.3552 14.5098C14.8815 14.5098 13.9189 15.4776 13.9189 16.7501C13.9189 17.9944 14.8532 18.9901 16.2984 18.9901L16.3266 18.9902ZM20.8621 33.7264H25.1677V26.4863C25.1677 26.0992 25.1958 25.7112 25.3095 25.4348C25.6207 24.6602 26.3291 23.8584 27.5189 23.8584C29.0766 23.8584 29.7001 25.0473 29.7001 26.7906V33.7264H34.0056V26.292C34.0056 22.3095 31.8816 20.4562 29.0487 20.4562C26.7261 20.4562 25.7061 21.7555 25.1393 22.6405H25.168V20.7606H20.8623C20.9185 21.977 20.8621 33.7264 20.8621 33.7264Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M37.3504 17.398C37.037 16.2198 36.1099 15.2903 34.9304 14.9718C32.7976 14.4001 24.2405 14.4001 24.2405 14.4001C24.2405 14.4001 15.6878 14.4001 13.5507 14.9718C12.3756 15.286 11.4485 16.2154 11.1307 17.398C10.5605 19.5361 10.5605 24.0001 10.5605 24.0001C10.5605 24.0001 10.5605 28.4641 11.1307 30.6023C11.4441 31.7805 12.3712 32.71 13.5507 33.0285C15.6878 33.6001 24.2405 33.6001 24.2405 33.6001C24.2405 33.6001 32.7976 33.6001 34.9304 33.0285C36.1055 32.7143 37.0326 31.7849 37.3504 30.6023C37.9205 28.4641 37.9205 24.0001 37.9205 24.0001C37.9205 24.0001 37.9205 19.5361 37.3504 17.398Z"
              fill="white"
            />
            <path
              d="M21.5071 28.1152L28.6147 24.0002L21.5071 19.8853V28.1152Z"
              fill="#1A2434"
            />
          </svg>
        </div>
      </ul>
    </li>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="p-5 xl:p-10 bg-[#1A2434]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col xl:flex-row justify-between">
            <div className="basis-auto xl:basis-[345px]">
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="38"
                    viewBox="0 0 42 38"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_32_1979)">
                      <path
                        d="M5.74656 28.7259C7.28673 29.8002 9.78384 29.8002 11.324 28.7259C12.8641 27.6516 12.8641 25.9098 11.324 24.8355C9.78384 23.7612 7.28673 23.7612 5.74656 24.8355C4.20639 25.9098 4.20639 27.6516 5.74656 28.7259Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91303 30.0984 8.3016C27.7881 6.69016 24.0425 6.69016 21.7322 8.3016C19.422 9.91303 19.422 12.5256 21.7322 14.1371Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M13.2464 21.4314C15.1716 22.7742 18.293 22.7742 20.2182 21.4314C22.1434 20.0885 22.1434 17.9113 20.2182 16.5684C18.293 15.2256 15.1716 15.2256 13.2464 16.5684C11.3212 17.9113 11.3212 20.0885 13.2464 21.4314Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M0.866345 20.4588C2.02147 21.2645 3.8943 21.2645 5.04943 20.4588C6.20455 19.6531 6.20455 18.3468 5.04943 17.541C3.8943 16.7353 2.02147 16.7353 0.866345 17.541C-0.288782 18.3468 -0.288781 19.6531 0.866345 20.4588Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335716 15.1716 -0.335717 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M5.74655 13.1646C7.28672 14.2389 9.78383 14.2389 11.324 13.1646C12.8641 12.0903 12.8641 10.3485 11.324 9.27422C9.78383 8.19993 7.28672 8.19993 5.74655 9.27422C4.20638 10.3485 4.20639 12.0903 5.74655 13.1646Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M31.9011 21.9179C34.2114 23.5293 37.9571 23.5293 40.2673 21.9179C42.5776 20.3065 42.5776 17.6938 40.2673 16.0824C37.9571 14.4709 34.2114 14.4709 31.9011 16.0824C29.5909 17.6938 29.5909 20.3065 31.9011 21.9179Z"
                        fill="#A4074D"
                      />
                      <path
                        d="M21.7322 29.6983C24.0425 31.3098 27.7881 31.3098 30.0984 29.6983C32.4086 28.0869 32.4086 25.4743 30.0984 23.8628C27.7881 22.2514 24.0425 22.2514 21.7322 23.8628C19.422 25.4743 19.422 28.0869 21.7322 29.6983Z"
                        fill="#A4074D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_32_1979">
                        <rect width="42" height="38" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-white font-pjs text-[27px] leading-[37.8px] font-semibold">
                    Digilearn
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-white font-inter text-sm md:text-base xl:text-xl font-normal xl:leading-9 opacity-70">
                    Unlock Digital Mastery Effortlessly! Explore and enhance
                    your skills with our user-friendly platform.
                  </div>
                </div>
              </div>
            </div>
            <ul className="mt-5 xl:mt-0 grid grid-cols-1 gap-y-5 md:grid-cols-3">
              {footerLinks.map((footerLink) => (
                <li className="col-span-1 bg-yellow" key={footerLink.id}>
                  <h4 className="font-pjs text-white text-base xl:text-[27px] xl:leading-[37.8px] font-semibold">
                    {footerLink.title}
                  </h4>
                  <ul className="mt-4">
                    {footerLink.links.map((link, i) => (
                      <li key={i} className="mt-2">
                        <div>
                          <Link
                            href="/"
                            className="no-underline font-inter opacity-70 text-white text-sm md:text-base xl:text-xl xl:leading-9"
                          >
                            {link}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <Social />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Digilearn() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Blog />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
