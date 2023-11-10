import ActivityLog from './_ActivityLog';
import Modules from './_Modules';
import Todos from './_Todos';

export default function Project() {
  return (
    <div className='flex md:flex-row flex-col gap-4 md:justify-between '>
      <div className=''>
        <ActivityLog></ActivityLog>
      </div>
      <div className=''>
        <Todos></Todos>
      </div>
      <div className=''>
        <Modules></Modules>
      </div>
    </div>
  );
}
