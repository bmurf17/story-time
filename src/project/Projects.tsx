import ActivityLog from './activities/_ActivityLog';
import Modules from './_Modules';
import Todos from './_Todos';

export default function Project() {
  return (
    <div className='flex md:flex-row flex-col gap-4 md:justify-between '>
      <div className='w-full'>
        <ActivityLog></ActivityLog>
      </div>
      <div className='w-full'>
        <Todos></Todos>
      </div>
      <div className='w-full'>
        <Modules></Modules>
      </div>
    </div>
  );
}
