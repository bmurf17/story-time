import Card from '../shared/Card';
import HighlightCard from './_HighlightCard';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex'>
        <HighlightCard
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          alt='Sunset in the mountains'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
          title='The Coldest Sunset'
        />
      </div>
      <div className='grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          alt='Sunset in the mountains'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
          title='The Coldest Sunset'
        />
        <Card
          img='https://v1.tailwindcss.com/img/card-top.jpg'
          alt='Sunset in the mountains'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
          title='The Coldest Sunset'
        />
      </div>
    </div>
  );
}
