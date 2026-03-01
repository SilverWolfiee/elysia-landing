import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaTwitter,
  FaGamepad,
  FaCode,
  FaUtensils,
  FaMotorcycle,
} from "react-icons/fa";
import { GiEightBall, GiShuttlecock } from "react-icons/gi";
// Member PFPs
import cirengPfp from "./assets/cirengavatar.png";
import gnzyPfp from "./assets/sponsor.png";
import ahiruPfp from "./assets/clanker.png";
import susien from "./assets/susien.jpg"

// Import Game Logos here!
import hsrLogo from "./assets/games/hsr.png";
import osuLogo from "./assets/games/osu.png";
import mcLogo from "./assets/games/minecraft.webp";
import fnafUCN from "./assets/games/fnafucn.jpeg";
import pubgm from "./assets/games/pubgm.webp";
import mlbb from "./assets/games/mlbb.webp";
import goggog from "./assets/games/mcgogo.jpeg";
import pidorant from "./assets/games/pidorant.png";

const MemberCard = ({
  name,
  role,
  tech,
  pfp,
  hobbies,
  socials,
  games,
  isReversed,
}) => (
  <div
    className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 bg-white/70 backdrop-blur-lg border-2 border-pink-100 p-10 rounded-[3.5rem] shadow-xl shadow-pink-100/20 hover:border-pink-300 transition-all duration-500 group w-full`}
  >
    {/* PFP Section*/}
    <div className="relative shrink-0">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden border-8 border-white shadow-2xl">
        <img
          src={pfp}
          alt={name}
          className="w-full h-full object-cover antialiased"
          style={{ imageRendering: "auto" }}
        />
      </div>
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white">
        ✨
      </div>
    </div>

    {/* Content Section */}
    <div
      className={`flex-1 flex flex-col ${isReversed ? "md:items-end md:text-right" : "md:items-start md:text-left"} items-center text-center`}
    >
      <h3 className="text-5xl font-black text-pink-600 mb-1 tracking-tighter">
        {name}
      </h3>
      <p className="text-pink-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
        {role}
      </p>

      {/* Tech Stacks */}
      <div
        className={`flex flex-wrap gap-4 mb-8 ${isReversed ? "md:justify-end" : "md:justify-start"} justify-center`}
      >
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-pink-50/50 border border-pink-100 text-pink-700 text-[12px] px-3 py-1 rounded-full font-black uppercase"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Hobbies Section */}
      <div className="mb-6">
        <p className="text-gray-400 text-[9px] font-black uppercase mb-3 tracking-widest">
          Personal Hobbies
        </p>
        <div
          className={`flex gap-6 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} justify-center`}
        >
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-pink-500 font-bold italic text-sm"
            >
              <span className="p-2 bg-white rounded-xl shadow-sm border border-pink-50">
                {hobby.icon}
              </span>
              <span className="hidden sm:inline">{hobby.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Game Library Section */}
      {/* Game Library Section - Conditional Links */}
      <div className="mb-10 w-full">
        <p className="text-gray-400 text-[9px] font-black uppercase mb-3 tracking-widest">
          Game Library
        </p>
        <div
          className={`flex flex-wrap gap-6 ${isReversed ? "md:justify-end" : "md:justify-start"} justify-center`}
        >
          {games.map((game, index) => {
            const content = (
              <div
                key={index}
                className="group/game relative flex items-center justify-center w-12 h-12 hover:scale-125 transition-all duration-300"
              >
                <img
                  src={game.logo}
                  alt={game.name}
                  className={`w-10 h-10 object-contain ${game.link ? "drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]" : ""}`}
                />
                <span className="absolute -top-8 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/game:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-50">
                  {game.link ? `View ${game.name} Profile` : game.name}
                </span>
              </div>
            );

            return game.link ? (
              <a
                key={index}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>
      {/* Socials Section */}
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-white border border-pink-100 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <span className="text-xl">{social.icon}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ElysiaLandingPage = () => {
  const members = [
    {
      name: "SilverWolf",
      role: "Founder, Backend-dev, Troller, Support",
      tech: [
        "ElysiaJS",
        "Bun",
        "Zig",
        "Rust",
        "TypeScript",
        "C",
        "node.js",
        "Java",
      ],
      pfp: cirengPfp,
      hobbies: [
        { label: "Coding", icon: <FaCode /> },
        { label: "Gaming", icon: <FaGamepad /> },
        { label: "Billiards", icon: <GiEightBall /> },
      ],
      games: [
        { name: "HSR", logo: hsrLogo },
        {
          name: "Osu",
          logo: osuLogo,
          link: "https://osu.ppy.sh/users/10953218",
        },
        { name: "Minecraft", logo: mcLogo },
        { name: "Fnaf UCN", logo: fnafUCN },
        { name: "PUBGM", logo: pubgm },
      ],
      socials: [
        { icon: <FaGithub />, link: "https://github.com/SilverWolfiee" },
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/silverwolfzzz/",
        },
        { icon: <FaTwitter />, link: "https://x.com/WFP_HxTao" },
        { icon: <FaGlobe />, link: "https://elysiavernight.com" },
      ],
    },
    {
      name: "Gnzyyyyyyy",
      role: "Fullstack-dev, Dongo, Concrete-maker",
      tech: ["Java", "Springboot", "React", "Next.js", "PostgreSQL", "MongoDB"],
      pfp: gnzyPfp,
      hobbies: [
        { label: "Coding", icon: <FaCode /> },
        { label: "Gaming", icon: <FaGamepad /> },
        { label: "Badminton", icon: <GiShuttlecock /> },
        { label: "Billiards", icon: <GiEightBall /> },
        { label: "Riding-Motorbikes", icon: <FaMotorcycle /> },
      ],
      games: [
        { name: "Valorant", logo: pidorant },
        {
          name: "Osu",
          logo: osuLogo,
          link: "https://osu.ppy.sh/users/27899214",
        },
        { name: "Minecraft", logo: mcLogo },
        { name: "PUBGM", logo: pubgm },
        { name: "Magic Chess", logo: goggog },
      ],
      socials: [
        { icon: <FaGithub />, link: "https://github.com/gnzyyyyyyy" },
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/gnzyyyyyyy/",
        },
      ],
    },
    {
      name: "AhiruSareas",
      role: "Head-Chef, Main-builder, Sentinel, Idea Generator",
      tech: ["Knife Skills", "Chef-jacket"],
      pfp: ahiruPfp,
      hobbies: [
        { label: "Cooking", icon: <FaUtensils /> },
        { label: "Gaming", icon: <FaGamepad /> },
        { label: "Billiards", icon: <GiEightBall /> },
        { label: "Riding-Motorbikes", icon: <FaMotorcycle /> },
      ],
      games: [
        { name: "Valorant", logo: pidorant },
        { name: "PUBGM", logo: pubgm },
        { name: "Minecraft", logo: mcLogo },
        { name: "Magic Chess", logo: goggog },
        { name: "Mobile Legends", logo: mlbb },
      ],
      socials: [
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/ahiru_sareas/",
        },
      ],
    },
    {
      name: "Cryscwl",
      role: "Tax-Collector",
      tech: ["????"],
      pfp: susien,
      hobbies: [
        
        { label: "Gaming", icon: <FaGamepad /> },
        { label: "Billiards", icon: <GiEightBall /> },
        
      ],
      games: [
        { name: "HSR", logo: hsrLogo },
        { name: "Minecraft", logo: mcLogo },
        { name: "Magic Chess", logo: goggog },
        { name: "Mobile Legends", logo: mlbb },
      ],
      socials: [
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/peterbradlee_wiesi/",
        },
      ],
    },
  ];
  

  return (
    <div className="min-h-screen bg-[#fefaff] text-gray-800 font-sans selection:bg-pink-200">
      {/* Header */}
      <header className="py-24 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-pink-400 mb-4 drop-shadow-sm tracking-tighter">
          Elysia<span className="text-pink-500">vernight</span>
        </h1>
        <p className="text-pink-300 font-bold italic tracking-widest text-lg">
          "Hi~ ✨"
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20 pb-32">
        {/* What is Section */}
        <section className="bg-white/80 backdrop-blur-sm border-2 border-pink-100 rounded-[3rem] p-12 shadow-sm text-center">
          <h2 className="text-3xl font-black text-pink-500 mb-6 uppercase tracking-tight">
            What is Elysiavernight?
          </h2>
          <p className="text-gray-500 text-xl italic max-w-3xl mx-auto leading-relaxed">
            A team of 4 dongo's consisting of SilverWolf, Gnzyyyyyyy,
            AhiruSareas and Cryscwl. Lowkey don't even know how we got close bleh but
            anyways.
          </p>
        </section>

        {/* Members Section */}
        <section className="space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-pink-500">
              Meet the Members
            </h2>
            <p className="text-pink-300 font-bold tracking-widest mt-2 uppercase">
              The 'dongo' Crew
            </p>
          </div>

          <div className="space-y-12">
            {members.map((member, idx) => (
              <MemberCard key={idx} {...member} isReversed={idx % 2 !== 0} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-pink-100 bg-white">
        <div className="flex justify-center gap-2 mb-4 text-pink-200">
          🌸 🌸 🌸
        </div>
        <p className="text-pink-400 font-black italic mb-2 tracking-tighter">
          ELYSIAVERNIGHT
        </p>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
          Powered by <span className="text-pink-600">DewaVPS</span>
        </p>
      </footer>
    </div>
  );
};

export default ElysiaLandingPage;
