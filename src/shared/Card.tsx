interface Props {
  title: string;
  description: string;
  img: string;
  alt: string;
}

export default function Card({ title, description, img, alt }: Props) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-slate-200'>
      <img className='w-full' src={img} alt={alt} loading='lazy' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
}
