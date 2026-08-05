import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/Hero/Hero3.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#081B52]/30" />

        <div className="relative mx-auto flex min-h-85 max-w-7xl items-center px-6 lg:px-10">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white">
              Careers
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Join an amazing team that is passionate about
              changing the way people connect and build
              innovative software solutions.
            </p>

            <Link
              href="/Activities/Internship"
              className="mt-10 inline-flex rounded-md bg-linear-to-r from-[#3559d8] to-[#2679ff] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              INTERNSHIP
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-[#202B4A]">
        <div className="mx-auto max-w-7xl">
          <nav className="flex overflow-x-auto">
            <Link
              href="#open-positions"
              className="border-b-4 border-blue-500 px-8 py-6 text-lg font-semibold text-white"
            >
              Career Opportunities
            </Link>

            <Link
              href="#values"
              className="px-8 py-6 text-lg font-semibold text-white/80 transition hover:text-white"
            >
              Our Values
            </Link>

            <Link
              href="#benefits"
              className="px-8 py-6 text-lg font-semibold text-white/80 transition hover:text-white"
            >
              Benefits
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}