"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const results = [
  {
    id: 1,
    revenue: "57.6 bn",
    title: "LOAN PORTFOLIO",
  },
  {
    id: 2,
    revenue: "0.95%",
    title: "CLASSIFIED LOAN PORTFOLIO",
  },
  {
    id: 3,
    revenue: "388.5%",
    title: "CLASSIFIED LOAN Coverage",
  },
  {
    id: 4,
    revenue: "50.4 bn",
    title: "Deposit",
  },
  {
    id: 5,
    revenue: "6.1 bn",
    title: "Shareholders equity",
  },
  {
    id: 6,
    revenue: "18.51%",
    title: "Capital Adequacy Ratio",
  },
  {
    id: 7,
    revenue: "8.5 bn",
    title: "Market Capitalization",
  },
  {
    id: 8,
    revenue: "AAA",
    title: "Credit Rating",
  },
];

const services = [
  {
    id: 1,
    title: "IPDC SAVING SCHEMES",
    image: "/ipdc/savings.png",
  },
  {
    id: 2,
    title: "IPDC Personal loan",
    image: "/ipdc/loan.png",
  },
  {
    id: 3,
    title: "IPDC Deposit schemes",
    image: "/ipdc/deposit.png",
  },
  {
    id: 4,
    title: "IPDC auto loan",
    image: "/ipdc/auto.png",
  },
];

const bussinessPartners = [
  {
    id: 1,
    partners: [
      {
        id: 1,
        src: "/ipdc/westin.png",
      },
      {
        id: 2,
        src: "/ipdc/jummit.png",
      },
      {
        id: 3,
        src: "/ipdc/holcim.png",
      },
      {
        id: 4,
        src: "/ipdc/etv.png",
      },
    ],
  },
  {
    id: 2,
    partners: [
      {
        id: 5,
        src: "/ipdc/westin.png",
      },
      {
        id: 6,
        src: "/ipdc/jummit.png",
      },
      {
        id: 7,
        src: "/ipdc/holcim.png",
      },
      {
        id: 8,
        src: "/ipdc/etv.png",
      },
    ],
  },
];

const footerLinks = [
  {
    id: 1,
    heading: "Products",
    links: [
      {
        id: 1,
        title: "CSR Activities",
      },
      {
        id: 2,
        title: "Green Banking",
      },
      {
        id: 3,
        title: "News",
      },
      {
        id: 4,
        title: "Ongoing Campgain",
      },
      {
        id: 5,
        title: "Updates",
      },
    ],
  },
  {
    id: 2,
    heading: "Get Started",
    links: [
      {
        id: 1,
        title: "Career",
      },
      {
        id: 2,
        title: "Contact us",
      },
      {
        id: 3,
        title: "Government Securities",
      },
      {
        id: 4,
        title: "Examples",
      },
      {
        id: 5,
        title: "NIS",
      },
    ],
  },
  {
    id: 3,
    heading: "About",
    links: [
      {
        id: 1,
        title: "IPDC at a Glance",
      },
      {
        id: 2,
        title: "Mission, VIsion & Values",
      },
      {
        id: 3,
        title: "Corporate Governanace",
      },
      {
        id: 4,
        title: "Shareholders",
      },
      {
        id: 5,
        title: "Investor Relations",
      },
    ],
  },
];

