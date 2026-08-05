import { RoadmapStep } from "@/lib/service-data";

interface Props {
  title: string;
  steps: RoadmapStep[];
}

export default function RoadmapSection({ title, steps }: Props) {
  return (
    <section className="bg-white py-20 px-8 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0a1b3d] mb-16">
          {title}
        </h2>

        {/* Timeline */}
        <div className="relative min-w-225 py-16">
          {/* Horizontal line with arrow */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-gray-300 via-gray-400 to-gray-300 -translate-y-1/2">
            {/* Arrow at end */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-10 border-l-gray-400"></div>
          </div>

          {/* Steps */}
          <div
            className="relative grid gap-4"
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center"
              >
                {/* Top label */}
                {step.position === "top" && (
                  <div className="absolute bottom-full mb-6 text-center w-32">
                    <p className="text-xs md:text-sm text-gray-700 leading-tight">
                      {step.title}
                    </p>
                    {/* Vertical line to dot */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-300 mt-1"></div>
                  </div>
                )}

                {/* Dot on line */}
                <div className="relative w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 ring-4 ring-white z-10"></div>

                {/* Bottom label */}
                {step.position === "bottom" && (
                  <div className="absolute top-full mt-6 text-center w-32">
                    {/* Vertical line to dot */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-300 mb-1"></div>
                    <p className="text-xs md:text-sm text-gray-700 leading-tight">
                      {step.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}