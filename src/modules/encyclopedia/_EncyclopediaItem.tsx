import { Link } from 'react-router-dom';

interface Props {
  name: string;
  type: string;
  link: string;
}

export function EncyclopediaItem({ name, type, link }: Props) {
  return (
    <div className='rounded overflow-hidden shadow-lg bg-slate-200'>
      <Link to={link}>
        <div className='px-6 py-4 flex '>
          <div className='flex flex-col'>
            <div className=' text-xl font-medium text-gray-900 mb-1'>{name}</div>
            <p className='text-gray-700 text-base'>{type}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
