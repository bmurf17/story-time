import { tempTimeLine } from '../../shared/types/TimeLineItem';
import TimelineItem from './_TimeLineItem';

export default function Timeline() {
  return (
    <div className='flex flex-col gap-4 '>
      <div className='bg-red-400 w-2 absolute left-1/2 h-full'> </div>
      {tempTimeLine.map((timeLineItem, index) => {
        return (
          <div
            key={timeLineItem.title}
            className={
              index % 2 === 0 ? 'flex justify-start   pr-28 ' : ' flex justify-end   pl-28'
            }>
            {index % 2 === 0 ? (
              <div className=' translate-y-14  md:translate-x-[559px] rotate-45 w-4 h-4 bg-slate-200 border-t border-r border-red-500'></div>
            ) : (
              <div className=' translate-y-14 translate-x-2 rotate-45 w-4 h-4 bg-slate-200 border-b border-l border-red-500'></div>
            )}
            <div className='w-1/2'>
              <TimelineItem timeLineItem={timeLineItem} />
            </div>
            <span className='bg-white border-2 border-solid border-red-400 rounded-full absolute left-1/2 -translate-x-1.5 translate-y-14  w-5 h-5 z-10' />
          </div>
        );
      })}
    </div>
  );
}
