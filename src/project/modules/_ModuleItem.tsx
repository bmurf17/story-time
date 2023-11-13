import { Link } from 'react-router-dom';
import { Module } from '../../shared/types/Module';

interface Props {
  module: Module;
}

export function ModuleItem({ module }: Props) {
  return (
    <div className='rounded overflow-hidden shadow-lg bg-slate-200'>
      <Link to={module.link}>
        <div className='px-6 py-4 flex '>
          <div className='flex items-center gap-4'>
            {module.icon}
            <div className='flex flex-col'>
              <div className=' text-xl font-medium text-gray-900 mb-1'>{module.name}</div>
              <p className='text-gray-700 text-base'>{module.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
