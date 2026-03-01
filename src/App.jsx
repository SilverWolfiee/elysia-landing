import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaTwitter,
  FaGamepad,
  FaCode,
  FaUtensils,
  FaMotorcycle,
  FaTableTennis,
  FaGuitar,
} from "react-icons/fa";
import { GiEightBall, GiShuttlecock } from "react-icons/gi";
import { motion } from "framer-motion";
// Member PFPs
import cirengPfp from "./assets/cirengavatar.png";
import gnzyPfp from "./assets/ayame.jpeg";
import ahiruPfp from "./assets/sareas.jpeg";
import susien from "./assets/susien.jpg";

// Import Game Logos here!
import hsrLogo from "./assets/games/hsr.png";
import osuLogo from "./assets/games/osu.png";
import mcLogo from "./assets/games/minecraft.webp";
import fnafUCN from "./assets/games/fnafucn.jpeg";
import pubgm from "./assets/games/pubgm.webp";
import mlbb from "./assets/games/mlbb.webp";
import goggog from "./assets/games/mcgogo.jpeg";
import pidorant from "./assets/games/pidorant.png";
import wuwa from "./assets/games/wuwa.png";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const straggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`flex flex-col ${
      isReversed ? "md:flex-row-reverse" : "md:flex-row"
    } items-center gap-12 bg-white/70 dark:bg-white/5 backdrop-blur-lg border-2 border-pink-100 dark:border-pink-900/50 p-10 rounded-[3.5rem] shadow-xl shadow-pink-100/20 dark:shadow-pink-900/10 hover:border-pink-400 dark:hover:border-pink-600 transition-all duration-500 group w-full`}
  >
    {/* PFP Section */}
    <motion.div
      className="relative shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
        <img
          src={pfp}
          alt={name}
          className="w-full h-full object-cover antialiased"
          style={{ imageRendering: "auto" }}
        />
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white dark:border-gray-800"
      >
        ✨
      </motion.div>
    </motion.div>

    {/* Content Section */}
    <div
      className={`flex-1 flex flex-col ${
        isReversed
          ? "md:items-end md:text-right"
          : "md:items-start md:text-left"
      } items-center text-center`}
    >
      <h3 className="text-5xl font-black text-pink-600 dark:text-pink-400 mb-3 tracking-tighter">
        {name}
      </h3>
      <p className="text-pink-400 dark:text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
        {role}
      </p>

      {/* Tech Stacks */}
      <div
        className={`flex flex-wrap gap-4 mb-8 ${
          isReversed ? "md:justify-end" : "md:justify-start"
        } justify-center`}
      >
        {tech.map((item, index) => (
          <motion.span
            key={index}
            whileHover={{ y: -3 }}
            className="bg-pink-50/50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800/50 text-pink-700 dark:text-pink-300 text-[12px] px-3 py-1 rounded-full font-black uppercase"
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Hobbies Section */}
      <div className="mb-6">
        <p className="text-gray-400 dark:text-gray-500 text-[9px] font-black uppercase mb-3 tracking-widest">
          Personal Hobbies
        </p>
        <div
          className={`flex flex-wrap gap-x-6 gap-y-4 ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          } justify-center`}
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-pink-500 dark:text-pink-400 font-bold italic text-sm shrink-0"
            >
              <motion.span
                whileHover={{ y: -3 }}
                className="p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-pink-50 dark:border-pink-900/30"
              >
                {hobby.icon}
              </motion.span>
              <span className="hidden sm:inline whitespace-nowrap">
                {hobby.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Game Library Section */}
      <div className="mb-11 w-full">
        <p className="text-gray-400 dark:text-gray-500 text-[9px] font-black uppercase mb-3 tracking-widest">
          Game Library
        </p>
        <div
          className={`flex flex-wrap gap-6 ${
            isReversed ? "md:justify-end" : "md:justify-start"
          } justify-center`}
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
                  className={`w-10 h-10 object-contain ${
                    game.link
                      ? "drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]"
                      : ""
                  }`}
                />
                <span className="absolute -top-8 bg-gray-800 dark:bg-gray-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/game:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-50">
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
            className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-pink-900/50 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <span className="text-xl">{social.icon}</span>
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const ElysiaLandingPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      try {
        localStorage.setItem("theme", newMode ? "dark" : "light");
      } catch {
        console.log("Error");
      }
      return newMode;
    });
  };

  const members = [
    {
      name: "SilverWolf",
      role: "Founder, Backend-dev, Troller",
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
        {
          name: "HSR",
          logo: hsrLogo,
          link: "https://enka.network/hsr/800279846/",
        },
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
      tech: [
        "Java",
        "Springboot",
        "React",
        "Next.js",
        "PostgreSQL",
        "MongoDB",
        "C++",
      ],
      pfp: gnzyPfp,
      hobbies: [
        { label: "Coding", icon: <FaCode /> },
        { label: "Gaming", icon: <FaGamepad /> },
        { label: "Badminton", icon: <GiShuttlecock /> },
        { label: "Billiards", icon: <GiEightBall /> },
        { label: "Riding-Motorbikes", icon: <FaMotorcycle /> },
      ],
      games: [
        {
          name: "HSR",
          logo: hsrLogo,
          link: "https://enka.network/hsr/807764119/",
        },
        {
          name: "Valorant",
          logo: pidorant,
          link: "https://tracker.gg/valorant/profile/riot/gnzyyyyyyy%20%E6%89%BF%23Genzy/overview?platform=pc&playlist=competitive&season=3ea2b318-423b-cf86-25da-7cbb0eefbe2d",
        },
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
        { label: "Table Tennis", icon: <FaTableTennis /> },
      ],
      games: [
        {
          name: "Valorant",
          logo: pidorant,
          link: "https://tracker.gg/valorant/profile/riot/AhiruSareas%23Ahiru/overview?platform=pc&playlist=competitive&season=3ea2b318-423b-cf86-25da-7cbb0eefbe2d",
        },
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
      role: "Tax-Collector, Waifu Enjoyer",
      tech: ["Calculator", "Spreadsheets"],
      pfp: susien,
      hobbies: [
        { label: "Gaming", icon: <FaGamepad /> },
        { label: "Billiards", icon: <GiEightBall /> },
        { label: "Badminton", icon: <GiShuttlecock /> },
        { label: "Guitar", icon: <FaGuitar /> },
      ],
      games: [
        { name: "HSR", logo: hsrLogo },
        { name: "Wuthering Wave", logo: wuwa },
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
    <div className="min-h-screen bg-[#fefaff] dark:bg-[#0f0f14] text-gray-800 dark:text-gray-200 font-sans selection:bg-pink-200 dark:selection:bg-pink-900">
      {/* Header */}
      <motion.header
        variants={straggerContainer}
        initial="hidden"
        animate="visible"
        className="py-24 px-6 text-center"
      >
        <motion.img
          variants={fadeInUp}
          src="/elylogo8bit.png"
          alt="logo"
          className="absolute top-15 left-105 w-35 h-35 md:w-44 md:h-44 object-cover rounded-xl shadow-lg"
        />
        <motion.img
          variants={fadeInUp}
          src="/amphoreus.png"
          alt="logo"
          className="absolute top-15 right-105 w-35 h-35 md:w-44 md:h-44 object-cover rounded-xl shadow-lg"
        />
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 px-4 py-2 rounded-full bg-pink-400 dark:bg-pink-600 text-pink-300 font-bold shadow-md hover:scale-105 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-black text-pink-400 mb-4 drop-shadow-sm tracking-tighter"
        >
          Elysia<span className="text-pink-500">vernight</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-pink-300 font-bold italic tracking-widest text-lg"
        >
          Hi~ ✨
        </motion.p>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 space-y-20 pb-32">
        {/* What is Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border-2 border-pink-100 dark:border-pink-900/50 rounded-[3rem] p-12 shadow-sm text-center"
        >
          <h2 className="text-3xl font-black text-pink-500 dark:text-pink-400 mb-6 uppercase tracking-tight">
            What is Elysiavernight?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xl italic max-w-3xl mx-auto leading-relaxed">
            A team of 4 dongo's consisting of SilverWolf, Gnzyyyyyyy,
            AhiruSareas and Cryscwl. Lowkey don't even know how we got close
            bleh but anyways.
          </p>
        </motion.section>

        {/* Members Section */}
        <section className="space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-pink-500 dark:text-pink-400">
              Meet the Members
            </h2>
            <p className="text-pink-300 dark:text-pink-600 font-bold tracking-widest mt-2 uppercase">
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
      <footer className="py-16 text-center border-t border-pink-100 dark:border-pink-900/50 bg-white dark:bg-[#0c0c11]">
        <div className="flex justify-center gap-2 mb-4 text-pink-200 dark:text-pink-800">
          🌸 🌸 🌸
        </div>
        <p className="text-pink-400 dark:text-pink-500 font-black italic mb-2 tracking-tighter">
          ELYSIAVERNIGHT
        </p>
        <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">
          Powered by <span className="text-pink-600">DewaVPS</span>
        </p>
        <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
          © 2026 ELYSIAVERNIGHT All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default ElysiaLandingPage;
