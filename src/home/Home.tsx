import { Link } from 'react-router-dom';
import HighlightCard from './_HighlightCard';
import ProjectScroller from './_ProjectScroller';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex'>
        <Link to={'/project'}>
          <HighlightCard
            img='https://v1.tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
            title='The Coldest Sunset'
          />
        </Link>
      </div>

      <ProjectScroller />
    </div>
  );
}
