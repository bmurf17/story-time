interface Props {
  title: string;
  description: string;
  img: string;
  alt: string;
}

export default function HighlightCard({ title, description, img, alt }: Props) {
  return (
    <div className='rounded shadow-lg flex bg-slate-200'>
      <img className='w-2/5' src={img} alt={alt} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
}
