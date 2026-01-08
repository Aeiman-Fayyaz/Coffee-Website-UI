import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./App.css";
import logo from "./assets/logo.png";
import heroImg from "./assets/hero.jpg";
import cappucino from "./assets/Capuccino.jpg";
import espresso from "./assets/espresso.jpg";
import creamyCoffee from "./assets/creamy-coffee.jpg";
import blackCoffee from "./assets/black-coffee.jpg";
import woddenBg from "./assets/wodden-bg.jpg";
import heroBg from "./assets/hero-bg.jpg";

export default function App() {
  // const heroCup = useRef(null);
  // // MatchMedia - GSAP Media Query
  // const mm = gsap.matchMedia();
  // useEffect(() => {
  //   const animateCup = gsap.timeline({
  //     // Action perform on timeline - GSAP predefined method
  //     scrollTrigger: {
  //       trigger: ".page",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });
  //   animateCup
  //     .to(heroCup.current, { x: -350, y: 745, scale: 0.8, rotate: 4 })
  //     .to(heroCup.current, { x: -550, y: 450, scale: 0.8, rotate: 25 });
  // }, []);

  // // Target Screen Sizes on Media Query
  // mm.add("(max-width:425px)", () => {
  //   gsap.to(heroCup.current, {
  //     x: 50,
  //     y: 1450,
  //     scale: 0.8,
  //     rotate: 4,
  //     scrollTrigger: {
  //       trigger: ".main",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });
  //   gsap.to(heroCup.current, {
  //     x: 10,
  //     y: 1420,
  //     scale: 1.8,
  //     rotate: 5,
  //     scrollTrigger: {
  //       trigger: ".page",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });
  // });

  const heroCup = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop / Default
    mm.add("(min-width: 426px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(heroCup.current, {
        x: -350,
        y: 745,
        scale: 0.8,
        rotate: 4,
      }).to(heroCup.current, {
        x: -550,
        y: 450,
        scale: 0.8,
        rotate: 25,
      });
    });

    // Mobile
    mm.add("(max-width: 425px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }).to(heroCup.current, {
        x: 10,
        y: 1680,
        scale: 1.5,
        rotate: 5,
      });
    });

    // Tablet 
    // Mobile
    mm.add("(max-width: 625px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }).to(heroCup.current, {
        x: 30,
        y: 1500,
        scale: 1,
        rotate: 5,
      });
    });

    return () => mm.revert();
  }, []);
  return (
    <>
      <div className="page">
        {/* NAVBAR SECTION START */}
        <nav className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl  fixed w-full z-20 top-0 start-0">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-14" alt="Flowbite Logo" />
              <span className="self-center sm:text-[20px] md:text-2xl lg:text-4xl text-heading font-semibold whitespace-nowrap logo">
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
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <label htmlFor="input-group-1" className="sr-only">
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
                      strokeLinecap="round"
                      strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeWidth="2"
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
                      strokeLinecap="round"
                      strokeWidth="2"
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
        <section className="min-h-screen flex items-center px-6 pt-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 w-full">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="lg:text-7xl text-4xl font-bold text-black mb-4">
                Best coffee
              </h1>

              <h2 className="lg:text-7xl text-3xl leading-tight text-[#964B00]">
                Make <span className="text-black">your day</span> great{" "}
                <span className="text-black">with our</span> coffee!
              </h2>

              <p className="mt-6 mb-8 text-black max-w-md mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur odipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore <br />
                magna aliqua. Ut enim ad minim veniam
              </p>

              <button className="bg-black text-white px-8 py-3 rounded text-lg hover:bg-transparent hover:text-black hover:border-2 hover:border-black transition">
                Order Now
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="w-full lg:w-1/2 h-\[320px\] sm\:h-\[420px\] lg\:h-\[520px\]
                 bg-[url('./assets/hero-beans.png')]
                 bg-cover bg-center bg-no-repeat
                 rounded-2xl flex items-center justify-center"
            >
              <img
                ref={heroCup}
                src={heroImg}
                alt="hero"
                className="w-3/4 object-contain"
              />
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}
        {/* CARD SECTION START */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  Space The Final Frontier
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  Street art subway tile salvia four dollar toast bitters
                  selfies quinoa yuccie synth meditation iPhone intelligentsia
                  prism tofu. Viral gochujang bitters dreamcatcher.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={creamyCoffee}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Shooting Stars
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img src={woddenBg} alt="" />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  The Catalyzer
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={blackCoffee}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  The 400 Blows
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* CARD SECTION END */}
        {/* COFFEE SECTION START */}
        <section className="container px-5 mx-auto body-font">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-[#964B00] mb-4">
              Best Coffee
            </h1>
            <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We Serves You Our Best & Original Coffee, Loves the taste.
            </p>
          </div>
          <div className="container px-5 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                <img
                  src={cappucino}
                  className="h-20 w-20 rounded-full"
                  alt=""
                />
              </div>
              <div className="grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Cappucino
                </h2>
                <p className="leading-relaxed text-base">Best Serves</p>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                <img src={espresso} className="h-20 w-20 rounded-full" alt="" />
              </div>
              <div className="grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Espresso
                </h2>
                <p className="leading-relaxed text-base">Black coffee lovers</p>
              </div>
            </div>
          </div>
        </section>
        {/* COFFEE SECTION END */}
        {/* FOOTER SECTION START */}
        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                {/* <img src="" alt="" /> */}
                <span className="ml-3 text-xl logo">Beanory</span>
              </a>
              <p className="mt-2 text-sm text-[#964B00]">
                Drink Coffee, Relax Your Mind
              </p>
            </div>
            <div className="grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2020 Tailblocks —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @knyttneve
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
        {/* FOOTER SECTION END */}
      </div>
    </>
  );
}
