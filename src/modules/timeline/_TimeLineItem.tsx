import { TimeLineItem } from '../../shared/types/TimeLineItem';

interface Props {
  timeLineItem: TimeLineItem;
}

export default function TimelineItem({ timeLineItem }: Props) {
  return (
    <div className='w-full rounded  shadow-lg bg-slate-200 flex flex-col gap-2 p-4'>
      <span className='bg-red-400 flex justify-center '>{timeLineItem.category}</span>

      <div className='font-bold text-xl '>{timeLineItem.title}</div>
      <div className='text-gray-700 text-base'>{timeLineItem.description}</div>
    </div>
  );
}
