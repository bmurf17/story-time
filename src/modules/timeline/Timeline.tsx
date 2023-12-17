import { tempTimeLine } from '../../shared/types/TimeLineItem';
import TimelineItem from './_TimeLineItem';

export default function Timeline() {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div className='bg-red-400 w-2 absolute left-1/2 h-full'> </div>
        {tempTimeLine.map((timeLineItem, index) => {
          return (
            <div
              key={timeLineItem.title}
              className={index % 2 === 0 ? 'flex justify-start max-w' : ' flex justify-end'}>
              {index % 2 === 0 ? (
                <div className=' translate-y-14 translate-x-60 rotate-45 w-4 h-4 bg-slate-200 border-t border-r border-indigo-500'></div>
              ) : (
                <div className=' translate-y-14 translate-x-2 rotate-45 w-4 h-4 bg-slate-200 border-b border-l border-indigo-500'></div>
              )}
              <TimelineItem timeLineItem={timeLineItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
