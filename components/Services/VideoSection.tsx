import { VideoSection as VideoSectionType } from "@/lib/service-data";

interface Props {
  video: VideoSectionType;
}

export default function VideoSection({ video }: Props) {
  return (
    <section className="relative bg-blue-100  py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
            {video.title}
          </h2>
          {video.subtitle && (
            <p className="text-black  text-sm">{video.subtitle}</p>
          )}
        </div>

        {/* Video Embed */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src={video.videoUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}