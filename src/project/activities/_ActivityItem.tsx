import { Activity } from '../../shared/types/Activity';

interface Props {
  activity: Activity;
}

export function ActivityItem({ activity }: Props) {
  return (
    <div className=' rounded overflow-hidden shadow-lg bg-slate-200'>
      <div className='px-6 py-4 flex flex-col'>
        <div className='flex  underline text-xl mb-2'>
          <div>{activity.tableTouched}</div>
        </div>
        <div className='flex font-bold text-xl mb-2'>
          {activity.action}: {'Main Character '}
        </div>
        <div className='flex justify-between'>
          <div className='text-gray-700 text-base'>{activity.lastModifiedBy}</div>
          <p className='text-gray-700 text-base'>{activity.lastModifiedDate.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
