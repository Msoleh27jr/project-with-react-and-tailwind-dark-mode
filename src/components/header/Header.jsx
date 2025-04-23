import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ logo , Hero , button}) => {

    function handleClick() {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
          //add class=dark in html element
          document.documentElement.classList.add("dark");
        } else {
          //remove class=dark in html element
          document.documentElement.classList.remove("dark");
        }
    
        if (localStorage.theme === "dark") {
          localStorage.theme = "light";
        } else {
          localStorage.theme = "dark";
        }
      }
      useEffect(()=> {
        handleClick()
      } , [])
  return (
    <div>
      <header className="md:max-w-[1600px] max-w-[90%] m-auto md:h-[860px] h-[100%]">
        <nav className="py-3 flex items-center justify-between">
          <img src={logo} alt="" />
          <ul className="text-2xl md:flex hidden gap-7">
            <li>all products</li>
            <li>Solutions</li>
            <li>ABOUT</li>
            <li>Support</li>
          </ul>
          <div className="w-[140px] relative flex justify-end h-[60px]">
            <SearchIcon />
            <ShoppingCartIcon />
            <button onClick={handleClick} className="cursor-pointer absolute left-0 bottom-0 after:content-['DARK-LIGHT'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-10 h-10 rounded-full border-4 border-sky-200 bg-black pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90">
              <svg
                className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
                viewBox="0 0 384 512"
              >
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </div>
        </nav>
        <section className="md:max-w-[1600px] max-w-[100%] dark:bg-blue-900 m-auto bg-[#abbac8] md:h-[700px] mt-16 rounded-2xl flex md:flex-row flex-col md:justify-between">
            <aside className="md:h-[100%] flex flex-col p-5 md:w-[40%] justify-center md:items-start md:text-start text-center gap-3">
                <h1 className="text-[60px] font-bold">The new phones are here take a look.</h1>
                <p className="text-[20px] text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                {button}
            </aside>
            <img src={Hero} alt="" />
        </section>
      </header>
    </div>
  );
};

export default Header;
