import GopuramMotif from "./GopuramMotif";

export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <GopuramMotif className={`w-8 h-8 mb-3 ${light ? "text-gold-400" : "text-maroon-700"}`} />
      {eyebrow && (
        <p className={`uppercase tracking-[0.25em] text-xs mb-2 ${light ? "text-gold-400" : "text-maroon-700/70"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl md:text-4xl ${light ? "text-sandal" : "text-maroon-900"}`}>{title}</h2>
      <div className={`kolam-rule w-24 mt-4 ${light ? "text-gold-400" : "text-maroon-700"}`} />
    </div>
  );
}
