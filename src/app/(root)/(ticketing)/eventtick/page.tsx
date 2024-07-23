import { DM_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

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

const blogs = [
  {
    id: 1,
    title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
    text: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
    assets: "/ticket/blog_1.png",
  },
  {
    id: 2,
    title:
      "How Successfully Used Paid Marketing to Drive Incremental Ticket Sales",
    text: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
    assets: "/ticket/blog_2.png",
  },
  {
    id: 3,
    title:
      "Introducing Workspaces: Work smarter, not harder with new navigation",
    text: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
    assets: "/ticket/blog_1.png",
  },
];

const brands = [
  { assets: "spotify.png", w: 167.702, h: 50.311 },
  { assets: "google.png", w: 151.847, h: 49.058 },
  { assets: "stripe.png", w: 132.526, h: 62.95 },
  { assets: "youtube.png", w: 212, h: 131.016 },
  { assets: "microsoft.png", w: 277.636, h: 124.438 },
  { assets: "medium.png", w: 275.704, h: 83 },
  { assets: "zoom.png", w: 170, h: 38.636 },
  { assets: "uber.png", w: 125.48, h: 44.022 },
  { assets: "grab.png", w: 136, h: 52.36 },
];

const navLinks = ["Schedule", "Speakers", "Ticket", "Contact"];

const Header = () => {
  return (
    <header className="bg-transparent fixed inset-x-0 top-0 w-full z-50 p-[34px]">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/">
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
          </Link>
          <div className="flex ml-[418px] flex-grow justify-between items-center">
            {navLinks.map((navLink, i: number) => (
              <Link
                href="/"
                key={i}
                className={`${dmSans.className} text-white text-base font-normal`}
              >
                {navLink}
              </Link>
            ))}
            <Link
              href="/"
              role="button"
              className="rounded-[50px] border-solid border-[1.5px] border-white py-2.5 px-5 text-white"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section>
      <div className="h-[720px] bg-cover relative">
        <div className="absolute inset-0 bg">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center mt-[161px] mb-[83px] gap-x-[42.16px] w-full mx-auto">
              <div className="basis-[636.836px] h-[476px]">
                <figure className="relative aspect-square w-full h-full overflow-hidden">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/ticket/eventick-all.png"
                      className="block object-cover inset-0 absolute w-full h-full"
                      alt=""
                      sizes="100vw"
                      fill
                    />
                  </div>
                </figure>
              </div>
              <div className="basis-[443px] mt-[57px] self-stretch">
                <div>
                  <h1 className="text-white font-proxima-nova text-[40px] font-bold">
                    SBS MTV The Kpop Show Ticket Package
                  </h1>
                  <div className="mt-[26px]">
                    <div className="text-white font-proxima-nova text-lg leading-[23.4px] font-normal">
                      Look no further! Our SBS The Show tickets are the simplest
                      way for you to experience a live Kpop recording.
                    </div>
                  </div>
                  <div className="mt-[30px] flex gap-x-5">
                    <button
                      type="button"
                      className={`${dmSans.className} bg-[#F5167E] rounded-[50px] shadow-[0_10px_50px_0_rgba(61,55,241,0.25)] w-[182px] h-[60px] text-lg font-bold text-white`}
                    >
                      Get Ticket
                    </button>
                    <button
                      type="button"
                      className={`${dmSans.className}  rounded-[50px] shadow-[0_10px_50px_0_rgba(61,55,241,0.25)] w-[182px] h-[60px] text-lg font-bold text-white border-[1.5px] border-solid`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FilterText = ({
  fieldName,
  peerName,
  peerFocusClass,
}: {
  fieldName: string;
  peerName: string;
  peerFocusClass: string;
}) => {
  return (
    <div className="field relative flex-1">
      <label
        htmlFor={fieldName}
        className={`text-white whitespace-nowrap text-ellipsis overflow-hidden pointer-events-none absolute top-1/2 text-base font-normal ${dmSans.className} h-px w-px border-0 inset-0 p-0`}
      >
        {fieldName}
      </label>
      <input
        type="text"
        id={fieldName}
        value=""
        className={`border-b-[1px] border-solid border-[#7778B0] ${dmSans.className} bg-[#242565] text-[22px] font-bold focus:outline-none ${peerName}`}
      />
      <div
        className={`duration-150 text-white whitespace-nowrap text-ellipsis overflow-hidden pointer-events-none absolute top-[calc(50%-25px)] translate-y-1/2 text-base font-normal ${dmSans.className} ${peerFocusClass} `}
      >
        {fieldName}
      </div>
    </div>
  );
};

const AnyDateDropDown = ({ fieldName }: { fieldName: string }) => {
  return (
    <div className="field relative flex-1">
      <label
        htmlFor="anydate"
        className={`calc(100%-25px) text-[#1D275F] text-sm font-medium ${dmSans.className} whitespace-nowrap text-ellipsis overflow-hidden absolute h-px w-px border-0 -mx-px p-0`}
      >
        {fieldName}
      </label>
      <select
        className={`cursor-auto appearance-none text-white bg-[#242565] w-full text-base ${dmSans.className} border-b-[1px] border-solid border-[#7778B0]`}
        name="weekdays"
        id="anydate"
      >
        <option value="anydate">Any Date</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        className="box-content w-[10px] absolute right-0 top-1/2 -translate-x-1/2 mx-[25px]"
      >
        <path
          d="M1 1.5L6 6.5L11 1.5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className={`duration-150 text-white whitespace-nowrap text-ellipsis overflow-hidden pointer-events-none absolute top-0 -translate-y-1/2 text-base font-normal ${dmSans.className} `}
      >
        {fieldName}
      </div>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="relative -top-[50px] z-[20]">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#242565] shadow-[0_10px_50px_0_rgba(61,55,241,0.25)] pt-[30px] pb-[45px] px-12 rounded-[20px]">
          <div className="flex justify-between items-center">
            <FilterText
              fieldName="Search Event"
              peerName="peer/event"
              peerFocusClass="peer-focus/event:-top-0 peer-focus/event:-translate-y-1/2"
            />
            <FilterText
              fieldName="Place"
              peerName="peer/place"
              peerFocusClass="peer-focus/place:-top-0 peer-focus/place:-translate-y-1/2"
            />
            <AnyDateDropDown fieldName="Time" />
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcommingEvent = () => (
  <div className="col-span-1">
    <div className="card relative bg-white ">
      <div className="">
        <figure className="relative aspect-[16/9] w-full rounded-t-[20px] overflow-hidden">
          <div className="absolute inset-0 h-full w-full rounded-t-[20px]">
            <Image
              src="/ticket/event_1.png"
              className="absolute block w-full h-full object-cover rounded-t-[20px]"
              alt=""
              sizes="100vw"
              fill
            />
          </div>
        </figure>
        <div className="flex mt-5 gap-x-[12.5px]">
          <span>
            <div
              className={`${dmSans.className} text-[#3D37F1] text-[11.372px] font-bold`}
            >
              AUG
            </div>
            <div
              className={`${dmSans.className} text-[#000] font-bold text-[28.429px]`}
            >
              20
            </div>
          </span>

          <div>
            <div className="rounded-bl-[18.953px] rounded-br-[18.953px] bg-white">
              <h3
                className={`${dmSans.className} leading-6 font-bold text-black text-base`}
              >
                Wonder Girls 2010 Wonder Girls World Tour San Francisco
              </h3>
            </div>
            <div className="mt-5">
              <div
                className={`${dmSans.className} text-sm text-[6a6a6a] font-normal leading-[21px]`}
              >
                We{`’`}ll get you directly seated and inside for you to enjoy
                the show.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="no-underline absolute inset-0 bg-transparent block z-10 outline-none w-full h-full overflow-hidden"
      >
        <span className="h-px border-0 w-px -m-px overflow-hidden absolute inset-0">
          upcomming events
        </span>
      </Link>
    </div>
  </div>
);

const DropDown = ({ fieldName }: { fieldName: string }) => {
  return (
    <div>
      <div className="relative overflow-auto">
        <label
          htmlFor="weekdays"
          className={`calc(100%-25px) text-[#1D275F] text-sm font-medium ${dmSans.className} whitespace-nowrap text-ellipsis overflow-hidden absolute h-px w-px border-0 -mx-px p-0`}
        >
          {fieldName}
        </label>
        <select
          className={`py-3.5 h-[46px] bg-[#F2F4FF] rounded-[50px] cursor-auto appearance-none text-[#1D275F] ps-[25px] pe-[25px] w-[168px] text-sm ${dmSans.className}`}
          name="weekdays"
          id="weekdays"
        >
          <option value="Weekdays">{fieldName}</option>
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className="box-content w-[10px] absolute right-0 top-1/2 -translate-x-1/2 mx-[25px]"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="#1D275F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* <div
          className={`calc(100%-25px) text-[#1D275F] text-sm font-medium ${dmSans.className} whitespace-nowrap text-ellipsis overflow-hidden absolute`}
        >
          Weekdays
        </div> */}
      </div>
    </div>
  );
};

const UpcommingEvents = () => {
  return (
    <section className="px-[174px]">
      <div className="max-w-[1220px] mx-auto mt-[106px]">
        <div className="flex justify-between">
          <h2
            className={`font-proxima-nova text-[40px] font-bold text-[#242565] text-center`}
          >
            Upcoming Events
          </h2>
          <div className="flex gap-x-5">
            <DropDown fieldName="Weekdays" />
            <DropDown fieldName="EventType" />
            <DropDown fieldName="Any Category" />
          </div>
        </div>
        <div className="mt-[47px]">
          <div className="grid grid-cols-3 gap-[28px]">
            {Array.from([1, 2, 3, 4, 5, 6], (x) => x).map((blog) => (
              <UpcommingEvent key={blog} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <Link
            href="/"
            role="button"
            className={`border-[1.5px] rounded-[50px] border-solid border-[#3D37F1] shadow-[0_10px_50px_0_rgba(61,55,241,0.25)] h-[60px] w-[182px] inline-flex items-center justify-center ${dmSans.className} text-[#3D37F1] text-lg font-bold`}
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

const MakeYourOwnEvent = () => {
  return (
    <section>
      <div className="relative bg-teal-900">
        <div className="h-[303px] relative bg-rose-800">
          <div className="grid grid-cols-[554px_1fr] bg-[#EEE1FF] h-[252px] absolute bottom-0 left-0 right-0">
            <div className="col-span-[554px]">
              <figure className="relative left-0 top-0 w-full h-full aspect-[16/9]">
                <div className="absolute inset-0 f-full w-full">
                  <Image
                    className="absolute block w-full h-full object-cover"
                    src="/ticket/2-people.svg"
                    alt="Create your own events"
                    sizes="100vw"
                    fill
                  />
                </div>
              </figure>
            </div>
            <div className="bg-yellow-50 col-span-1 ml-[51px]">
              <h3
                className={`${dmSans.className} text-black text-[34px] font-bold`}
              >
                Make your own Event
              </h3>
              <div>
                <div
                  className={`${dmSans.className} text-[#272727] text-lg font-normal`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </div>
              </div>
              <button
                type="button"
                className={`${dmSans.className} h-[60px] w-[302px] rounded-[50px] bg-[#F5167E] shadow-[0px_10px_50px_0px_rgba(61,55,241,0.25)] text-white text-lg fony-bold`}
              >
                Create Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const BlogItem = ({ blog }: { blog: any }) => (
  <div className="col-span-1">
    <div className="card relative">
      <div className="">
        <figure className="relative aspect-square w-full rounded-[20px] overflow-hidden">
          <div className="absolute inset-0 h-full w-full rounded-[20px]">
            <Image
              src={blog.assets}
              className="absolute block w-full h-full object-cover rounded-[20px]"
              alt={blog.title}
              sizes="100vw"
              fill
            />
          </div>
        </figure>
        <div className="mt-5">
          <h3
            className={`${dmSans.className} leading-[30px] font-bold text-[#242565] text-[20px]`}
          >
            {blog.title}
          </h3>
        </div>
        <div className="mt-5">
          <div
            className={`${dmSans.className} text-base text-black font-[450] leading-6`}
          >
            {blog.text}
          </div>
        </div>
        <div className="mt-5">
          <div
            className={`${dmSans.className} text-sm font-[450] leading-[21px] text-[#a5a5a5]`}
          >
            12 Mar - Jhon Doe
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="no-underline absolute inset-0 bg-transparent block z-10 outline-none w-full h-full overflow-hidden"
      >
        <span className="h-px border-0 w-px -m-px overflow-hidden absolute inset-0">
          {blog.title}
        </span>
      </Link>
    </div>
  </div>
);

const Brands = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-[159px]">
        <div>
          <h2
            className={`font-proxima-nova text-[40px] font-bold text-[#242565] text-center`}
          >
            Join these brands
          </h2>
          <div className="mt-5">
            <div
              className={`${dmSans.className} leading-[27px] text-center text-[#6A6A6A] text-lg`}
            >
              We{`'`}ve had the pleasure of working with industry-defining
              brands. These are just some of them.
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          {brands.map((brand, i) => (
            <div key={i} className="w-[calc(100%/5)]">
              <figure className="relative aspect-square overflow-hidden h-full">
                <div className="absolute inset-0 h-full">
                  <Image
                    src={`/ticket/${brand.assets}`}
                    className="object-contain absolute h-full block"
                    alt="brand"
                    sizes="100vw"
                    fill
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section className="px-[174px]">
      <div className="max-w-[1220px] mx-auto ">
        <div>
          <h2
            className={`font-proxima-nova text-[40px] font-bold text-[#242565] text-center`}
          >
            Blogs
          </h2>
          <div className="mt-5">
            <div
              className={`${dmSans.className} leading-[27px] text-center text-[#6A6A6A] text-lg`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
          </div>
        </div>
        <div className="mt-[47px]">
          <div className="grid grid-cols-3 gap-x-[28px]">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <Link
            href="/"
            role="button"
            className={`border-[1.5px] rounded-[50px] border-solid border-[#3D37F1] shadow-[0_10px_50px_0_rgba(61,55,241,0.25)] h-[60px] w-[182px] inline-flex items-center justify-center ${dmSans.className} text-[#3D37F1] text-lg font-bold`}
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A075F] h-[430px] mt-10">
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
      <Header />
      <Hero />
      <Filter />
      <UpcommingEvents />
      <Brands />
      <Blog />
      <Footer />
    </div>
  );
}
