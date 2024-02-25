import { Link } from 'react-router-dom';
import HighlightCard from './_HighlightCard';
import ProjectScroller from './_ProjectScroller';
import CustomButton from '../shared/components/CustomButton';

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
      <Link to={'/createProject'}>
        <CustomButton
          disabled={false}
          title='Or Create a new Project'
          containerStyles={
            'text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
          }
        />
      </Link>
      <ProjectScroller />
    </div>
  );
}