const CustomerExperience = () => {
  return (
    <div className="py-[100px] px-[135px]">
      <div>
        <h4 className="font-metropolis text-center text-4xl text-[#343434] font-bold leading-[43px]">
          Creating Extraordinary Customer Experience
        </h4>
        <div className="mt-2 mb-[76px]">
          <div className="font-metropolis text-base text-[#999] font-normal leading-[22px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi <br /> dignissim eu pharetra consequat montes,
            sagittis.
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M23.125 3.08331C17.9185 3.0855 13.4564 6.80585 12.5179 11.9271C16.9995 9.47471 22.6205 11.1197 25.0729 15.6012C26.5869 18.3679 26.5869 21.7153 25.0729 24.482C30.9332 23.4085 34.8137 17.7875 33.7402 11.9272C32.8014 6.80275 28.3347 3.08134 23.125 3.08331Z"
                    fill="#FCE0EF"
                  />
                  <path
                    d="M10.7917 33.9167C15.0489 33.9167 18.5 30.4655 18.5 26.2083C18.5 21.9511 15.0489 18.5 10.7917 18.5C6.53451 18.5 3.08337 21.9511 3.08337 26.2083C3.08337 30.4655 6.53451 33.9167 10.7917 33.9167Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M16.9584 10.7917C12.2048 10.7922 8.22545 14.3955 7.75464 19.1257C11.664 17.446 16.1948 19.2536 17.8744 23.1629C18.7087 25.1046 18.7087 27.3037 17.8744 29.2454C22.9577 28.74 26.6689 24.2094 26.1634 19.1261C25.693 14.3951 21.7127 10.7913 16.9584 10.7917Z"
                    fill="#F899CC"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Integrity
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="37"
                  viewBox="0 0 38 37"
                  fill="none"
                >
                  <path
                    d="M21.4791 13.875C20.202 13.875 19.1666 12.8397 19.1666 11.5625C19.1666 10.2853 20.202 9.25 21.4791 9.25C22.7563 9.25 23.7916 10.2853 23.7916 11.5625C23.7902 12.8391 22.7557 13.8736 21.4791 13.875Z"
                    fill="#FCE0EF"
                  />
                  <path
                    d="M29.9583 3.08331H8.375C5.82377 3.09076 3.75745 5.15709 3.75 7.70831V21.3675L9.73167 15.3858C11.5624 13.6437 14.4377 13.6437 16.2683 15.3858L20.6951 19.8366L22.0633 18.4684C23.8724 16.6698 26.7943 16.6698 28.6033 18.4684L34.5833 24.4483V7.70831C34.5759 5.15709 32.5096 3.09076 29.9583 3.08331ZM21.4792 13.875C20.202 13.875 19.1667 12.8396 19.1667 11.5625C19.1667 10.2853 20.202 9.24998 21.4792 9.24998C22.7563 9.24998 23.7917 10.2853 23.7917 11.5625C23.7903 12.8391 22.7557 13.8736 21.4792 13.875Z"
                    fill="#F899CC"
                  />
                  <path
                    d="M16.2683 15.3858C14.4377 13.6438 11.5623 13.6438 9.73167 15.3858L3.75 21.3675V29.2917C3.75746 31.8429 5.82379 33.9092 8.375 33.9167H29.9583C31.215 33.9162 32.4172 33.4041 33.2883 32.4983L16.2683 15.3858Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M34.5833 24.4484L28.6034 18.4684C26.7943 16.6699 23.8724 16.6699 22.0633 18.4684L20.6951 19.8366L33.2816 32.4915C34.1174 31.6362 34.5847 30.4875 34.5833 29.2917V24.4484Z"
                    fill="#FCE0EF"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Demonstrate
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Demonstrating a strong Will to Win in the market place
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M23.125 3.08331C17.9185 3.0855 13.4564 6.80585 12.5179 11.9271C16.9995 9.47471 22.6205 11.1197 25.0729 15.6012C26.5869 18.3679 26.5869 21.7153 25.0729 24.482C30.9332 23.4085 34.8137 17.7875 33.7402 11.9272C32.8014 6.80275 28.3347 3.08134 23.125 3.08331Z"
                    fill="#FCE0EF"
                  />
                  <path
                    d="M10.7917 33.9167C15.0489 33.9167 18.5 30.4655 18.5 26.2083C18.5 21.9511 15.0489 18.5 10.7917 18.5C6.53451 18.5 3.08337 21.9511 3.08337 26.2083C3.08337 30.4655 6.53451 33.9167 10.7917 33.9167Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M16.9584 10.7917C12.2048 10.7922 8.22545 14.3955 7.75464 19.1257C11.664 17.446 16.1948 19.2536 17.8744 23.1629C18.7087 25.1046 18.7087 27.3037 17.8744 29.2454C22.9577 28.74 26.6689 24.2094 26.1634 19.1261C25.693 14.3951 21.7127 10.7913 16.9584 10.7917Z"
                    fill="#F899CC"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Diversity
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Promoting Diversity in the work place and community
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M23.125 3.08331C17.9185 3.0855 13.4564 6.80585 12.5179 11.9271C16.9995 9.47471 22.6205 11.1197 25.0729 15.6012C26.5869 18.3679 26.5869 21.7153 25.0729 24.482C30.9332 23.4085 34.8137 17.7875 33.7402 11.9272C32.8014 6.80275 28.3347 3.08134 23.125 3.08331Z"
                    fill="#FCE0EF"
                  />
                  <path
                    d="M10.7917 33.9167C15.0489 33.9167 18.5 30.4655 18.5 26.2083C18.5 21.9511 15.0489 18.5 10.7917 18.5C6.53451 18.5 3.08337 21.9511 3.08337 26.2083C3.08337 30.4655 6.53451 33.9167 10.7917 33.9167Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M16.9584 10.7917C12.2048 10.7922 8.22545 14.3955 7.75464 19.1257C11.664 17.446 16.1948 19.2536 17.8744 23.1629C18.7087 25.1046 18.7087 27.3037 17.8744 29.2454C22.9577 28.74 26.6689 24.2094 26.1634 19.1261C25.693 14.3951 21.7127 10.7913 16.9584 10.7917Z"
                    fill="#F899CC"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Teamwork
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  semper aenean id pen
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M23.125 3.08331C17.9185 3.0855 13.4564 6.80585 12.5179 11.9271C16.9995 9.47471 22.6205 11.1197 25.0729 15.6012C26.5869 18.3679 26.5869 21.7153 25.0729 24.482C30.9332 23.4085 34.8137 17.7875 33.7402 11.9272C32.8014 6.80275 28.3347 3.08134 23.125 3.08331Z"
                    fill="#FCE0EF"
                  />
                  <path
                    d="M10.7917 33.9167C15.0489 33.9167 18.5 30.4655 18.5 26.2083C18.5 21.9511 15.0489 18.5 10.7917 18.5C6.53451 18.5 3.08337 21.9511 3.08337 26.2083C3.08337 30.4655 6.53451 33.9167 10.7917 33.9167Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M16.9584 10.7917C12.2048 10.7922 8.22545 14.3955 7.75464 19.1257C11.664 17.446 16.1948 19.2536 17.8744 23.1629C18.7087 25.1046 18.7087 27.3037 17.8744 29.2454C22.9577 28.74 26.6689 24.2094 26.1634 19.1261C25.693 14.3951 21.7127 10.7913 16.9584 10.7917Z"
                    fill="#F899CC"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Collaboration
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M28.0105 23.0421L24.2704 26.481C22.3472 28.1575 20.0878 29.4032 17.6436 30.1346L18.6359 34.7645C18.6866 35.0009 18.7922 35.222 18.9441 35.4101C19.0961 35.5982 19.2901 35.7479 19.5105 35.8472C19.731 35.9465 19.9717 35.9925 20.2132 35.9816C20.4548 35.9707 20.6904 35.9032 20.901 35.7845L26.9216 32.3887C27.769 31.8739 28.4309 31.1031 28.8119 30.1877C29.1929 29.2723 29.2733 28.2596 29.0414 27.2955L28.0105 23.0421ZM11.8677 14.0295L15.0878 10.2064L11.0721 9.23745C10.0958 8.89702 9.02931 8.92138 8.0696 9.30603C7.10989 9.69067 6.32179 10.4096 5.85088 11.3301L2.45892 17.3424C2.34007 17.553 2.27243 17.7886 2.26147 18.0302C2.25051 18.2718 2.29654 18.5125 2.39583 18.733C2.49513 18.9535 2.6449 19.1475 2.83305 19.2994C3.0212 19.4513 3.24245 19.5569 3.47892 19.6074L8.21607 20.6229C9.00142 18.2122 10.2409 15.9742 11.8677 14.0295V14.0295ZM26.4644 14.0918C26.9218 14.0918 27.3689 13.9561 27.7492 13.702C28.1295 13.4479 28.4259 13.0868 28.6009 12.6642C28.7759 12.2417 28.8217 11.7767 28.7325 11.3281C28.6432 10.8795 28.423 10.4675 28.0996 10.1441C27.7762 9.82066 27.3641 9.60042 26.9156 9.51119C26.467 9.42196 26.002 9.46776 25.5795 9.64279C25.1569 9.81781 24.7957 10.1142 24.5416 10.4945C24.2875 10.8748 24.1519 11.3219 24.1519 11.7793C24.1521 12.3925 24.3958 12.9806 24.8295 13.4142C25.2631 13.8478 25.8512 14.0915 26.4644 14.0918V14.0918Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M35.5099 3.67891C35.4403 3.41486 35.3019 3.17399 35.1089 2.98091C34.9158 2.78782 34.6749 2.64944 34.4109 2.57987C31.2483 1.75781 27.9179 1.84596 24.8033 2.83417C21.6887 3.82239 18.9167 5.67045 16.8066 8.16543L11.8677 14.0295C9.40046 16.9723 7.83527 20.5648 7.36018 24.3755C7.32971 24.6097 7.35343 24.8478 7.42952 25.0713C7.50561 25.2949 7.63203 25.498 7.79903 25.665L12.5784 30.4443C12.7214 30.5875 12.8914 30.7011 13.0784 30.7786C13.2654 30.8561 13.4659 30.896 13.6683 30.896C13.7127 30.896 13.7571 30.8938 13.8023 30.89C17.6715 30.5703 21.3382 29.0259 24.2702 26.481L29.9175 21.2885C32.4213 19.1839 34.2761 16.4117 35.2661 13.2943C36.2562 10.1769 36.3407 6.84247 35.5099 3.67891V3.67891ZM26.4644 14.0917C26.007 14.0917 25.5599 13.956 25.1796 13.7019C24.7993 13.4478 24.5029 13.0867 24.3279 12.6641C24.1529 12.2416 24.1071 11.7766 24.1963 11.328C24.2855 10.8794 24.5058 10.4674 24.8292 10.144C25.1526 9.82058 25.5646 9.60033 26.0132 9.5111C26.4618 9.42188 26.9268 9.46767 27.3493 9.6427C27.7719 9.81773 28.133 10.1141 28.3871 10.4944C28.6412 10.8747 28.7769 11.3218 28.7769 11.7792C28.7766 12.3924 28.5329 12.9805 28.0993 13.4141C27.6657 13.8477 27.0776 14.0914 26.4644 14.0917V14.0917Z"
                    fill="#F899CC"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Technology
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Harnessing the power of Technology to deliver better customer
                  experience
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M29.625 9.75H8.04163C5.48732 9.75 3.41663 11.8207 3.41663 14.375V18.5697L13.9576 22.0833H23.709L34.25 18.5697V14.375C34.25 11.8207 32.1793 9.75 29.625 9.75Z"
                    fill="#F899CC"
                  />
                  <path
                    d="M15.75 9.75V8.20833H21.9166V9.75H25V8.20833C24.998 6.50626 23.6187 5.12694 21.9166 5.125H15.75C14.0479 5.12694 12.6686 6.50626 12.6666 8.20833V9.75H15.75ZM13.9576 22.0833L3.41663 18.5696V28.25C3.41942 30.8032 5.48846 32.8722 8.04163 32.875H29.625C32.1781 32.8722 34.2472 30.8032 34.25 28.25V18.5696L23.709 22.0833H13.9576Z"
                    fill="#ED017F"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Corporate
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 max-w-[259px]">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                >
                  <path
                    d="M18.5 19.4625L5.39587 11.3688L18.5 3.27502L31.6042 11.3688L18.5 19.4625Z"
                    fill="#F899CC"
                  />
                  <path
                    d="M18.5 34.725V19.4625L31.6042 11.3688V26.6313L18.5 34.725Z"
                    fill="#ED017F"
                  />
                  <path
                    d="M18.5 34.725L5.39587 26.6313V11.3688L18.5 19.4625V34.725Z"
                    fill="#FCE0EF"
                  />
                </svg>
              </div>
              <div className="mt-[18px]">
                <h4 className="font-metropolis text-[#363940] font-bold leading-[22px] text-[22px]">
                  Digital
                </h4>
                <div className="font-metropolis text-sm leding-6 text-[#999] font-normal mt-2.5">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Partner = ({ partners }: { partners: any[] }) => {
  return (
    <>
      {partners.map((partner) => (
        <figure
          className="relative aspect-[21/9] overflow-hidden w-[200px]"
          aria-label={`${partner.id} of ${partners.length}`}
          key={partner.id}
        >
          <div className="absolute inset-0 h-full w-full">
            <Image
              alt="service"
              src={`${partner.src}`}
              className="block absolute object-cover inset-0"
              sizes="100vw"
              fill
            />
          </div>
        </figure>
      ))}
    </>
  );
};

const Partners = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const onSlideChange = (index: number) => {
    setActiveSlide(index);
  };
  return (
    <div className="pt-[78px] pb-[71px] bg-[rgba(252,224,239,0.20)] px-[135px]">
      <div>
        <h3 className="text-center text-[#343434] text-[23px] tracking-[2.1px] font-mormal">
          Business Partners
        </h3>
        <div className="slide-container mt-[88px]">
          <div className="slides relative w-full h-[110px]">
            {bussinessPartners.map((partner, i: number) => (
              <div
                className={`${activeSlide === i ? "flex" : "hidden"} justify-between absolute inset-0 w-full h-full`}
                key={partner.id}
              >
                <Partner partners={partner.partners} />
              </div>
            ))}
          </div>
          <div className="slide-dots flex justify-center">
            <div className="w-[91px] flex justify-between place-items-center mt-[70.14px]">
              {bussinessPartners.map((dots, i: number) => (
                <button
                  type="button"
                  className={`${activeSlide === i ? "w-[13px] h-[13px] bg-[#f467b2] rounded-full" : "w-[8px] h-[8px] bg-[#ccc] rounded-full"} `}
                  key={i}
                  onClick={() => onSlideChange(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Glance = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-[110px] pr-[252px]">
        <div className="col-span-1">
          <div className="image-content">
            <figure className="relative aspect-square overflow-hidden w-full">
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="service"
                  src={"/ipdc/glance.png"}
                  className="block absolute object-cover inset-0"
                  sizes="100vw"
                  fill
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center">
          <h2 className="font-metropolis text-4xl text-[#343434] font-bold leading-[43px]">
            IPDC AT A GLANCE
          </h2>
          <div className="mb-[44px]">
            <div className="font-metropolis text-[#676767] text-base font-normal leading-[29px]">
              IPDC Finance Limited (previously known as {'"'}Industrial
              Promotion and Development Company of Bangladesh Limited{'"'}) is
              the first private sector financial institution of the country
              established in 1981 by a distinguished group of shareholders
              namely International Finance Corporation (IFC), USA, German
              Investment and Development Company (DEG), Germany, The Aga Khan
              Fund for Economic Development (AKFED), Switzerland, Commonwealth
              Development Corporation (CDC), UK and the Government of Bangladesh
            </div>
          </div>
          <Link
            href="/"
            className="font-metropolis inline-flex items-center font-normal text-[#ed017f] leading-[23.99px]"
          >
            Read more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M22.4033 14.0407C22.3458 13.8923 22.2596 13.7568 22.1496 13.6419L16.1079 7.60023C15.9953 7.48757 15.8615 7.3982 15.7143 7.33723C15.5671 7.27626 15.4093 7.24487 15.25 7.24487C14.9282 7.24487 14.6196 7.3727 14.3921 7.60023C14.2794 7.7129 14.1901 7.84665 14.1291 7.99385C14.0681 8.14105 14.0367 8.29882 14.0367 8.45815C14.0367 8.77993 14.1645 9.08853 14.3921 9.31607L18.3796 13.2915H9.20833C8.88786 13.2915 8.58052 13.4188 8.35391 13.6454C8.12731 13.872 8 14.1793 8 14.4998C8 14.8203 8.12731 15.1276 8.35391 15.3542C8.58052 15.5808 8.88786 15.7082 9.20833 15.7082H18.3796L14.3921 19.6836C14.2788 19.7959 14.1889 19.9295 14.1276 20.0768C14.0662 20.224 14.0347 20.382 14.0347 20.5415C14.0347 20.701 14.0662 20.8589 14.1276 21.0062C14.1889 21.1534 14.2788 21.2871 14.3921 21.3994C14.5044 21.5127 14.6381 21.6025 14.7853 21.6639C14.9325 21.7252 15.0905 21.7568 15.25 21.7568C15.4095 21.7568 15.5675 21.7252 15.7147 21.6639C15.8619 21.6025 15.9956 21.5127 16.1079 21.3994L22.1496 15.3577C22.2596 15.2428 22.3458 15.1073 22.4033 14.959C22.5242 14.6648 22.5242 14.3348 22.4033 14.0407Z"
                fill="#ED017F"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Service = ({ service }: { service: any }) => {
  return (
    <div className="col-span-1 self-stretch">
      <div>
        <div className="col-span-4">
          <div className="spacing-blockend">
            <div>
              <div className="rounded-[9px] relative">
                <div className="grid auto-cols-fr">
                  <div className="image-content">
                    <figure className="relative aspect-[3/5] overflow-hidden w-full rounded-[9px]">
                      <div className="absolute inset-0 h-full w-full">
                        <Image
                          alt="service"
                          src={`${service.image}`}
                          className="block absolute object-cover inset-0"
                          sizes="100vw"
                          fill
                        />
                      </div>
                    </figure>
                  </div>
                  <div className="text-content w-full mt-[23px]">
                    <div
                      className={`flex items-center gap-x-[22px] text-black text-lg font-medium`}
                    >
                      <div className="font-metropolis flex-grow  text-[21px] font-semibold text-[#363940] leading-[35px] tracking-[1px]">
                        {service.title}
                      </div>
                      <button
                        type="button"
                        role="link"
                        className="w-[37px] h-[37px] rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="37"
                          height="38"
                          viewBox="0 0 37 38"
                          fill="none"
                        >
                          <path
                            d="M19.5899 26.2567L25.7561 20.0905C26.0441 19.8006 26.2058 19.4086 26.2058 19C26.2058 18.5914 26.0441 18.1994 25.7561 17.9095L19.5899 11.7434C19.2999 11.4587 18.9093 11.2999 18.5029 11.3018C18.0964 11.3036 17.7072 11.4659 17.4198 11.7533C17.1325 12.0406 16.9702 12.4299 16.9684 12.8363C16.9665 13.2427 17.1252 13.6334 17.41 13.9233L20.945 17.4584H12.3333C11.9244 17.4584 11.5323 17.6208 11.2432 17.9099C10.9541 18.199 10.7916 18.5912 10.7916 19C10.7916 19.4089 10.9541 19.8011 11.2432 20.0902C11.5323 20.3793 11.9244 20.5417 12.3333 20.5417H20.945L17.4099 24.0768C17.1238 24.3665 16.964 24.7576 16.9653 25.1647C16.9666 25.5719 17.1289 25.962 17.4168 26.2499C17.7047 26.5378 18.0948 26.7001 18.502 26.7013C18.9091 26.7026 19.3002 26.5428 19.5899 26.2567Z"
                            fill="#ED017F"
                          />
                          <path
                            d="M33.9167 18.9999C33.9167 15.9508 33.0125 12.9701 31.3185 10.4349C29.6245 7.89963 27.2168 5.92363 24.3998 4.75678C21.5827 3.58993 18.4829 3.28463 15.4924 3.87949C12.5019 4.47434 9.75488 5.94264 7.59882 8.0987C5.44276 10.2548 3.97446 13.0017 3.37961 15.9923C2.78475 18.9828 3.09005 22.0826 4.2569 24.8996C5.42376 27.7167 7.39975 30.1244 9.93501 31.8184C12.4703 33.5124 15.4509 34.4166 18.5 34.4166C22.5874 34.412 26.5061 32.7863 29.3963 29.8961C32.2865 27.0059 33.9122 23.0873 33.9167 18.9999ZM17.4101 26.2566C17.2669 26.1134 17.1533 25.9435 17.0758 25.7565C16.9983 25.5695 16.9584 25.369 16.9584 25.1665C16.9584 24.9641 16.9983 24.7636 17.0758 24.5766C17.1533 24.3896 17.2669 24.2197 17.4101 24.0765L20.945 20.5416H12.3334C11.9245 20.5416 11.5324 20.3792 11.2433 20.09C10.9541 19.8009 10.7917 19.4088 10.7917 18.9999C10.7917 18.5911 10.9541 18.1989 11.2433 17.9098C11.5324 17.6207 11.9245 17.4583 12.3334 17.4583H20.945L17.4101 13.9232C17.1253 13.6332 16.9666 13.2426 16.9684 12.8362C16.9703 12.4297 17.1325 12.0405 17.4199 11.7531C17.7073 11.4658 18.0965 11.3035 18.5029 11.3016C18.9093 11.2998 19.3 11.4585 19.59 11.7433L25.7562 17.9095C26.0442 18.1993 26.2059 18.5914 26.2059 19C26.2059 19.4086 26.0442 19.8006 25.7562 20.0905L19.59 26.2566C19.4469 26.3997 19.277 26.5133 19.09 26.5908C18.9029 26.6683 18.7025 26.7082 18.5 26.7082C18.2976 26.7082 18.0972 26.6683 17.9101 26.5908C17.7231 26.5133 17.5532 26.3997 17.4101 26.2566Z"
                            fill="#FCE0EF"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <Link href="/" className="absolute inset-0"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="pt-[100px] pb-[116px] bg-[#fef9fc] flex flex-col items-center pl-[135px] pr-[139px]">
      <div>
        <h2 className="font-metropolis text-center text-4xl text-[#343434] font-bold leading-[43px]">
          Our service
        </h2>
        <div className="mt-5 mb-[34px]">
          <div className="font-metropolis text-[#999] text-base font-normal leading-[22px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 auto-cols-fr gap-x-[50px]">
            {services.map((service) => (
              <Service service={service} key={service.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OurBestResults = () => {
  return (
    <div className="py-[108px]">
      <div>
        <h4 className="text-center text-4xl text-[#343434] font-bold leading-[43px]">
          Our best results for the year
        </h4>
        <div className="mt-5">
          <div className="text-base text-[#999] font-normal leading-[22px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus <br />
            mattis vel feugiat erat tortor eleifend.
          </div>
        </div>
        <div className="mt-[84px] mx-[135px]">
          <div>
            <div className="flex justify-between flex-wrap">
              {results.slice(0, 4).map((result) => (
                <div key={result.id} className="w-[172px] self-center">
                  <div>
                    <div className="text-[#343434] hover:text-[#ed017f] font-bold text-[40px] leading-[43px]">
                      {result.revenue}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="text-base text-[#676767] font-normal leading-[25px] tracking-[1px] text-wrap">
                      {result.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[55px]">
              <div className="flex justify-between flex-wrap">
                {results.slice(4, 8).map((result) => (
                  <div key={result.id} className="w-[172px] self-center">
                    <div>
                      <div className="text-[#343434] hover:text-[#ed017f] font-bold text-[40px] leading-[43px]">
                        {result.revenue}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-base text-[#676767] font-normal leading-[25px] tracking-[1px] text-wrap">
                        {result.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div className="pt-[100px] pb-[116px] bg-[#fef9fc] flex flex-col items-center">
      <div>
        <h3 className="font-metropolis text-center text-4xl text-[#343434] font-bold leading-[43px]">
          Newsletter
        </h3>
        <div className="mt-5 mb-[34px]">
          <div className="font-metropolis text-[#999] text-base font-normal leading-[22px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Eget
            ac quis aliquam arcu lacus.
          </div>
        </div>

        <div className="gap-x-6 flex">
          <input
            className="font-metropolis rounded bg-white border-[1px] border-[#ccc] py-3 px-[15px] min-w-[343px] w-full"
            type="email"
            placeholder="Your Email"
            aria-label="user email"
          />
          <button
            type="button"
            aria-label="Submit button"
            className="font-metropolis text-white rounded bg-[#ed017f] py-[13px] px-6"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="pt-[60px] pb-[79px] px-[135px]">
        <div className="flex">
          <div className="flex flex-grow justify-between">
            <ul className="flex justify-between w-full">
              <div className="w-[180px] flex flex-col">
                <h3 className="text-[#010101] text-lg font-semibold font-metropolis">
                  About the company
                </h3>
                <div className="mt-5">
                  <div className="text-[#676767] text-sm leading-[22px] font-metropolis text-wrap">
                    Learn To Love Growth And Change And You Will Be A Success.
                    Microsoft Patch{" "}
                  </div>
                </div>
                <div className="flex gap-x-4 mt-auto justify-self-end">
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                      fill="none"
                    >
                      <path
                        d="M9.11999 5.32003H11V2.14003C10.0897 2.04538 9.17514 1.99865 8.25999 2.00003C5.53999 2.00003 3.67999 3.66003 3.67999 6.70003V9.32003H0.609985V12.88H3.67999V22H7.35998V12.88H10.42L10.88 9.32003H7.35998V7.05003C7.35998 6.00003 7.63999 5.32003 9.11999 5.32003Z"
                        fill="#4B7FCD"
                      />
                    </svg>
                  </Link>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z"
                        fill="#FF0000"
                      />
                    </svg>
                  </Link>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.4701 2.00014H3.53006C3.33964 1.9975 3.15056 2.03239 2.97362 2.10282C2.79669 2.17326 2.63536 2.27786 2.49886 2.41065C2.36235 2.54344 2.25334 2.70182 2.17805 2.87675C2.10276 3.05167 2.06267 3.23972 2.06006 3.43014V20.5701C2.06267 20.7606 2.10276 20.9486 2.17805 21.1235C2.25334 21.2985 2.36235 21.4568 2.49886 21.5896C2.63536 21.7224 2.79669 21.827 2.97362 21.8975C3.15056 21.9679 3.33964 22.0028 3.53006 22.0001H20.4701C20.6605 22.0028 20.8496 21.9679 21.0265 21.8975C21.2034 21.827 21.3648 21.7224 21.5013 21.5896C21.6378 21.4568 21.7468 21.2985 21.8221 21.1235C21.8974 20.9486 21.9375 20.7606 21.9401 20.5701V3.43014C21.9375 3.23972 21.8974 3.05167 21.8221 2.87675C21.7468 2.70182 21.6378 2.54344 21.5013 2.41065C21.3648 2.27786 21.2034 2.17326 21.0265 2.10282C20.8496 2.03239 20.6605 1.9975 20.4701 2.00014ZM8.09006 18.7401H5.09006V9.74014H8.09006V18.7401ZM6.59006 8.48014C6.17632 8.48014 5.77953 8.31578 5.48697 8.02323C5.19442 7.73067 5.03006 7.33388 5.03006 6.92014C5.03006 6.5064 5.19442 6.10961 5.48697 5.81705C5.77953 5.5245 6.17632 5.36014 6.59006 5.36014C6.80975 5.33522 7.03224 5.35699 7.24293 5.42402C7.45363 5.49105 7.6478 5.60183 7.81272 5.7491C7.97763 5.89637 8.10958 6.07682 8.19993 6.27862C8.29028 6.48043 8.33698 6.69904 8.33698 6.92014C8.33698 7.14124 8.29028 7.35985 8.19993 7.56166C8.10958 7.76346 7.97763 7.94391 7.81272 8.09118C7.6478 8.23845 7.45363 8.34923 7.24293 8.41626C7.03224 8.48329 6.80975 8.50505 6.59006 8.48014ZM18.9101 18.7401H15.9101V13.9101C15.9101 12.7001 15.4801 11.9101 14.3901 11.9101C14.0527 11.9126 13.7242 12.0184 13.4489 12.2133C13.1735 12.4082 12.9645 12.6828 12.8501 13.0001C12.7718 13.2352 12.7379 13.4827 12.7501 13.7301V18.7301H9.75006C9.75006 18.7301 9.75006 10.5501 9.75006 9.73014H12.7501V11.0001C13.0226 10.5272 13.419 10.1377 13.8965 9.87334C14.374 9.60902 14.9146 9.47999 15.4601 9.50014C17.4601 9.50014 18.9101 10.7901 18.9101 13.5601V18.7401Z"
                        fill="#4A71FB"
                      />
                    </svg>
                  </Link>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                        fill="#ED017F"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              {footerLinks.map((footerLink, i) => (
                <li key={i} className="w-[140px]">
                  <h3 className="text-[#363940] text-lg font-normal font-metropolis">
                    {footerLink.heading}
                  </h3>
                  <ul className="mt-5">
                    {footerLink.links.map((link) => (
                      <li key={link.id} className="mt-2.5">
                        <div className="flex">
                          <Link
                            href="/"
                            className="text-sm text-nowrap text-[#676767] font-normal font-metropolis leading-[22px]"
                          >
                            {link.title}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-[192px]">
            <div className="flex gap-x-[11px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.44 13C19.22 13 18.99 12.93 18.77 12.88C18.3245 12.7818 17.8866 12.6515 17.46 12.49C16.9961 12.3212 16.4861 12.33 16.0283 12.5146C15.5704 12.6992 15.1971 13.0466 14.98 13.49L14.76 13.94C13.786 13.3982 12.891 12.7252 12.1 11.94C11.3147 11.149 10.6418 10.254 10.1 9.28L10.52 9.00001C10.9633 8.78292 11.3108 8.40954 11.4954 7.9517C11.68 7.49386 11.6888 6.98392 11.52 6.52001C11.3612 6.09243 11.2309 5.6548 11.13 5.21001C11.08 4.99001 11.04 4.76001 11.01 4.53001C10.8885 3.82563 10.5196 3.18775 9.9696 2.73124C9.4196 2.27474 8.72467 2.02961 8.00998 2.04001H5.00998C4.57901 2.03596 4.15223 2.12482 3.75869 2.30054C3.36515 2.47625 3.01409 2.7347 2.72941 3.05829C2.44473 3.38187 2.23311 3.763 2.10897 4.17572C1.98482 4.58844 1.95106 5.02306 2.00998 5.45001C2.54272 9.63939 4.45601 13.5319 7.44763 16.5126C10.4393 19.4934 14.3387 21.3925 18.53 21.91H18.91C19.6474 21.9111 20.3594 21.6405 20.91 21.15C21.2263 20.867 21.4791 20.5202 21.6514 20.1323C21.8238 19.7445 21.9119 19.3244 21.91 18.9V15.9C21.8977 15.2054 21.6448 14.5366 21.1943 14.0077C20.7439 13.4788 20.1238 13.1226 19.44 13ZM19.94 19C19.9398 19.142 19.9094 19.2823 19.8508 19.4116C19.7921 19.5409 19.7066 19.6563 19.6 19.75C19.4886 19.847 19.358 19.9194 19.2167 19.9625C19.0754 20.0056 18.9266 20.0184 18.78 20C15.0349 19.5198 11.5562 17.8065 8.89269 15.1303C6.22917 12.4541 4.53239 8.96734 4.06998 5.22001C4.05406 5.07352 4.06801 4.92534 4.11098 4.7844C4.15395 4.64346 4.22505 4.51269 4.31998 4.40001C4.41369 4.29334 4.52904 4.20785 4.65836 4.14922C4.78767 4.0906 4.92799 4.06019 5.06998 4.06001H8.06998C8.30253 4.05483 8.5296 4.13088 8.71212 4.27508C8.89464 4.41927 9.02119 4.62258 9.06998 4.85001C9.10998 5.12334 9.15998 5.39334 9.21998 5.66001C9.3355 6.18715 9.48924 6.70518 9.67998 7.21001L8.27998 7.86001C8.16028 7.91493 8.0526 7.99295 7.96314 8.0896C7.87367 8.18625 7.80418 8.29962 7.75865 8.4232C7.71312 8.54678 7.69245 8.67814 7.69783 8.80973C7.7032 8.94132 7.73452 9.07055 7.78998 9.19C9.22918 12.2728 11.7072 14.7508 14.79 16.19C15.0334 16.29 15.3065 16.29 15.55 16.19C15.6747 16.1454 15.7893 16.0765 15.8871 15.9872C15.985 15.8979 16.0641 15.7901 16.12 15.67L16.74 14.27C17.2569 14.4549 17.7846 14.6085 18.32 14.73C18.5866 14.79 18.8566 14.84 19.13 14.88C19.3574 14.9288 19.5607 15.0553 19.7049 15.2379C19.8491 15.4204 19.9252 15.6475 19.92 15.88L19.94 19Z"
                  fill="#ED017F"
                />
              </svg>
              <span className="text-[17px] tracking-[1px] leading-[22px] font-semibold font-metropolis">
                16519
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Ipdc() {
  return (
    <div>
      <CustomerExperience />
      <Partners />
      <Glance />
      <OurServices />
      <OurBestResults />
      <NewsLetter />
      <Footer />
    </div>
  );
}
