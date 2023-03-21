"use client";

import { useState, useContext, useEffect } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from "next";
// import CompanyContext from "../../store/CompanyContext"
// import RecursiveMenu from "../../components/RecursiveMenu"
// import Icon from "../../components/Icon"

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

interface CustomProps {
  home?: boolean;
}

const Layout: React.FC<CustomProps | any> = ({ children }) => {
  // const company = useContext(CompanyContext)
  // const props = { backgroundImage: `url("${company.config.pattern[16].src}")` }
  const [floatButtonsShow, setFloatButtonsShow] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      window.scrollY < 150
        ? setFloatButtonsShow(false)
        : setFloatButtonsShow(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    <>
      <span id="back-to-top-anchor" />

      {children}

      <footer className="w-fullscreen flex h-28 items-center justify-center bg-gray-200 text-gray-600">
        <p>{`Copyright © ${new Date().getFullYear()} Samuel Heinzelmann`}</p>
      </footer>

      {floatButtonsShow && (
        <div className="z-0">
          <a
            href="#home"
            className="fixed bottom-5 right-20 rounded-full bg-purple-600 p-2 text-white hover:bg-purple-500">
            <FaArrowUp className="h-5 w-5 text-white" />
          </a>
          <a
            // href={`https://api.whatsapp.com/send?phone=${
            //   company.channels[company.channels.length - 1].link
            // }&text=Olá!Gostaria de maiores informações...`}
            href="/"
            className="fixed bottom-5 right-5 animate-pulse rounded-full bg-green-600 p-2 text-white hover:bg-green-500">
            <FaWhatsapp className="h-10 w-10 text-white" />
          </a>
        </div>
      )}
    </>
  );
};

export default Layout;
