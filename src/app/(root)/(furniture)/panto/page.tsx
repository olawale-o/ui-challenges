import Link from "next/link";
import Image from "next/image";

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

const reviews = [
  {
    id: 1,
    name: "Bang Upin",
    title: "Pedagang Asongan",
    desc: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
    image: "/furniture/review_1.png",
    avatar: "/furniture/avatar_1.png",
  },
  {
    id: 2,
    name: "Ibuk Sukijan",
    title: "Ibu Rumah Tangga",
    desc: "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
    image: "/furniture/review_2.png",
    avatar: "/furniture/avatar_2.png",
  },
  {
    id: 3,
    name: "Mpok Ina",
    title: "Karyawan Swasta",
    desc: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
    image: "/furniture/review_3.png",
    avatar: "/furniture/avatar_3.png",
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
    <div className="max-w-[1440px] mx-auto">
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

const ExperimentRentals = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="pb-[261px] pt-[240px]">
        <div className="grid grid-cols-2 gap-x-[130px]">
          <div className="col-span-1 relative">
            <figure className="absolute -top-[66px] rounded-[20px] -left-[65px] h-full w-full aspect-[4/3]">
              <div className="absolute inset-0 h-full w-full rounded-[20px]">
                <Image
                  className="absolute block w-full h-full inset-0 object-cover rounded-[20px]"
                  alt="Panto Sofa"
                  sizes="100vw"
                  src={"/furniture/white-bg-one.png"}
                  fill
                />
              </div>
            </figure>

            <figure className="relative -left-[27px] w-full aspect-[4/3] rounded-[20px]">
              <figure className="absolute bottom-[72px] top-[72px] rounded-[20px] -right-[61px] w-full aspect-[16/9]">
                <div className="absolute inset-0 h-full w-full rounded-[20px]">
                  <Image
                    className="absolute bolock w-full h-full inset-0 object-cover rounded-[20px]"
                    alt="Panto Sofa"
                    sizes="100vw"
                    src={"/furniture/white-bg-one.png"}
                    fill
                  />
                </div>
              </figure>
              <figure className="absolute top-[52px] h-[423px] rounded-[49px] left-[27px] right-[27px] aspect-[4/3]">
                <div className="absolute inset-0 h-full w-full rounded-[49px]">
                  <Image
                    className="absolute w-full h-full inset-0 object-cover rounded-[49px]"
                    alt="Panto Sofa"
                    sizes="100vw"
                    src={"/furniture/blur-bg.png"}
                    fill
                  />
                </div>
              </figure>

              <div className="absolute inset-0 h-full w-full rounded-[20px]">
                <Image
                  className="absolute w-full h-full inset-0 object-cover rounded-[20px]"
                  alt="Panto Sofa"
                  sizes="100vw"
                  src={"/furniture/panto-sofa.png"}
                  fill
                />
              </div>
            </figure>
          </div>
          <div className="col-span-1 pe-[141px]">
            <div>
              <div className="text-[#F47E00] text-lg uppercase tracking-[3.1px] font-gilroy-bold font-normal">
                experiences
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-[#1e1e1e] text-[42px] font-normal font-gilroy-bold uppercase">
                we provide you the best experience
              </h3>
            </div>
            <div className="mt-5">
              <div className="text-lg text-[#1e1e1e] font-gilroy-regular leading-[33.33px]">
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center text-[#F57E00] font-gilroy-regular text-sm leading-[25.9px] font-normal"
              >
                More Info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="24"
                  viewBox="0 0 48 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.4005H42M42 12.4005C42 12.4005 37.5119 9.44891 36.6 7.00049M42 12.4005C42 12.4005 38.0324 15.1739 36.6 17.8005"
                    stroke="#E58411"
                    style={{ stroke: "#E58411", strokeOpacity: 1 }}
                    strokeLinecap="square"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[240px]">
          <div className="grid grid-cols-[556px_1fr] gap-x-[94px]">
            <div className="col-span-1 place-self-center ps-[80px]">
              <div>
                <div className="text-[#F47E00] text-lg uppercase tracking-[3.1px] font-gilroy-bold font-normal">
                  Materials
                </div>
              </div>
              <div className="mt-5 max-w-[413px]">
                <h3 className="text-[#1e1e1e] text-[42px] font-normal leading-1 font-gilroy-bold uppercase">
                  Very serious materials for making furniture
                </h3>
              </div>
              <div className="mt-5">
                <div className="text-lg text-[#1e1e1e] font-gilroy-regular leading-[33.33px] opacity-80">
                  Because panto was very serious about designing furniture for
                  our environment, using a very expensive and famous capital but
                  at a relatively low price
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-[#F57E00] font-gilroy-regular text-sm leading-[25.9px] font-normal"
                >
                  More Info
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 12.4005H42M42 12.4005C42 12.4005 37.5119 9.44891 36.6 7.00049M42 12.4005C42 12.4005 38.0324 15.1739 36.6 17.8005"
                      stroke="#E58411"
                      style={{ stroke: "#E58411", strokeOpacity: 1 }}
                      strokeLinecap="square"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-span-1 relative">
              <div className="grid grid-cols-[223px_1fr] gap-x-[42px] ">
                <div className="col-span-1 gap-y-[47px] grid w-full row-start-1 row-end-4 col-start-1 col-end-2">
                  <figure className="relative aspect-square rounded-[20px]">
                    <div className="absolute inset-0 h-full rounded-[20px]">
                      <Image
                        className="absolute block w-full h-full inset-0 object-cover rounded-[20px]"
                        alt="Panto Sofa"
                        sizes="100vw"
                        src={"/furniture/chairs.png"}
                        fill
                      />
                    </div>
                    {/* <figure className="absolute left-[23px] top-[67px] aspect-square right-[24px] bottom-0 -z-10">
                    <div className="absolute inset-0 h-full w-full overflow-hidden">
                      <Image
                        className="absolute w-full h-full inset-0 object-cover"
                        alt="Panto Sofa"
                        sizes="100vw"
                        src={"/furniture/chairs-blur.png"}
                        fill
                      />
                    </div>
                  </figure> */}
                  </figure>

                  <figure className="overflow-hidden relative aspect-[3/4] rounded-[20px]">
                    <div className="absolute inset-0 h-full w-full rounded-[20px]">
                      <Image
                        className="absolute  block w-full h-full inset-0 object-cover rounded-[20px]"
                        alt="Panto Sofa"
                        sizes="100vw"
                        src={"/furniture/pillow-sofa.png"}
                        fill
                      />
                    </div>
                  </figure>
                </div>

                <div className="relative col-span-1fr row-start-2 row-end-4 col-start-2 col-end-3 grid bg-yellow-900">
                  <figure className="overflow-hidden relative w-full aspect-square row-start-2 row-end-3">
                    <div className="absolute inset-0 h-full w-full">
                      <Image
                        className="absolute block w-full h-full inset-0 object-cover"
                        alt="Panto Sofa"
                        sizes="100vw"
                        src={"/furniture/dinings.png"}
                        fill
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientReviews = () => {
  return (
    <div>
      <div className="pb-[241.58px]">
        <div>
          <div className="text-center text-[#F47E00] text-lg tracking-[3.15px] font-normal font-gilroy-bold">
            Testimonials
          </div>
          <div className="mt-5">
            <h3 className="text-center text-[#e1e1e] text-[42px] font-gilroy-bold font-normal">
              Our Client Reviews
            </h3>
          </div>
        </div>
        <div className="mt-[60px] mx-[80px]">
          <div className="carousel relative">
            <div className="grid grid-cols-12 gap-x-[38px]">
              {reviews.map((review) => (
                <div key={review.id} className="col-span-4">
                  <div className="grid grid-cols-4">
                    <div className="col-span-4">
                      <figure className="relative w-full h-full aspect-[3/4] rounded-[18.118px]">
                        <div className="absolute inset-0 h-full w-full rounded-[18.118px]">
                          <Image
                            src={`${review.image}`}
                            className="absolute w-full h-full inset-0 object-cover rounded-[18.118px]"
                            alt="Review"
                            fill
                          />
                        </div>
                        <div className="absolute z-10 bottom-0 left-0 right-0 mx-2 mb-2 bg-white h-[226px] rounded-[18.118px] after:content-[''] after:w-[66px] after:h-[66px] after:rounded-t-full after:bg-white after:absolute after:top-0 after:left-1/2 after:z-20 after:-translate-x-1/2 after:-translate-y-1/2 after:px-8">
                          <div className="absolute w-[50px] h-[50px] rounded-full left-1/2 -translate-x-1/2 z-30 top-0 -translate-y-1/2">
                            <figure className="relative w-full h-full">
                              <div className="absolute inset-0 w-full h-full">
                                <Image
                                  className="h-full block w-full absolute inset-0"
                                  src={`${review.avatar}`}
                                  alt="avatar"
                                  fill
                                  sizes="100vw"
                                />
                              </div>
                            </figure>
                          </div>
                          <div className="absolute left-0 bottom-0 ps-[42px] pe-[40px] flex flex-col items-center justify-center h-full mt-[38px]">
                            <div className="text-lg text-[#1e1e1e] font-normal font-gilroy-bold">
                              {review.name}
                            </div>
                            <div className="mt-1.5 font-gilroy-regular text-xs font-normal">
                              {review.title}
                            </div>
                            <div className="mt-[22px] text-center text-sm font-gilroy-regular opacity-80">
                              {review.desc}
                            </div>
                            <div className="mt-[22px]">
                              <div className="flex gap-x-2">
                                {Array.from([1, 2, 3, 5], (x) => x).map((i) => (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    key={i}
                                  >
                                    <path
                                      d="M10.452 8.77196C10.3009 8.91837 10.2315 9.13012 10.2659 9.33779L10.7845 12.2078C10.8283 12.451 10.7256 12.6972 10.522 12.8378C10.3225 12.9836 10.0571 13.0011 9.83953 12.8845L7.25594 11.537C7.16611 11.4891 7.06636 11.4635 6.96428 11.4605H6.80619C6.75136 11.4687 6.69769 11.4862 6.64869 11.513L4.06453 12.867C3.93678 12.9311 3.79211 12.9539 3.65036 12.9311C3.30503 12.8658 3.07461 12.5368 3.13119 12.1897L3.65036 9.31971C3.68478 9.11029 3.61536 8.89737 3.46428 8.74862L1.35786 6.70695C1.18169 6.53604 1.12044 6.27937 1.20094 6.04779C1.27911 5.81679 1.47861 5.6482 1.71953 5.61029L4.61869 5.1897C4.83919 5.16695 5.03286 5.03279 5.13203 4.83445L6.40953 2.21529C6.43986 2.15695 6.47894 2.10329 6.52619 2.05779L6.57869 2.01695C6.60611 1.98662 6.63761 1.96154 6.67261 1.94112L6.73619 1.91779L6.83536 1.87695H7.08094C7.30028 1.8997 7.49336 2.03095 7.59428 2.22695L8.88869 4.83445C8.98203 5.0252 9.16344 5.15762 9.37286 5.1897L12.272 5.61029C12.517 5.64529 12.7218 5.81445 12.8029 6.04779C12.8793 6.2817 12.8134 6.53837 12.6337 6.70695L10.452 8.77196Z"
                                      fill="#F6973F"
                                      style={{
                                        fill: "#F6973F",
                                        fillOpacity: 1,
                                      }}
                                    />
                                  </svg>
                                ))}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="15"
                                  viewBox="0 0 14 15"
                                  fill="none"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M10.452 8.77196C10.3009 8.91837 10.2315 9.13012 10.2659 9.33779L10.7845 12.2078C10.8283 12.451 10.7256 12.6972 10.522 12.8378C10.3225 12.9836 10.0571 13.0011 9.83953 12.8845L7.25594 11.537C7.16611 11.4891 7.06636 11.4635 6.96428 11.4605H6.80619C6.75136 11.4687 6.69769 11.4862 6.64869 11.513L4.06453 12.867C3.93678 12.9311 3.79211 12.9539 3.65036 12.9311C3.30503 12.8658 3.07461 12.5368 3.13119 12.1897L3.65036 9.31971C3.68478 9.11029 3.61536 8.89737 3.46428 8.74862L1.35786 6.70695C1.18169 6.53604 1.12044 6.27937 1.20094 6.04779C1.27911 5.81679 1.47861 5.6482 1.71953 5.61029L4.61869 5.1897C4.83919 5.16695 5.03286 5.03279 5.13203 4.83445L6.40953 2.21529C6.43986 2.15695 6.47894 2.10329 6.52619 2.05779L6.57869 2.01695C6.60611 1.98662 6.63761 1.96154 6.67261 1.94112L6.73619 1.91779L6.83536 1.87695H7.08094C7.30028 1.8997 7.49336 2.03095 7.59428 2.22695L8.88869 4.83445C8.98203 5.0252 9.16344 5.15762 9.37286 5.1897L12.272 5.61029C12.517 5.64529 12.7218 5.81445 12.8029 6.04779C12.8793 6.2817 12.8134 6.53837 12.6337 6.70695L10.452 8.77196Z"
                                    fill="#F6973F"
                                    style={{ fill: "#F6973F", fillOpacity: 1 }}
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls h-0 z-50 -mx-[10px] bg-yellow-100 top-1/3 -translate-y-1/3 left-0 right-0 flex justify-between absolute">
              <button className="w-[26.1px] h-[26.1px] rounded-full bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M22.6958 14.4355H5.48568M5.48568 14.4355C5.48568 14.4355 10.364 11.2272 11.3552 8.56592M5.48568 14.4355C5.48568 14.4355 9.79826 17.45 11.3552 20.305"
                    stroke="#1E1E1E"
                    style={{ stroke: "#1E1E1E", strokeOpacity: 1 }}
                    strokeWidth="2.17391"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
              <button className="w-[26.1px] h-[26.1px] rounded-full bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M5.30417 14.4355H22.5143M22.5143 14.4355C22.5143 14.4355 17.636 11.2272 16.6447 8.56592M22.5143 14.4355C22.5143 14.4355 18.2017 17.45 16.6447 20.305"
                    stroke="#1E1E1E"
                    style={{ stroke: "#1E1E1E", strokeOpacity: 1 }}
                    strokeWidth="2.17391"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
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
      <ExperimentRentals />
      <ClientReviews />
      <Footer />
    </div>
  );
}
