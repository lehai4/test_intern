import img from "@/assets/image/logo.png";
import { BarsOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: LinkNavbar[] = [
  { id: 0, path: "/introduction", namePath: "introduction" },
  { id: 1, path: "/solution", namePath: "solution" },
  { id: 2, path: "/rate-plan", namePath: "rate plan" },
  { id: 3, path: "/login", namePath: "login" },
  { id: 4, path: "/apply for free use", namePath: "apply for free use" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="h-[80px] bg-header-color">
      <div className="container h-full">
        <div className="flex flex-row justify-between gap-5 h-full">
          <div className="flex items-center">
            <div className="logo transition-all duration-300 ease-out">
              <Link to="/#">
                <img
                  src={img}
                  alt="logo"
                  className="object-contain w-4/5 md:w-[85%] lg:w-full"
                />
              </Link>
            </div>
          </div>
          <div className="navigation-menu">
            <div className="nav navbar-nav navbar-right h-full sm:hidden md:hidden lg:flex hidden flex-row items-center justify-between gap-7">
              {Navbar.map((item, i) => (
                <li className={`relative block`} key={i}>
                  <Link
                    to={`${item.path}`}
                    className={`${
                      location.pathname === item.path ? "!text-blue-400" : ""
                    } block w-max relative hover:text-blue-400 uppercase text-white text-[14px] font-normal transition-all duration-200 ease-in`}
                  >
                    {i == 3 && (
                      <div className="absolute h-[100%] top-[50%] -left-[15px] -translate-y-[50%] w-[1px] bg-white"></div>
                    )}
                    {item.namePath}
                  </Link>
                </li>
              ))}
            </div>
            <div
              className="flex sm:flex md:flex lg:hidden h-full"
              onClick={showMenu}
            >
              <BarsOutlined style={{ color: "white", fontSize: "30px" }} />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        width={"50%"}
        destroyOnClose
        headerStyle={{ alignSelf: "end", border: "none" }}
        maskStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
        closeIcon={
          <Button
            icon={<CloseOutlined className="text-white" />}
            style={{ backgroundColor: "#FF4A52", borderColor: "#FF4A52" }}
            size="large"
            shape="circle"
          />
        }
      >
        <div className="nav navbar-nav navbar-right  flex flex-col items-center justify-between gap-5">
          {Navbar.map((item, i) => (
            <li className={`relative block`} key={i}>
              <Link
                to={`${item.path}`}
                className={`${
                  location.pathname === item.path ? "text-blue-400" : ""
                } block w-max relative hover:text-blue-400 uppercase text-black text-[14px] font-normal transition-all duration-200 ease-in`}
              >
                {i == 3 && (
                  <div className="absolute h-[100%] top-[50%] -left-[15px] -translate-y-[50%] w-[1px] bg-white"></div>
                )}
                {item.namePath}
              </Link>
            </li>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
