"use client";

export default function LearningCulture() {
  const features = [
    "AI & Machine Learning Workshops",
    "Cloud Infrastructure Training",
    "Cybersecurity Awareness Sessions",
    "Internal Technical Bootcamps",
    "Weekly Knowledge Sharing Events",
  ];

  return (
    <section className="w-full py-4 animate-fade-in">
      <div className="bg-[#0a1931] rounded-[40px] p-6 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800/60">
        {/* Image Floating Circles Row */}
        <div className="flex justify-center gap-3 sm:gap-6 md:gap-8 mb-12">
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 bg-white flex items-center justify-center p-3 shadow-xl transition-transform hover:scale-105 duration-300">
            <img
              src="/assets/vapt-img1.png"
              alt="Knowledge sharing"
              className="object-contain max-h-full"
            />
          </div>
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 bg-white flex items-center justify-center p-3 shadow-xl transition-transform hover:scale-105 duration-300">
            <img
              src="/assets/vapt-img2.png"
              alt="Innovation Process"
              className="object-contain max-h-full"
            />
          </div>
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 bg-white flex items-center justify-center p-3 shadow-xl transition-transform hover:scale-105 duration-300">
            <img
              src="/assets/vapt-img3.png"
              alt="Hackathons & Tech"
              className="object-contain max-h-full"
            />
          </div>
        </div>

        {/* Central Title Details */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#112240] text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 mb-4">
            LEARNING CULTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Knowledge Sharing & Innovation
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Sharing knowledge and inspiring innovation are important parts of
            our culture. We regularly conduct workshops, seminars, hackathons,
            and technical sessions to strengthen our team's expertise and
            encourage continuous learning.
          </p>
        </div>

        {/* Responsive Features Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#112240]/60 hover:bg-[#112240] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 rounded-xl p-4 cursor-pointer group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shrink-0"></span>
              <p className="text-slate-300 group-hover:text-white text-xs sm:text-sm md:text-base font-medium transition-colors duration-300">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}