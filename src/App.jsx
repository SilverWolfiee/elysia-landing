import React from 'react';
import cirengPfp from '/home/silverwolf/elysia-landing-page/src/assets/cirengavatar.png'

const MemberCard = ({ name, role, tech, pfp }) => (
  <div className="bg-white/80 backdrop-blur-sm border-2 border-pink-200 p-8 rounded-[2rem] flex flex-col items-center text-center shadow-lg shadow-pink-100/50 hover:border-pink-400 hover:shadow-pink-200/60 transition-all duration-500 group">
    <div className="w-28 h-28 rounded-full border-4 border-pink-100 overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300 shadow-inner">
      <img src={pfp || "/api/placeholder/150/150"} alt={name} className="w-full h-full object-cover rounded-full antialiased" />
      
    </div>
    <h3 className="text-2xl font-bold text-pink-600 mb-1">{name}</h3>
    <div className="h-1 w-12 bg-pink-300 rounded-full mb-4"></div>
    <p className="text-pink-400 text-sm mb-4 font-bold uppercase tracking-widest">{role}</p>
    <div className="text-gray-600 text-sm space-y-2 font-medium">
      {tech.map((item, index) => (
        <p key={index} className="bg-pink-50/50 py-1 px-3 rounded-full border border-pink-50">{item}</p>
      ))}
    </div>
  </div>
);

const ElysiaLandingPage = () => {
  const members = [
    {
      name: "SilverWolf",
      role: "Founder, Backend-dev, Troller, Support",
      tech: ["Major: Computer Science", "Stack: ElysiaJS, Bun, Javascript, typescript, Zig, C, node.js", "Mood: 👾"],
      pfp: cirengPfp
    },
    {
      name: "Gnzyyyyyyy",
      role: "Fullstack-dev, Dongo, Concrete-maker, Ahiru's slave, Duelist, Controller",
      tech: ["Major: Computer Science", "Stack: Java, Springboot, Mongodb, PostgreSQL, React, Next.js", "Mood: ✨"],
      pfp: 'src/assets/sponsor.png'
    },
    {
      name: "AhiruSareas",
      role: "Cook, Main-builder, Idea-initiator, Sentinel",
      tech: ["Major: Culinary", "Stack: Knife, Chef-jacket, Cutting board??", "Mood: 🦆"],
      pfp: 'src/assets/clanker.png'
    }
  ];

  return (
    
    <div className="min-h-screen bg-[#fdf8fb] text-gray-800 font-sans selection:bg-pink-200 selection:text-pink-700">
      
      
      <header className="relative pt-24 pb-16 px-6 text-center overflow-hidden">
        
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-[-5%] w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
        
        <h1 className="relative text-4xl md:text-6xl font-black text-pink-400 drop-shadow-sm tracking-tight mb-4">
          Elysia<span className="text-pink-500">vernight</span>
        </h1>
        <p className="text-pink-400 text-xl font-medium tracking-wide">
          "Hi~ ✨"
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20 pb-24 relative z-10">
        
        
        <section className="bg-white border-2 border-pink-100 rounded-[2.5rem] p-12 shadow-xl shadow-pink-50/50">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌸</span>
            <h2 className="text-3xl font-black text-pink-500 uppercase tracking-tighter">What is Elysiavernight?</h2>
          </div>
          <div className="text-gray-500 leading-relaxed text-lg italic border-l-4 border-pink-200 pl-6 py-2">
            
            A team of 3 dongo's consisting of SilverWolf, Gnzyyyyyyy and AhiruSareas. Lowkey don't even know how we got close bleh
            but anyways.
          </div>
        </section>

        
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-pink-500">Meet the Members</h2>
            <p className="text-pink-300 font-bold tracking-widest mt-2 uppercase">The 'dongo' Crew</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {members.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </div>
        </section>

      </main>
      <footer className="bg-white border-t border-pink-100 py-12 text-center">
        <div className="max-w-xs mx-auto mb-6 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
        <p className="text-pink-300 font-medium italic">© {new Date().getFullYear()} Elysiavernight.com</p>
        <p className="mt-3 text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
          Powered by <span className="text-pink-500 hover:text-pink-600 transition-colors cursor-pointer">DewaVPS</span>
        </p>
      </footer>
    </div>
  );
};

export default ElysiaLandingPage;