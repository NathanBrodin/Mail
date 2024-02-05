type TestimonialProps = {
  body: string;
  author: string;
  position: string;
};

export default function Testimonial({
  body,
  author,
  position,
}: TestimonialProps) {
  return (
    <div className="hover:translate-y-2 transition-all">
      <figure className="space-y-6 rounded-2xl bg-gradient-to-b from-black/50 to-black/40 backdrop-blur-lg p-6 shadow-lg ring-1 ring-gray-300/10 transition">
        <blockquote className="text-gray-100">
          <p>{`"${body}`}</p>
        </blockquote>
        <figcaption className="flex items-center gap-x-4">
          <div className="bg-gray-600 h-10 w-10 flex-none rounded-full"></div>
          <div className="flex-auto">
            <div className="font-semibold">{author}</div>
            <div className="text-gray-400">{position}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
