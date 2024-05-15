import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { dropdownLinks } from "./data";
interface DropDown {
  link: string;
  state: boolean;
}
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showDropDown, setShowDropDown] = useState<DropDown>({
    link: "",
    state: false,
  });
  return (
    <header
      className={`relative after:top-0 after:left-0 after:absolute md:after:hidden after:bg-black/70 py-4 w-full after:w-full after:h-screen text-neutral-200 ${
        !showNav && "after:hidden"
      } `}
    >
      <div className="flex items-center mx-auto w-[90%] max-w-[1440px]">
        <Link to={"/"} className="">
          <img src="./images/logo.svg" alt="" />
        </Link>
        <nav
          className={`top-0 right-0 z-50 md:static absolute flex md:flex-row flex-col items-start md:items-center gap-12 bg-white md:bg-transparent shadow-lg md:shadow-none mx-16 mr-auto w-2/3 md:w-full h-screen duration-200 md:h-auto px-8 ${
            !showNav &&
            "translate-x-full md:translate-x-0 opacity-0 md:opacity-100"
          }`}
        >
          <ul className="flex md:flex-row flex-col items-start md:items-center gap-12 md:my-auto mt-24">
            <li>
              <NavLink
                className="relative"
                to={"#"}
                onMouseEnter={() => {
                  setShowDropDown({
                    link: "features",
                    state: true,
                  });
                }}
                onMouseLeave={() => {
                  setShowDropDown({
                    link: "",
                    state: false,
                  });
                }}
              >
                <div className="flex items-center gap-3 hover:text-neutral-300 duration-200">
                  Features{" "}
                  <span>
                    <img
                      src={`${
                        showDropDown.link === "features"
                          ? "./images/icon-arrow-up.svg"
                          : "./images/icon-arrow-down.svg"
                      }`}
                      alt={`${
                        showDropDown.state ? "Hide Dropdown" : "Show Dropdown"
                      }`}
                    />
                  </span>
                </div>
                <ul
                  className={`md:right-0 md:-bottom-4 md:absolute flex flex-col gap-4 md:bg-white md:shadow-md mt-6 ml-8 md:ml-0 md:p-4 md:w-[max-content] md:translate-y-full duration-200 origin-top ${
                    showDropDown.link !== "features" &&
                    "-translate-y-full scale-y-0 h-0 opacity-0 mt-0"
                  }`}
                >
                  {dropdownLinks.features.map((i, idx) => (
                    <li key={idx}>
                      <Link to={i.link} className="flex items-center gap-4">
                        <img src={i.linkIcon} alt={i.linkName} />
                        <span className="text-sm hover:text-neutral-300 duration-200">
                          {i.linkName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="relative"
                to={"#"}
                onMouseEnter={() => {
                  setShowDropDown({
                    link: "company",
                    state: true,
                  });
                }}
                onMouseLeave={() => {
                  setShowDropDown({
                    link: "",
                    state: false,
                  });
                }}
              >
                <div className="flex items-center gap-3 hover:text-neutral-300 duration-200">
                  Company{" "}
                  <span>
                    <img
                      src={`${
                        showDropDown.link === "company"
                          ? "./images/icon-arrow-up.svg"
                          : "./images/icon-arrow-down.svg"
                      }`}
                      alt={`${
                        showDropDown ? "Hide Dropdown" : "Show Dropdown"
                      }`}
                    />
                  </span>
                </div>
                <ul
                  className={`md:right-0 md:-bottom-4 md:absolute flex flex-col gap-4 md:bg-white md:shadow-md mt-6 ml-8 md:ml-0 md:p-4 md:w-[max-content] md:translate-y-full duration-200 origin-top ${
                    showDropDown.link !== "company" &&
                    "-translate-y-full scale-y-0 h-0 opacity-0 mt-0"
                  }`}
                >
                  {dropdownLinks.company.map((i, idx) => (
                    <li key={idx}>
                      <Link to={i.link} className="flex items-center gap-4">
                        <span className="text-sm hover:text-neutral-300 duration-200">
                          {i.linkName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavLink>
            </li>{" "}
            <li>
              <NavLink className="hover:text-neutral-300 duration-200" to={"#"}>
                Careers
              </NavLink>
            </li>{" "}
            <li>
              <NavLink className="hover:text-neutral-300 duration-200" to={"#"}>
                About
              </NavLink>
            </li>
          </ul>
          <div className="flex md:flex-row flex-col items-center gap-6 md:ml-auto w-full md:w-auto">
            <Link
              to={"#"}
              className="text-center hover:text-neutral-300 duration-200"
            >
              Login
            </Link>{" "}
            <Link
              className="border-[2px] border-neutral-200 hover:border-neutral-300 px-4 py-2 rounded-lg w-full md:w-auto text-center hover:text-neutral-300"
              to={"#"}
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
      <button
        className="top-4 right-6 z-[100] absolute md:hidden cursor-pointer"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <img
          src={`${
            showNav ? "./images/icon-close-menu.svg" : "./images/icon-menu.svg"
          }`}
          alt=""
        />
      </button>
    </header>
  );
};

export default Navbar;
