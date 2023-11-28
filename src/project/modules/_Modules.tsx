import { modules } from '../../shared/types/Module';
import ColumnHeader from '../_ColumnHeader';
import { ModuleItem } from './_ModuleItem';

export default function Modules() {
  return (
    <div className='flex flex-col gap-4'>
      <ColumnHeader columnTitle='Modules' />
      {modules.map((module) => {
        return <ModuleItem module={module} key={module.name} />;
      })}
    </div>
  );
}
