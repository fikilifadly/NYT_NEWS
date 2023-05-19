import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const history = useNavigate();

  const inputRef = useRef("");

  const showHandler = () => {
    setShow(!show);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history(`/search?q=${inputRef.current.value}`);
  };

  return (
    <>
      <header className="w-screen backdrop-blur-sm bg-[#ababab33] shadow-sm fixed z-50">
        <nav className="w-10/12 mx-auto flex  md:py-5 py-2 justify-between">
          <div>
            <img
              src="/src/assets/fikilifadlylogo.png"
              alt="FL"
              title="FL"
              className="md:w-[200px] md:h-[50px] w-[100px] h-[30px]"
            />
          </div>
          <div className="flex items-center h-100">
            <ul className="flex md:gap-5 gap-2 md:text-lg text-xs items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-red-600 md:mr-10 mr-8" : "md:mr-10 mr-5"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <form onSubmit={submitHandler}>
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className={`duration-200 ease-linear rounded-full md:h-10 h-5 relative after:contents ${
                        show
                          ? "border-slate-400 focus-visible:outline-red-400 border-solid border-2 md:p-5 p-3 md:w-72 w-32 md:ml-[-40px] ml-[-20px] md:text-sm text-[7.5px]"
                          : "w-0"
                      }`}
                      ref={inputRef}
                      placeholder="Enter To Submit"
                      show={show.toString()}
                    />
                    <button
                      type="button"
                      onClick={showHandler}
                      className="absolute md:top-[5px] top-[3px] md:right-[15px] right-[5px] mix-blend-luminosity outline-none"
                    >
                      &#128269;
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
