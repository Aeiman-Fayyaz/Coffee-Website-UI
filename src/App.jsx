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
import woddenBg from "./assets/beans.jpg";
import milkTea from "./assets/milk-tea.jpg";
import organicTea from "./assets/organic-tea.jpg";
import pinkTea from "./assets/pink-tea.jpg";
import macchiatoCoffee from "./assets/macchiato-coffee.jpg";
import icedCoffee from "./assets/iced-coffee.jpg";
import hazelnutCoffee from "./assets/hazelnut-coffee.jpg";
import irishCoffee from "./assets/irish-coffee.jpg";
import vanillaLatte from "./assets/vanilla-latte.jpg";
import chesseCake from "./assets/chesse-cake.jpg";
import chocolateBrownie from "./assets/chocolate-brownie.jpg";
import chocolateFudge from "./assets/chocolate-fudge.jpg";
import lavaCake from "./assets/lava-cake.jpg";

export default function App() {
  const heroCup = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // LAPTOP / DESKTOP ONLY
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(heroCup.current, {
        x: -330,
        y: 1000,
        scale: 0.8,
        rotate: 5,
      }).to(heroCup.current, {
        x: -550,
        y: 450,
        scale: 0.8,
        rotate: 25,
      });
    });

    // TABLET + MOBILE (NO ANIMATION)
    mm.add("(max-width: 1023px)", () => {
      gsap.set(heroCup.current, {
        clearProps: "all", // removes GSAP transforms
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
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
              <img
                src={logo}
                className="h-14 animate-bounce"
                alt="Benory Logo"
              />
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
                    className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:border-b hover:border-[#964B00]"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#coffee"
                    className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:border-b hover:border-[#964B00]"
                    aria-current="page"
                  >
                    Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#tea"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b hover:border-[#964B00]"
                  >
                    Tea
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b hover:border-[#964B00]"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b hover:border-[#964B00]"
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
              className="w-full lg:w-1/2 h-\[320px\] sm\:h-\[420px\] lg:h-screen bg-[url('./assets/hero-beans.png')]
        bg-cover bg-center lg:bg-right bg-no-repeat
        rounded-2xl
        flex items-center justify-center
      "
            >
              <img
                src={heroImg}
                ref={heroCup}
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
                <div className="w-24 h-full bg-[#964B00]"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  Beanory Speciality
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  At Beanory, we curate premium coffee experiences using
                  ethically sourced beans, slow roasting techniques, and expert
                  craftsmanship. Every cup is designed to deliver rich aroma,
                  balanced flavor, and a memorable coffee moment.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 transition-transform duration-500 hover:scale-90">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={creamyCoffee}
                  />
                </div>
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2 mt-5">
                  Creamy Latte Blend
                </h2>
                <p className="text-base leading-relaxed mt-2 mb-8">
                  Creamy latte includes{" "}
                  <span className="text-[#964B00] fw-bold">
                    espresso, steamed milk, and a sweetener.
                  </span>
                </p>
                <button className="bg-[#964B00] p-3 text-white border-0 rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                  Order Now
                </button>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img src={woddenBg} alt="" />
                </div>
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2 mt-5">
                  Artisan Roasted Beans
                </h2>
                <p className="text-base leading-relaxed mt-2 mb-8">
                  Perfect for brewing fresh coffee with a deep, aromatic
                  profile.
                </p>
                <button className="bg-[#964B00] p-3 text-white border-0 rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                  Order Now
                </button>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 transition-transform duration-500 active:scale-90">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={blackCoffee}
                  />
                </div>
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2 mt-5">
                  Classic Black Coffee
                </h2>
                <p className="text-base leading-relaxed mt-2 mb-8">
                  A strong and pure{" "}
                  <span className="text-[#964B00] fw-bold">
                    black coffee made for true coffee lovers.
                  </span>
                </p>
                <button className="bg-[#964B00] p-3 text-white border-0 rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* CARD SECTION END */}
        {/* COFFEE SECTION START */}
        <section className="container px-5 py-10 mx-auto body-font" id="coffee">
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
                  className="h-20 w-20 rounded-full transition-transform duration-500 hover:scale-120 cursor-pointer"
                  alt="Cappucino"
                />
              </div>
              <div className="grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Cappucino
                </h2>
                <p className="leading-relaxed text-gray-500 mb-5">
                  Best Serves includes{" "}
                  <span className="text-[#964B00] fw-bold">
                    {" "}
                    espresso, steamed milk, rich milk foam.
                  </span>
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">PKR 500</span>
                  <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                <img
                  src={espresso}
                  className="h-20 w-20 rounded-full transition-transform duration-500 hover:scale-120 cursor-pointer"
                  alt="Espresso"
                />
              </div>
              <div className="grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Espresso
                </h2>
                <p className="leading-relaxed text-gray-500 mb-5">
                  Black coffee lovers includes{" "}
                  <span className="text-[#964B00] fw-bold">
                    finely ground coffee beans and hot water
                  </span>
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">PKR 450</span>
                  <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* COFFEE SECTION END */}
        {/* TEA SECTION START */}
        <section className=" bg-[#FFF7F0] pb-10" id="tea">
          <div className="container mx-auto px-4 py-12 text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-[#964B00] ">
              Tea Lovers
            </h1>
          </div>
          <div className="grid gap-3 mx-15 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={milkTea}
                  alt="Milk Tea"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  SPECIAL
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Rich, milky black tea
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Doodh Patti includes{" "}
                  <span className="text-[#964B00] fw-bold">
                    {" "}
                    black tea, milk, sugar.{" "}
                  </span>
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">PKR 450</span>
                  <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={organicTea}
                  alt="Organic Tea"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Organic Green Tea
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Fresh organic{" "}
                  <span className="text-[#964B00] fw-bold"> tea leaves </span>{" "}
                  for a healthy lifestyle.
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">PKR 450</span>
                  <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={pinkTea}
                  alt="Pink Tea"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  HOT
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-[#964B00] text-lg title-font font-extrabold mb-2">
                  Kashmiri Pink Tea
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  <span className="text-[#964B00] fw-bold">Strong flavor</span>{" "}
                  with a rich traditional aroma & dry fruits.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black">PKR 450</span>
                  <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TEA SECTION END */}
        {/* MENU CARD SECTION START */}
        <section className="bg-[#FFF7F0] py-24" id="menu">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-16">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#964B00] mb-4">
                Coffee & Sweets Menu
              </h1>
              <p className="text-black leading-relaxed lg:w-2/3 mx-auto">
                Perfect pairings of freshly brewed coffee with handcrafted
                desserts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={macchiatoCoffee}
                  alt="Macchiato Coffee"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Macchiato Coffee
                  </h2>
                  <p className="text-gray-500 mb-4">
                    A bold espresso lightly topped with a small amount of
                    steamed milk, delivering a rich and intense flavor.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">PKR 450</span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={icedCoffee}
                  alt="Iced Coffee"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Iced Coffee
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Espresso blended with steamed milk and rich foam.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">PKR 550</span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={hazelnutCoffee}
                  alt="Hazelnut Coffee"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Hazelnut Coffee
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Smooth coffee infused with a warm, nutty hazelnut flavor for
                    a rich and aromatic experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">PKR 600</span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={irishCoffee}
                  alt="Irish Coffee"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Irish Coffee
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Rich chocolate brownie that pairs perfectly with hot coffee.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">PKR 350</span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={vanillaLatte}
                  alt="Vanilla Latte"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Vanilla Latte
                  </h2>
                  <p className="text-gray-500 mb-4">
                    A smooth blend of espresso and steamed milk, delicately
                    flavored with sweet vanilla syrup.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">PKR 450</span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={chesseCake}
                  alt="Cheese Cake"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Classic Cheesecake
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Creamy cheesecake with a buttery biscuit base.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">PKR 500</span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={chocolateBrownie}
                  alt=" Chocolate Brownie"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Chocolate Brownie
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Rich chocolate brownie that pairs perfectly with hot coffee.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">
                      PKR 350{" "}
                      <small className="font-light">per piece</small>{" "}
                    </span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={chocolateFudge}
                  alt=" Chocolate Fudge Cake"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Chocolate Fudge Cake
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Rich chocolate brownie that pairs perfectly with hot coffee.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">
                      PKR 550{" "}
                      <small className="font-light">per piece</small>{" "}
                    </span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={lavaCake}
                  alt="Lava Cake"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-[#964B00] text-lg font-extrabold mb-2">
                    Lava Cake
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Rich chocolate brownie that pairs perfectly with hot coffee.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-black">
                      PKR 620{" "}
                      <small className="font-light">per piece</small>{" "}
                    </span>
                    <button className="bg-[#964B00] px-4 py-2 text-white rounded-4xl hover:bg-transparent hover:border-2 hover:border-[#964B00] hover:text-[#964B00]">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MENU CARD SECTION END */}
        {/* CONTACT SECTION START */}
        <section id="contact" className="bg-[#FFF7F0] py-24">
          <div className="container px-5 mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#964B00] mb-4">
                Contact Beanory
              </h1>
              <p className="text-black leading-relaxed lg:w-2/3 mx-auto">
                Have a question, feedback, or custom order request? We would
                love to hear from you.
              </p>
            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#964B00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#964B00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Contact no
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your contact no"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#964B00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Order Details
                  </label>
                  <input
                    type="text"
                    placeholder="Order Deatils"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#964B00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Instructions
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your instructions here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#964B00]"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#964B00] text-white px-10 py-3 rounded-full text-lg font-medium hover:bg-transparent hover:text-[#964B00] hover:border-2 hover:border-[#964B00] transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* CONTACT SECTION END */}
        {/* FOOTER SECTION START */}
        <footer className=" text-gray-700 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                <h2 className="text-xl font-semibold text-[#964B00] logo">
                  Beanory
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Crafted coffee for calm moments. From rich espresso to creamy
                  blends, Beanory is your daily coffee escape.
                </p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                <h2 className="title-font font-semibold text-gray-900 mb-4">
                  Our Menu
                </h2>
                <nav className="list-none space-y-2">
                  <li className="hover:text-[#964B00] cursor-pointer">
                    Cappuccino
                  </li>
                  <li className="hover:text-[#964B00] cursor-pointer">
                    Espresso
                  </li>
                  <li className="hover:text-[#964B00] cursor-pointer">Latte</li>
                  <li className="hover:text-[#964B00] cursor-pointer">
                    Black Coffee
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                <h2 className="title-font font-semibold text-gray-900 mb-4">
                  Quick Links
                </h2>
                <nav className="list-none space-y-2">
                  <a href="#">
                    <li className="hover:text-[#964B00] cursor-pointer">
                      Home
                    </li>
                  </a>
                  <a href="#coffee">
                    <li className="hover:text-[#964B00] cursor-pointer">
                      Coffee
                    </li>
                  </a>
                  <a href="#tea">
                    <li className="hover:text-[#964B00] cursor-pointer">Tea</li>
                  </a>
                  <a href="#menu">
                    <li className="hover:text-[#964B00] cursor-pointer">
                      Menu
                    </li>
                  </a>
                  <a href="#contact">
                    <li className="hover:text-[#964B00] cursor-pointer">
                      Contact
                    </li>
                  </a>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
                <h2 className="title-font font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-sm hover:text-[#964B00] cursor-pointer">📍 Freshly brewed, every day</p>
                <p className="text-sm mt-2 hover:text-[#964B00] cursor-pointer">📧 hello@beanory.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 bg-[#964B00]">
            <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center">
              <p className="text-sm text-white">
                © 2026 Beanory. All rights reserved.{" "}
                <span className="fw-bold"> Developed by Aeiman Fayyaz</span>
              </p>

              <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 space-x-4">
                <a className="text-white hover:text-black">Facebook</a>
                <a className="text-white hover:text-black">Instagram</a>
                <a className="text-white hover:text-black">Twitter</a>
              </span>
            </div>
          </div>
        </footer>

        {/* FOOTER SECTION END */}
      </div>
    </>
  );
}
