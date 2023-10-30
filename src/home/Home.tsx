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
      <div className='flex gap-4 overflow-auto'>
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
