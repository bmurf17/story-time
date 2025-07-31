interface Props {
  title: string;
  description: string;
  img: string;
  alt: string;
}

export default function Card({ title, description, img, alt }: Props) {
  return (
    <div className="w-full h-96 rounded overflow-hidden shadow-lg bg-slate-200 flex flex-col">
      <div className="h-48 overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={alt}
          loading="lazy"
        />
      </div>

      <div className="px-6 py-4 flex-1 flex flex-col">
        <div className="font-bold text-xl mb-2 line-clamp-2">{title}</div>
        <p className="text-gray-700 text-base line-clamp-3 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}
