import React from "react";
import banner from "../assets/images/banner.jpg";
import logo from "../assets/images/logo.png";
import CoffeeAmericano from "../assets/images/CoffeeAmericano.jpg";
import CoffeeCappucino from "../assets/images/CoffeeCappucino.jpg";
import CoffeeDoppio from "../assets/images/CoffeeDoppio.jpg";
import CoffeeEspresso from "../assets/images/CoffeeEspresso.jpg";
import CoffeeLatte from "../assets/images/CoffeeLatte.jpg";
import CoffeeMarocchino from "../assets/images/CoffeeMarocchino.jpg";
import contactUs from "../assets/images/contactUs.jpg";
import YoutubeLogo from "../assets/images/youtubeLogo.png";
import InstagramLogo from "../assets/images/instagramLogo.png";
import FacebookLogo from "../assets/images/facebookLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  return (
    <div className="max-w-full font-sans bg-gradient-to-br from-amber-900 to-gray-900">
      <div
        className="h-[410px] bg-cover bg-no-repeat bg-center relative bg-fixed "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-black h-[410px] w-full opacity-45"></div>
        <div className="flex justify-around ">
          {/* <div
            className="h-16 w-16 absolute top-3 left-3"     //logo
            style={{ backgroundImage: `url(${logo})` }}
          ></div> */}
          <p className="text-white absolute top-3 left-6 text-2xl tracking-wider font-butter font-thin shadow-lg ">
            Seruput Karsa
          </p>
          <div className="absolute top-5 ">
            <ul className="flex text-white font-medium text-md tracking-wider mx-auto ">
              <a
                href=""
                className="mx-3 hover:text-amber-600 hover:cursor-pointer active:text-amber-300 "
              >
                Home
              </a>
              <a
                href="#ourProduct"
                className="mx-3 hover:text-amber-600 hover:cursor-pointer active:text-amber-300"
              >
                Our Product
              </a>
              <a
                href="#about"
                className="mx-3 hover:text-amber-600 hover:cursor-pointer active:text-amber-300"
              >
                About
              </a>
              <a
                href="https://djponline.pajak.go.id/account/login"
                className="mx-3 hover:text-amber-600 hover:cursor-pointer active:text-amber-300"
              >
                Contact
              </a>
            </ul>
          </div>
          <div className="absolute top-4 right-10 duration-500 ease-out py-2 px-2 rounded-full flex justify-center bg-opacity-65 hover:bg-amber-500 active:bg-amber-700">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
        <div className="text-white mx-auto max-w-lg absolute top-40 left-1/2 -translate-x-1/2">
          <p
            className="uppercase text-center "
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            Best Place To Buy Coffee
          </p>
          <p
            className="my-5 uppercase text-3xl font-semibold text-center "
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            Welcome To Seruput Karsa
          </p>
          <a
            href="#ourProduct"
            className="mt-10 bg-orange-500 py-2 px-3 rounded-sm hover:bg-orange-600 text-white my-3 mx-auto absolute left-1/2 -translate-x-1/2 shadow-sm hover:shadow-orange-500 focus:ring focus:ring-orange-400 active:ring active:ring-orange-300"
          >
            Explore Our Product
          </a>
        </div>
      </div>

      {/* second section */}
      <hr
        data-aos="fade-right"
        data-aos-offset=""
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className="mt-36 max-w-sm mx-auto"
      />
      <p
        className="uppercase text-white text-center text-2xl font-sans my-4"
        id="about"
      >
        Coffee
      </p>
      <hr
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="700"
        data-aos-easing="ease-in-sine"
        className="max-w-sm mx-auto"
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto max-w-3xl my-14 flex flex-wrap justify-center basis-3 gap-12 text-white font-butter"
      >
        <div className="h-96 w-56 hover:scale-105 ease-out duration-300 ">
          <img src={CoffeeAmericano} alt="" srcset="" />
          <p className="text-center my-2 text-sm font-semibold tracking-wider">
            Coffee Americano
          </p>
          <p className="text-center text-sm text-slate-400 font-medium tracking-wide">
            Rp. 20000
          </p>
        </div>
        <div className="h-96 w-56 hover:scale-105 ease-out duration-300 ">
          <img src={CoffeeCappucino} alt="" srcset="" />
          <p className="text-center my-2 text-sm font-semibold tracking-wider">
            Coffee Cappucino
          </p>
          <p className="text-center text-sm text-slate-400 font-medium tracking-wider">
            Rp. 35000
          </p>
        </div>
        <div className="h-96 w-56 hover:scale-105 ease-out duration-300 ">
          <img src={CoffeeDoppio} alt="" srcset="" />
          <p className="text-center my-2 text-sm font-semibold tracking-wider">
            Coffee Doppio
          </p>
          <p className="text-center text-sm text-slate-400 font-medium tracking-wider">
            Rp. 40000
          </p>
        </div>
        <div className="h-96 w-56 hover:scale-105 ease-out duration-300 ">
          <img src={CoffeeEspresso} alt="" srcset="" />
          <p className="text-center my-2 text-sm font-semibold tracking-wider">
            Coffee Espresso
          </p>
          <p className="text-center text-sm text-slate-400 font-medium tracking-wider">
            Rp. 25000
          </p>
        </div>
        <div className="h-96 w-56 hover:scale-105 ease-out duration-300 ">
          <img src={CoffeeLatte} alt="" srcset="" />
          <p className="text-center my-2 text-sm font-semibold tracking-wider">
            Coffee Latte
          </p>
          <p className="text-center text-sm text-slate-400 font-medium tracking-wider">
            Rp. 47000
          </p>
        </div>
        <div className="h-96 w-56 hover:scale-105 ease-out duration-300 ">
          <img src={CoffeeMarocchino} alt="" srcset="" />
          <p className="text-center my-2 text-sm font-semibold tracking-wider">
            Coffee Marocchino
          </p>
          <p className="text-center text-sm text-slate-400 font-medium tracking-wider">
            Rp. 45000
          </p>
        </div>
        <div>
          <a
            ata-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            href="#"
            className="mt-16 bg-orange-500 py-2 px-3 rounded-sm hover:bg-orange-600 text-white my-3 mx-auto left-1/2 -translate-x-1/2 shadow-sm hover:scale-105 ease-out duration-300 focus:ring focus:ring-orange-400 active:ring active:ring-orange-300"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* About section */}
      <div className="mt-36 max-w-xl  mx-auto  ">
        <hr
          className="max-w-sm mx-auto"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          className="uppercase text-white text-center text-2xl font-sans my-4"
          id="about"
        >
          A Bit About Us
        </p>
        <hr
          className="max-w-sm mx-auto"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        />
        <p className="mt-10 text-center text-white">
          <p data-aos="fade-right" data-aos-easing="ease-in-sine">
            Selamat datang di Seruput Karsa, tempat di mana kopi bukan hanya
            minuman, tapi juga sebuah pengalaman. Di Seruput Karsa, kami percaya
            bahwa setiap cangkir kopi adalah sebuah karya seni. Itulah mengapa
            kami berkomitmen untuk memberikan pengalaman minum kopi yang tak
            terlupakan kepada setiap pelanggan kami.
          </p>
          <br />
          <p data-aos="fade-left" data-aos-easing="ease-in-sine">
            Di Seruput Karsa, kami tidak hanya menyajikan kopi. Kami menyajikan
            cerita. Cerita tentang petani kopi yang penuh dedikasi, tentang
            perjalanan biji kopi dari ladang hingga ke cangkir Anda, dan tentang
            kehangatan komunitas yang kami bangun di sekitar cangkir-cangkir
            kami.
          </p>
          <div
            className="w-52 h-52 mx-auto my-6"
            data-aos="zoom-out"
            data-aos-easing="ease-in-sine"
          >
            <img src={logo} alt="" />
          </div>
        </p>
      </div>

      {/* Contact Us */}
      <div className="mt-20 max-w-full">
        <div
          className="h-[410px] bg-cover bg-no-repeat bg-center relative bg-fixed "
          style={{ backgroundImage: `url(${contactUs})` }}
        >
          <div className="bg-black h-[410px] w-full opacity-45"></div>
          <div className="text-white mx-auto max-w-lg absolute top-40 left-1/2 -translate-x-1/2">
            <p
              className="my-4 uppercase text-3xl font-semibold text-center"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-easing="ease-in-sine"
            >
              Contact Us
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
            <ul className="flex max-w-full gap-8 items-end max-h-full ">
              <img
                src={YoutubeLogo}
                alt=""
                className="w-12 h-12 bg-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75 hover:scale-110 transition duration-200 ease-out"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-easing="ease-in-sine"
              />

              <img
                src={InstagramLogo}
                alt=""
                className="w-12 h-12 bg-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75 hover:scale-110 transition duration-200 ease-out"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-easing="ease-in-sine"
              />

              <img
                src={FacebookLogo}
                alt=""
                className="w-12 h-12 bg-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75 hover:scale-110 transition duration-200 ease-out"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              />
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col m-auto max-w-2xl">
          {/* Name */}
          <section
            className="flex justify-between gap-2 text-white mb-9"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex flex-col">
              <label htmlFor="text" className="text-xl">
                First Name
              </label>
              <input
                placeholder="First Name"
                type="text"
                name="text"
                id=""
                className="mt-3 border border-slate-300 rounded-sm py-2 px-3 shadow-lg placeholder:text-slate-400 text-black w-[300px] focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="text-xl">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                type="text"
                name="text"
                id=""
                className="mt-3 border border-slate-300 rounded-sm py-2 px-3 shadow-lg placeholder:text-slate-400 text-black w-[300px] focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </section>
          {/* email */}
          <section
            className="mb-9 flex flex-col text-white"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            <label htmlFor="Email" className="flex flex-col text-xl">
              Your Email
            </label>
            <input
              placeholder="Email"
              type="email"
              name=""
              id=""
              className="mt-3 rounded-sm py-2 px-3 placeholder:text-slate-400 text-black  focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </section>
          {/* your message */}
          <section
            className="mb-5 flex flex-col text-white"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-sine"
          >
            <label htmlFor="Message" className="flex flex-col text-xl">
              Your Message
            </label>
            <textarea
              placeholder="Message"
              type="Message"
              name=""
              id=""
              className="min-h-52 mt-3 rounded-sm py-2 px-3 placeholder:text-slate-400 text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </section>
          <div className="flex justify-end">
            <a
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
              href="#"
              className="w-20 bg-orange-500 py-2 px-3 rounded-sm hover:bg-orange-600 text-white my-1 text-center left-0 shadow-sm hover:scale-105 ease-out duration-300 focus:ring focus:ring-orange-400 active:ring active:ring-orange-300"
            >
              Sent
            </a>
          </div>
          <div className="mb-32"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
