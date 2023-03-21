"use client";

import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  FaAngleDoubleDown,
  FaArrowUp,
  FaBars,
  FaHamburger,
  FaUserFriends,
  FaWhatsapp,
} from "react-icons/fa";
import Icon from "@/components/Icon";
// import CompanyContext from "../../store/CompanyContext"
// import RecursiveMenu from "../../components/RecursiveMenu"
// import Icon from "../../components/Icon"

const Index: React.FC = () => {
  // const company = useContext(CompanyContext)

  const company = {
    name: "Pitukinha Kids",
    description: "Pitukinha, a cara do estilo!",
    channels: [
      {
        id: 1,
        name: "site",
        type: "website",
        icon: "FaGlobe",
        link: "https://www.vanheerdt.com.br",
      },
      {
        id: 2,
        name: "e-mail",
        type: "email",
        icon: "FaEnvelope",
        link: "contato@vanheerdt.com.br",
      },
      {
        id: 3,
        name: "facebook",
        type: "social",
        icon: "FaFacebook",
        link: "www.facebook.com/vanheerdtfotografia",
      },
      {
        id: 4,
        name: "instagram",
        type: "social",
        icon: "FaInstagram",
        link: "@vanheerdt",
      },
      {
        id: 5,
        name: "whatsapp",
        type: "social",
        icon: "FaWhatsapp",
        link: "api.whatsapp.com/send?phone=48991243798&text=Olá Vanilda!",
      },
      {
        id: 6,
        name: "phone",
        type: "phone",
        icon: "FaPhone",
        link: "(48)99124-3798",
      },
    ],
    logo: "BiFace",
    pages: [
      {
        id: 1,
        slug: "problem-solution",
        title: "Problema",
        subtitle: "Como você pode contornar",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução! Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://assets2.lottiefiles.com/packages/lf20_skfh9odt.json",
            type: "lot",
          },
        ],
      },
      {
        id: 2,
        slug: "porque",
        title: "Porque?",
        subtitle: "Aqui está o subtitle",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução! Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://source.unsplash.com/1600x900/?why,choice,solution",
            type: "img",
          },
        ],
      },
      {
        id: 3,
        slug: "onde",
        title: "Onde?",
        subtitle: "Aqui está o subtitle",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução? Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://assets2.lottiefiles.com/packages/lf20_yr6zz3wv.json",
            type: "lot",
          },
        ],
      },
      {
        id: 4,
        slug: "quando",
        title: "Quando?",
        subtitle: "Aqui está o subtitle",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução? Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://assets4.lottiefiles.com/packages/lf20_eIXuIz.json",
            type: "lot",
          },
        ],
      },
      {
        id: 5,
        slug: "quem",
        title: "Quem?",
        subtitle: "Aqui está o subtitle",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução? Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://assets2.lottiefiles.com/packages/lf20_jx5xafds.json",
            type: "lot",
          },
        ],
      },
      {
        id: 6,
        slug: "como",
        title: "Como?",
        subtitle: "Aqui está o subtitle",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução? Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://assets5.lottiefiles.com/packages/lf20_bHqMJN.json",
            type: "lot",
          },
        ],
      },
      {
        id: 7,
        title: "Quanto custa?",
        subtitle: "Aqui está o subtitle",
        content:
          "Está na hora de desenvolver a sua presença online e mostrar ao mundo qual a sua solução? Diante de inúmeras mudanças fica difícil saber por onde ir. E se as vendas só acontecem no offline então? Resta saber como começar e da forma mais acertiva possível.",
        assets: [
          {
            id: 1,
            src: "https://source.unsplash.com/1600x900/?cash",
            type: "img",
          },
        ],
      },
    ],
    // pages: [
    //   {
    //     id: 1,
    //     title: 'Quem sou',
    //     slug: 'fotografa',
    //     subtitle: 'Conheça um pouco da minha história...',
    //     content: 'A história com a fotografia começa quando...',
    //     img: van
    //   },
    //   {
    //     id: 2,
    //     title: 'Serviços',
    //     slug: 'servico',
    //     subtitle: 'O que amo fazer',
    //     content: 'No começo fotografar era registrar todos os momentos que...'
    //   },
    //   { id: 3, title: 'Contato', slug: 'contato', subtitle: '', content: '' }
    // ],
    founders: [
      {
        name: "Vanilda Heerdt",
        contacts: [
          { type: "email", icon: "FaEnvelope", href: "van@vanheerdt.com.br" },
          {
            type: "facebook",
            icon: "FaFacebook",
            href: "www.facebook.com/vanilda.heerdt",
          },
          {
            type: "whatsapp",
            icon: "FaWhatsapp",
            href: "https://api.whatsapp.com/send?phone=48984830668&text=Olá Vanilda!",
          },
        ],
      },
    ],
    // portfolio,
    // slider,
    kpis: [
      {
        id: 1,
        icon: "FaUserFriends",
        title: "Costumers",
        value: 185,
      },
      {
        id: 2,
        icon: "FaFileSignature",
        title: "Contracts",
        value: 3.185,
      },
      { id: 3, icon: "FaImages", title: "Galeries", value: 1.254 },
      {
        id: 4,
        icon: "FaTicketAlt",
        title: "Average ticket",
        value: "U$ 651,00",
      },
      {
        id: 5,
        icon: "FaMoneyBill",
        title: "Revenues",
        value: "U$ 22.132,00",
      },
      {
        id: 6,
        icon: "FaHandHolding",
        title: "To Deliver",
        value: "5",
      },
    ],
    banners: [
      {
        id: 1,
        url: "https://source.unsplash.com/1600x900/?children,clothes",
        text: "Pitukinha, a cara do estilo!",
      },
      { id: 2, url: "" },
      { id: 3, url: "" },
      { id: 4, url: "" },
    ],
    galleries: [
      {
        id: 1,
        name: "My Nature Gallery",
        slug: "nature",
        costumer: {
          id: 1,
          name: "Samukah",
        },
        description: "My Gallery of nature",
        type: "dir",
        children: [
          {
            id: 1,
            name: "File 1",
            type: "image",
            favorite: null,
            cover: true,
            src: "https://via.placeholder.com/600",
            children: [],
          },
          {
            id: 2,
            name: "File 2",
            type: "image",
            favorite: null,
            src: "https://via.placeholder.com/200",
            children: [],
          },
          {
            id: 3,
            name: "File 3",
            type: "image",
            favorite: null,
            src: "https://via.placeholder.com/300",
            children: [],
          },
          {
            id: 4,
            name: "File 4",
            type: "image",
            favorite: null,
            src: "https://via.placeholder.com/400",
            children: [],
          },
          {
            id: 5,
            name: "File 5",
            type: "image",
            favorite: null,
            src: "https://via.placeholder.com/500",
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: "My Clothes badass",
        slug: "clothes",
        costumer: {
          id: 1,
          name: "Samukah",
        },
        description: "My Gallery of clothes",
        type: "dir",
        children: [
          {
            id: 1,
            name: "File 1",
            type: "image",
            src: "https://via.placeholder.com/600",
            children: [],
          },
          {
            id: 2,
            name: "File 2",
            type: "image",
            src: "https://via.placeholder.com/200",
            children: [],
          },
          {
            id: 3,
            name: "File 3",
            type: "image",
            src: "https://via.placeholder.com/300",
            children: [],
          },
          {
            id: 4,
            name: "File 4",
            type: "image",
            src: "https://via.placeholder.com/400",
            children: [],
          },
          {
            id: 5,
            name: "File 5",
            type: "image",
            src: "https://via.placeholder.com/500",
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "Animals that I Like",
        slug: "animals",
        costumer: {
          id: 1,
          name: "Samukah",
        },
        description: "My Gallery of animals",
        type: "dir",
        children: [
          {
            id: 1,
            name: "File 1",
            type: "image",
            src: "https://via.placeholder.com/600",
            children: [],
          },
          {
            id: 2,
            name: "File 2",
            type: "image",
            src: "https://via.placeholder.com/200",
            children: [],
          },
          {
            id: 3,
            name: "File 3",
            type: "image",
            src: "https://via.placeholder.com/300",
            children: [],
          },
          {
            id: 4,
            name: "File 4",
            type: "image",
            src: "https://via.placeholder.com/400",
            children: [],
          },
          {
            id: 5,
            name: "File 5",
            type: "image",
            src: "https://via.placeholder.com/500",
            children: [],
          },
        ],
      },
    ],
  };

  return (
    <>
      <header id="home">
        <div className="absolute z-40 flex w-full items-center justify-between bg-transparent p-10 sm:h-20 lg:h-32 lg:p-20">
          <div className="flex items-center justify-between gap-5 text-white">
            <Link href={"/"} className="flex gap-4">
              <Icon name={company.logo} size={40} />
              <h1 className="text-xl font-bold italic text-white drop-shadow lg:text-2xl">
                {company.name}
              </h1>
            </Link>
          </div>
          <nav className="hidden gap-2 lg:block">
            {/* <RecursiveMenu
              items={company.pages}
              orientation=""
              customStyles={
                "text-white font-bold hover:bg-green-500 shadow-none"
              }
            /> */}
          </nav>
          {/* <div className="">
            <Link
              href="/admin"
              className="rounded-lg bg-green-500 px-4 py-2 text-lg font-bold text-white shadow">
              Login
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        <div className="absolute z-30 flex h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden text-white">
          <p className="w-1/2 text-center text-5xl font-medium drop-shadow">
            {company.banners[0].text}
          </p>
          <FaAngleDoubleDown className="mt-10 h-10 w-10 animate-bounce text-white" />
        </div>
        <div className="z-30 mb-20 h-screen w-full overflow-hidden [clip-path:polygon(0_0,100%_0,100%_98%,0%_100%)]">
          <Image
            alt="Hero Image"
            className="object-cover object-center opacity-75"
            src={company.banners[0].url}
            fill
          />
        </div>

        {/* <a href="#" draggable="false" aria-labelledby="title" className="relative px-12 py-6 text-indigo-600 border-2 border-indigo-600 group">
            <span id="title" className="text-4xl font-light tracking-wider uppercase">Hover me</span>
            <div className="absolute inset-0 py-6 px-12 bg-indigo-600 text-white motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)]" aria-hidden="true">
              <span className="text-4xl font-light tracking-wider uppercase">Hover me</span>
            </div>
          </a> */}

        {/* {company.pages.map((e, k) => {
          return (
            <div
              id={e.slug}
              key={k}
              className={`flex h-screen w-full flex-wrap py-5 lg:px-20  ${
                k % 2 === 0
                  ? ""
                  : "border-y-8 border-green-200 bg-green-100 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]"
              }`}>
              <div
                className={`flex flex-1 flex-col justify-center ${
                  k % 2 === 0 ? "lg:order-last" : ""
                } px-20`}>
                <p className="text-center text-3xl font-bold text-green-600">
                  {e.title}
                </p>
                <p className="mb-10 text-center text-sm font-bold italic text-gray-400">
                  {e.subtitle}
                </p>
                <p className="text-center text-xl text-gray-600">{e.content}</p>
              </div>
              <div
                className={`flex flex-1 flex-col justify-center border-green-200 px-20 py-10 hover:[transform:none] ${
                  k % 2 === 0
                    ? "[transform:perspective(2000px)_rotateY(10deg)]"
                    : "[transform:perspective(2000px)_rotateY(-10deg)]"
                } transition-all duration-1000 ease-in-out`}>
                {e.assets[0].type === "lot" && (
                  <Player
                    autoplay
                    loop
                    controls
                    src={e.assets[0].src}
                    background="transparent">
                    <Controls
                      visible={false}
                      buttons={["play", "repeat", "frame", "debug"]}
                    />
                  </Player>
                )}
                {e.assets[0].type === "img" && (
                  <Image
                    className="rounded-lg shadow-2xl"
                    alt={e.title}
                    src={e.assets[0].src}
                    width={800}
                    height={800}
                  />
                )}
              </div>
            </div>
          )
        })}
         */}
      </main>
    </>
  );
};

export default Index;
