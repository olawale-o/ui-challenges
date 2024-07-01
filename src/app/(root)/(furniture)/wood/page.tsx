import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import "./page.css";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const beforeAds: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const afterAds: number[] = [
  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
];

const Header = () => {
  return (
    <header className="bg-white shadow-[0_0_16px_0px_rgba(0,0,0,0.25)]">
      <div className="h-[80px]">
        <div className="max-w-[1440px] mx-[40px]">
          <div className="flex items-center">
            <Link
              className="leading-0 block relative no-underline my-[5px]"
              href="/"
            >
              <Image
                src="/furniture/wood_logo.png"
                alt="Wood logo"
                height={70}
                width={70}
              />
            </Link>
            <div className="basis-2/4 mx-auto flex items-center justify-between">
              <Link
                href="/"
                className={`${montserrat.className} text-xl text-black font-normal hover:text-[#eca52F]`}
              >
                Home
              </Link>
              <Link
                href="/"
                className={`${montserrat.className} text-xl text-black font-normal hover:text-[#eca52F]`}
              >
                Products
              </Link>
              <Link
                href="/"
                className={`${montserrat.className} text-xl text-black font-normal hover:text-[#eca52F]`}
              >
                Shop
              </Link>
              <Link
                href="/"
                className={`${montserrat.className} text-xl text-black font-normal hover:text-[#eca52F]`}
              >
                About
              </Link>
              <Link
                href="/"
                className={`${montserrat.className} text-xl text-black font-normal hover:text-[#eca52F]`}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center justify-between gap-x-[11px]">
              <button
                type="button"
                className="w-[34px] h-[34px] rounded-full bg-[#f9940a] inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5Z"
                    fill="black"
                  />
                  <path
                    d="M12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-[34px] h-[34px] rounded-full bg-[#f9940a] inline-flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.52 15.21L18.72 13.4V8.93999C18.744 7.28381 18.1679 5.6749 17.0981 4.41032C16.0284 3.14575 14.5372 2.31092 12.9 2.05999C11.9498 1.93485 10.9839 2.0138 10.0666 2.29156C9.14936 2.56932 8.30188 3.03951 7.58074 3.67075C6.85959 4.30199 6.28136 5.07976 5.88462 5.95218C5.48788 6.8246 5.28176 7.7716 5.28001 8.72999V13.4L3.48001 15.21C3.25392 15.4399 3.1006 15.7313 3.03921 16.0478C2.97783 16.3643 3.01111 16.6919 3.13489 16.9896C3.25867 17.2873 3.46746 17.542 3.73516 17.7217C4.00286 17.9014 4.31759 17.9982 4.64001 18H8.00001V18.34C8.04672 19.3552 8.49396 20.3105 9.24374 20.9965C9.99351 21.6826 10.9847 22.0434 12 22C13.0154 22.0434 14.0065 21.6826 14.7563 20.9965C15.5061 20.3105 15.9533 19.3552 16 18.34V18H19.36C19.6824 17.9982 19.9972 17.9014 20.2649 17.7217C20.5326 17.542 20.7414 17.2873 20.8651 16.9896C20.9889 16.6919 21.0222 16.3643 20.9608 16.0478C20.8994 15.7313 20.7461 15.4399 20.52 15.21ZM14 18.34C13.9446 18.821 13.7057 19.262 13.3331 19.5713C12.9605 19.8805 12.483 20.0341 12 20C11.517 20.0341 11.0395 19.8805 10.6669 19.5713C10.2944 19.262 10.0555 18.821 10 18.34V18H14V18.34ZM5.51001 16L6.69001 14.82C6.87718 14.6339 7.02567 14.4127 7.12694 14.169C7.2282 13.9252 7.28022 13.6639 7.28001 13.4V8.72999C7.28056 8.05539 7.4254 7.38871 7.70481 6.7747C7.98422 6.16068 8.39174 5.61354 8.90001 5.16999C9.40143 4.71567 9.99559 4.37574 10.6414 4.17372C11.2871 3.9717 11.9691 3.91242 12.64 3.99999C13.7965 4.18776 14.8462 4.787 15.5959 5.68737C16.3456 6.58773 16.7448 7.72862 16.72 8.89999V13.4C16.7185 13.6632 16.7689 13.9241 16.8685 14.1678C16.968 14.4115 17.1146 14.6331 17.3 14.82L18.49 16H5.51001Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="h-[607px] w-full my-[50px] bg">
      <div className="flex flex-col items-center justify-center relative z-50 h-full">
        <h1
          className={`${montserrat.className} text-center text-[#ebebeb] text-5xl font-semibold`}
        >
          Enhance Your House Beauty <br /> with Wood Furniture
        </h1>
        <div
          className={`${montserrat.className} mt-4 mb-[34px] text-center text-2xl text-[#b1b1b1] font-normal`}
        >
          Upgrade your home{`'`}s aesthetic appeal with our <br />
          exquisite collection of wood furniture
        </div>
        <button
          type="button"
          aria-label="Contact us"
          className={`${montserrat.className} text-black font-semibold text-2xl p-2.5 rounded-[5px] bg-white`}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

const BestSellingHeader = () => {
  return (
    <h2
      className={`${montserrat.className} text-black font-medium text-[28px] text-center`}
    >
      Best selling item
    </h2>
  );
};

const BestSellingItem = ({ item }: { item: number }) => {
  return (
    <div className="col-span-1 bg-white">
      <div>
        <div className="col-span-4">
          <div className="spacing-blockend">
            <div>
              <div className="bg-white card shadow-[0_0_16px_0px_rgba(0,0,0,0.25)]">
                <div className="grid auto-cols-fr">
                  <div className="image-content">
                    <figure className="relative aspect-square overflow-hidden w-full">
                      <div className="absolute inset-0 h-full w-full">
                        <Image
                          alt="wood"
                          src={`/furniture/wood_${item}.png`}
                          className="block absolute object-cover inset-0"
                          sizes="100vw"
                          fill
                        />
                      </div>
                    </figure>
                  </div>
                  <div className="text-content w-full my-[23px]">
                    <div
                      className={`${montserrat.className} flex flex-col items-center gap-y-2.5 text-black text-lg font-medium`}
                    >
                      <div>Chair</div>
                      <div></div>
                      <div>৳12,500.00</div>
                      <button
                        type="button"
                        role="link"
                        className="bg-[#f9940a] text-black p-[10px] rounded-[5px] w-full max-w-[274px]"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <Link href="/"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestSelling = ({ items }: { items: number[] }) => {
  return (
    <div>
      <div className="grid grid-cols-4 auto-cols-fr mt-[50px] gap-6">
        {items.map((item) => (
          <BestSellingItem item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

const Ad = () => {
  return (
    <div className="mt-[50px]">
      <div className="pl-[81px] h-[394px] bg-[url('/furniture/ad_cover.png')] flex flex-col justify-center items-start">
        <h2
          className={`${montserrat.className} text-4xl text-white font-semibold mb-[21px]`}
        >
          Transform Your Home <br />
          with Furniture
        </h2>
        <button
          type="button"
          aria-label="Contact us"
          className={`${montserrat.className} text-black font-semibold text-2xl p-2.5 rounded-[5px] bg-white`}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default function WoodFurniture() {
  return (
    <div>
      <Header />
      <div className="max-w-[1440px] px-[40px] bg-white">
        <Hero />
        <BestSellingHeader />
        <BestSelling items={beforeAds} />
        <Ad />
        <BestSelling items={afterAds} />
      </div>
    </div>
  );
}
