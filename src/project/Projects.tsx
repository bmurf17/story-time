import ActivityLog from './activities/_ActivityLog';
import Modules from './modules/_Modules';
import Todos from './todo/_Todos';

export default function Project() {
  return (
    <div className='flex md:flex-row flex-col gap-4 md:justify-between '>
      <div className='md:w-full mb-8'>
        <ActivityLog></ActivityLog>
      </div>
      <div className='md:w-full mb-8'>
        <Todos></Todos>
      </div>
      <div className='md:w-full mb-8'>
        <Modules></Modules>
      </div>
    </div>
  );
}
