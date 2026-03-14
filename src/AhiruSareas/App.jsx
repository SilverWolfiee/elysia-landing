import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCode,
  FaGamepad,
  FaArrowLeft,
  FaGithub,
  FaInstagram,
  FaMicrophone,
  FaTiktok,
  FaYoutube,
  FaGlobe,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaUtensils
} from "react-icons/fa";

import { GiShuttlecock, GiEightBall, GiConcreteBag, GiPingPongBat } from "react-icons/gi";
import {
  SiNodedotjs,
  SiBun,
  SiArchlinux,
  SiSqlite,
  SiReact,
  SiC,
  SiRust,
  SiZig,
} from "react-icons/si";

import ahiruPfp from "../assets/sareas.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SkillBadge = ({ icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex flex-col items-center gap-3 p-6 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-pink-100 dark:border-pink-900/30 rounded-3xl shadow-sm hover:border-pink-400 transition-colors"
  >
    <div className="text-3xl text-pink-500">{icon}</div>
    <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
      {label}
    </span>
  </motion.div>
);

const ProjectCard = ({
  title,
  description,
  githubLink,
  githubLink2,
  liveLink,
  tags,
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="group p-8 bg-white/70 dark:bg-white/5 backdrop-blur-xl border-2 border-pink-100 dark:border-pink-900/50 rounded-[2.5rem] shadow-lg hover:border-pink-400 transition-all flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-black text-pink-600 dark:text-pink-400 tracking-tighter">
        {title}
      </h3>
      <div className="flex gap-2">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-2xl hover:bg-pink-500 hover:text-white transition-all shadow-sm"
            title="View Secondary Source"
          >
            <FaGithub className="text-xl" />
          </a>
        )}
        {githubLink2 && (
          <a
            href={githubLink2}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-2xl hover:bg-pink-500 hover:text-white transition-all shadow-sm"
            title="View Secondary Source"
          >
            <FaGithub className="text-xl" />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-2xl hover:bg-pink-500 hover:text-white transition-all shadow-sm"
          >
            <FaGlobe className="text-xl" />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300 text-[10px] font-black uppercase tracking-widest rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);


const AhiruPage = () => {
  return (
    <div className="min-h-screen bg-[#fefaff] dark:bg-[#0f0f14] text-gray-800 dark:text-gray-200 font-sans selection:bg-pink-200">
     
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <Link
          to="/"
          className="pointer-events-auto group flex items-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-pink-100 dark:border-pink-900/50 shadow-lg hover:bg-pink-500 hover:text-white transition-all"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm">Back to Main Page</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl rotate-3">
              <img
                src={ahiruPfp}
                alt="Ahiru-Sareas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-4 rounded-2xl shadow-xl">
              <FaUtensils className="text-2xl" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-pink-600 dark:text-pink-400 tracking-tighter mb-4"
          >
            Ahiru Sareas
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-pink-400 dark:text-pink-500 font-bold uppercase tracking-[0.4em] text-sm"
          >
            Head-Chef | Main-Builder(Minecraft) | Idea-Initiator
          </motion.p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-24 pb-32">
        {/* About Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border-2 border-pink-100 dark:border-pink-900/50 p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-pink-100 dark:text-pink-900/20 text-9xl font-black select-none pointer-events-non e">
              {/* 01 */}
            </div>
            <h2 className="text-3xl font-black text-pink-500 mb-6 text-center">
              One day we look back at where we started and be amazed by how far we've come
              <br />
              
              <span className="text-xl opacity-70 italic font-medium mt-4 block">
                — Technoblade —
              </span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed italic">
              Hi, I'm Ahiru, i'm currently a culinary student expected to graduate in 2027 and i love ducks
            </p>
          </div>
        </motion.section>

        
        {/* Projects Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black text-pink-500 text-center uppercase tracking-tighter">
              Projects / Works
            </h2>
            <div className="h-[2px] flex-1 bg-pink-100 dark:bg-pink-900/30"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Your Project"
              description="Your Project Description"
              tags={["Tags for your project"]}
           
            />
          </div>
        </section>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-100 dark:via-pink-900/30 to-transparent my-16" />
        {/* Hobbies / Lifestyle */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="p-8 bg-pink-50/50 dark:bg-pink-950/20 rounded-[2.5rem] border border-pink-100 dark:border-pink-900/30"
          >
            <h3 className="text-lg font-black text-pink-500 uppercase mb-6 flex items-center gap-2">
              <FaGamepad /> Offline Mode (Hobby)
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <FaGamepad />, text: "Playing Games" },
                { icon: <GiEightBall />, text: "Playing 8 Ball Pool" },
                { icon: <GiShuttlecock />, text: "Playing Badminton" },
                { icon: <GiPingPongBat />, text: "Playing Table Tennis during recess" },
                
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 font-bold text-gray-600 dark:text-gray-300"
                >
                  <span className="p-2 bg-white dark:bg-gray-800 rounded-lg text-pink-400 shadow-sm">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="p-8 bg-white dark:bg-white/5 rounded-[2.5rem] border border-pink-100 dark:border-pink-900/30 shadow-sm"
          >
            <h3 className="text-lg font-black text-pink-500 uppercase mb-6 flex items-center gap-2">
              <FaCode /> Socials
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/ahiru_sareas/"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group"
              >
                <FaInstagram className="text-xl" />
                <span className="font-bold text-sm">Instagram</span>
              </a>
            </div>
          </motion.div>
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

export default AhiruPage;
