import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import romanticStory from "../assets/Audios/PastReverie.mp3"
import {
    FaCode, FaGamepad, FaArrowLeft,
    FaGithub, FaInstagram, FaMicrophone, FaTiktok, FaYoutube, FaGlobe, FaPlay, FaPause, FaVolumeUp, FaTwitter
} from "react-icons/fa";

import { GiEightBall } from "react-icons/gi";
import { SiNodedotjs, SiBun, SiArchlinux, SiSqlite, SiReact, SiC, SiRust, SiZig, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";


import cirengPfp from "../assets/cirengavatar.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SkillBadge = ({ icon, label }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="flex flex-col items-center gap-3 p-6 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-pink-100 dark:border-pink-900/30 rounded-3xl shadow-sm hover:border-pink-400 transition-colors"
    >
        <div className="text-3xl text-pink-500">{icon}</div>
        <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</span>
    </motion.div>
);

const ProjectCard = ({ title, description, githubLink, githubLink2, liveLink, tags }) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        className="group p-8 bg-white/70 dark:bg-white/5 backdrop-blur-xl border-2 border-pink-100 dark:border-pink-900/50 rounded-[2.5rem] shadow-lg hover:border-pink-400 transition-all flex flex-col h-full"
    >
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-black text-pink-600 dark:text-pink-400 tracking-tighter">{title}</h3>
            <div className="flex gap-2">

                <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-2xl hover:bg-pink-500 hover:text-white transition-all shadow-sm"
                >
                    <FaGithub className="text-xl" />
                </a>
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
                <span key={i} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);



