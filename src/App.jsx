import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import heroImg from "./assets/hero.jpg";

export default function App() {
  return (
    <>
      {/* NAVBAR SECTION START */}
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-14" alt="Flowbite Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap logo">
              Beanory
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <label for="input-group-1" className="sr-only">
              Your Email
            </label>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-4xl focus:ring-brand focus:border-brand px-2.5 py-2\.5 shadow-xs placeholder:text-body"
                placeholder="Search"
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body"
                placeholder="Search"
              />
            </div>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary text-xl">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Coffee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Tea
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* NAVBAR SECTION END */}
      {/* HERO SECTION START */}
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg\:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-7xl text-3xl font-bold hero-heading text-black">
              Best coffee
            </h1>
            <br className="hidden lg:inline-block" />
            <span className="sub-heading text-[#964B00]">Make <span className="text-black hero-text">your day</span> great <span className="text-black hero-text">with our</span> coffee!</span>
            <p className="mb-8 leading-relaxed text-black">
              Lorem ipsum dolor sit amet, consectetur odipiscing elit, <br /> sed do
              eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-transparent hover:border-2 hover:border-black hover:text-black  rounded text-lg cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImg}
            />
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}
    </>
  );
}