const MusicPlayer = () => {

    const [volume, setVolume] = React.useState(() => {
        const savedVolume = localStorage.getItem('music-volume');
        return savedVolume !== null ? parseFloat(savedVolume) : 0.5;
    });

    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(null);

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;

            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => console.log("Waiting for Trailblazer interaction..."));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVol = parseFloat(e.target.value);
        setVolume(newVol);

        if (audioRef.current) {
            audioRef.current.volume = newVol;
        }

        localStorage.setItem('music-volume', newVol);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 group pointer-events-auto">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-pink-100 dark:border-pink-900/50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-pink-500 uppercase tracking-tighter">HOYOMIX - Ripples of Past Reverie</span>
            </div>
            <div className="flex items-center gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-4 rounded-3xl border-2 border-pink-200 dark:border-pink-900/50 shadow-2xl">

                <audio ref={audioRef} src={romanticStory} loop />

                <button
                    onClick={togglePlay}
                    className="w-12 h-12 flex items-center justify-center bg-pink-500 text-white rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-lg hover:bg-pink-600"
                >
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                </button>

                <div className="flex items-center gap-2">
                    <FaVolumeUp className="text-pink-400 text-sm" />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 h-1.5 bg-pink-100 dark:bg-pink-900/30 rounded-lg appearance-none cursor-pointer accent-pink-500"
                    />
                </div>
            </div>
        </div>
    );
};
const SilverWolfPage = () => {
    return (

        <div className="min-h-screen bg-[#fefaff] dark:bg-[#0f0f14] text-gray-800 dark:text-gray-200 font-sans selection:bg-pink-200">
            <MusicPlayer />
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
                <Link to="/" className="pointer-events-auto group flex items-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-pink-100 dark:border-pink-900/50 shadow-lg hover:bg-pink-500 hover:text-white transition-all">
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
                            <img src={cirengPfp} alt="Wolfie Po Rao" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-4 rounded-2xl shadow-xl">
                            <FaCode className="text-2xl" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-8xl font-black text-pink-600 dark:text-pink-400 tracking-tighter mb-4"
                    >
                        Silver Wolf
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-pink-400 dark:text-pink-500 font-bold uppercase tracking-[0.4em] text-sm"
                    >
                        Founder | Backend-Dev | HSR-0-Cyclist
                    </motion.p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 space-y-24 pb-32">

                {/* About Section */}
                <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border-2 border-pink-100 dark:border-pink-900/50 p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-pink-100 dark:text-pink-900/20 text-9xl font-black select-none pointer-events-non e">
                            {/* 01 */}
                        </div>
                        <h2 className="text-3xl font-black text-pink-500 mb-6 text-center">
                            Love is an Energy That Transcends dimensions of Time and Space.
                            <br />
                            <br />
                            "Let humanity proof to you that even the breeding ground of destruction, can bloom with gentle flowers of Love"
                            <br />
                            <span className="text-xl opacity-70 italic font-medium mt-4 block">
                                — Cyrene(HSR) & Amelia Brand(Interstellar)  —
                            </span>
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed italic">
                            Hi, I am SilverWolf, Also Known as Wolfie or SWolf Pờ Rào. I'm 19 years old with Specialty in Backend Development.
                            Started Programming With C now im Tackling Rust like it's An HSR MOC-12 Challenge. My Favorite Stack to use is ElysiaJS
                            Paired with React(vite) and Zig as my favorite low-level language.
                            <br /><br />
                            Personally, For me, Cyrene is a role-model for me as she always reminds me that even in dire circumstances, there are hope. If you can't fulfill it today, Send it to tomorrow.
                        </p>
                    </div>
                </motion.section>

                {/* Tech Stack Grid */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-black text-pink-500 uppercase tracking-tighter">Tech-Stacks</h2>
                        <div className="h-[2px] flex-1 bg-pink-100 dark:bg-pink-900/30"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <SkillBadge icon={<SiArchlinux />} label="Arch-Linux" />
                        <SkillBadge icon={<SiBun />} label="Bun" />
                        <SkillBadge icon={<SiSqlite />} label="Sqlite" />
                        <SkillBadge icon={<SiNodedotjs />} label="Node.js" />
                        <SkillBadge icon={<SiC />} label="C" />
                        <SkillBadge icon={<SiZig />} label="Zig-Zag-Goon" />
                        <SkillBadge icon={<SiRust />} label="Rust" />
                        <SkillBadge icon={<SiReact />} label="React" />
                        <SkillBadge icon={<SiHtml5 />} label="Html5" />
                        <SkillBadge icon={<SiCss3 />} label="CSS3" />
                        <SkillBadge icon={<SiJavascript />} label="Javascript" />
                        <SkillBadge icon={<SiTypescript />} label="Typescript" />
                        <SkillBadge icon={<SiTailwindcss />} label="TailwindCss" />
                    </div>
                </section>
                {/* Projects Section */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-black text-pink-500 text-center uppercase tracking-tighter">Projects / Works</h2>
                        <div className="h-[2px] flex-1 bg-pink-100 dark:bg-pink-900/30"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <ProjectCard
                            title="Elysiavernight.com"
                            description="The very site you're looking at! A high-performance landing page built with Vite, React, and Tailwind CSS, featuring a custom dark mode and Framer Motion animations."
                            githubLink="https://github.com/Elysiavernight/elysia-landing"
                            liveLink="https://elysiavernight.com"
                            tags={["React", "Tailwind", "Vite"]}
                        />

                        <ProjectCard
                            title="Relic-Builder"
                            description="A Honkai Star Rail Relic-builder to build Characters config.json for a Certain Zig Server By Hulina02. Originally by Samsul, Continue to be Maintained by me."
                            githubLink="https://github.com/samsulpanjul/relic-builder"
                            liveLink="https://relic-builder.vercel.app/"
                            tags={["HSR", "React", "JSON", "Api-Calling"]}
                        />
                        <ProjectCard
                            title="Fuchsia-Todo-list"
                            description="A Strinova Themed To Do List specifically the Aggresive Duelist Fuchsia. My First Software Released, helps me in keeping track my assignments and quiz"
                            githubLink="https://github.com/SilverWolfiee/Fuchsia-Todo-list"
                            tags={["Strinova", "HTML-JS-CSS", "UI/UX"]}
                        />
                        <ProjectCard
                            title="March7th-Weather-App"
                            description="A March7th Themed Weather App Built in Rust(Tauri), Featuring API Calls from a proper backend server Built with ElysiaJS"
                            githubLink="https://github.com/SilverWolfiee/March7th-weather-app"
                            githubLink2="https://github.com/SilverWolfiee/elysia-weather"
                            tags={["March7th", "Server Development", "UI/UX", "ElysiaJS", "Rust"]}
                        />
                        <ProjectCard
                            title="Internet-Cafe-backend-server(WIP)"
                            description="A Backend server for a college project. The theme is about simulating an internet cafe system"
                            githubLink="https://github.com/SE-Elysia1/SE-elysia-backend"
                            tags={["ElysiaJS", "College", "Software-Engineering", "Api-Designing"]}
                        />
                        <ProjectCard
                            title="Hello, World!"
                            description="A simple Hello-World repository where i try to write Hello, World in all the languages i've known to remember Cyrene's Heroic Story for Amphoreus"
                            githubLink="https://github.com/SilverWolfiee/Hello-World"
                            tags={["HSR", "Cyrene", "Amphoreus", "Irontomb", "Scepter δ-me13"]}
                        />
                    </div>
                </section>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-100 dark:via-pink-900/30 to-transparent my-16" />
                {/* Hobbies / Lifestyle */}
                <section className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        variants={fadeInUp} initial="hidden" whileInView="visible"
                        className="p-8 bg-pink-50/50 dark:bg-pink-950/20 rounded-[2.5rem] border border-pink-100 dark:border-pink-900/30"
                    >
                        <h3 className="text-lg font-black text-pink-500 uppercase mb-6 flex items-center gap-2">
                            <FaGamepad /> Offline Mode (Hobby)
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { icon: <FaGamepad />, text: "Playing HSR" },
                                { icon: <GiEightBall />, text: "Playing 8 Ball Pool" },
                                { icon: <FaCode />, text: "Coding Random Projects" },
                                { icon: <FaMicrophone />, text: "Singing Out Loud" },

                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 font-bold text-gray-600 dark:text-gray-300">
                                    <span className="p-2 bg-white dark:bg-gray-800 rounded-lg text-pink-400 shadow-sm">{item.icon}</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp} initial="hidden" whileInView="visible"
                        className="p-8 bg-white dark:bg-white/5 rounded-[2.5rem] border border-pink-100 dark:border-pink-900/30 shadow-sm"
                    >
                        <h3 className="text-lg font-black text-pink-500 uppercase mb-6 flex items-center gap-2">
                            <FaCode /> Socials
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="https://github.com/SilverWolfiee" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group">
                                <FaGithub className="text-xl" />
                                <span className="font-bold text-sm">GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/silverwolfzzz/" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group">
                                <FaInstagram className="text-xl" />
                                <span className="font-bold text-sm">Instagram</span>
                            </a>
                            <a href="https://www.tiktok.com/@silverwolfieeee" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group">
                                <FaTiktok className="text-xl" />
                                <span className="font-bold text-sm">Main Tiktok</span>

                            </a>
                            <a href="https://www.tiktok.com/@fuchsiashark" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group">
                                <FaTiktok className="text-xl" />
                                <span className="font-bold text-sm">OMG Lek Tiktok</span>

                            </a>
                            <a href="https://www.youtube.com/@SilverWolfzz" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group">
                                <FaYoutube className="text-xl" />
                                <span className="font-bold text-sm">Youtube</span>

                            </a>
                            <a href="https://x.com/WFP_HxTao" target="_blank" className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-pink-500 hover:text-white transition-all group">
                                <FaTwitter className="text-xl" />
                                <span className="font-bold text-sm">Twitter</span>

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
                    Powered and funded by <span className="text-pink-600">Elysiavernight</span>
                </p>
                <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
                    © 2026 ELYSIAVERNIGHT All Rights Reserved
                </p>
            </footer>
        </div>
    );
};

export default SilverWolfPage;
