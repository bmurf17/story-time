import { useState } from 'react';
import TabViewOfObjects, { Categories } from '../../shared/TabViewOfObjects';

const list = [
  {
    id: 1,
    title: 'Does drinking coffee make you smarter?',
    date: '5h ago',
  },
  {
    id: 2,
    title: "So you've bought coffee... now what?",
    date: '2h ago',
  },
];

const grid = [
  {
    id: 1,
    title: 'Is tech making coffee better or worse?',
    date: 'Jan 7',
  },
  {
    id: 2,
    title: 'The most innovative things happening in coffee',
    date: 'Mar 19',
  },
];

const map = [
  {
    id: 1,
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    date: '2d ago',
  },
  {
    id: 2,
    title: "The worst advice we've ever heard about coffee",
    date: '4d ago',
  },
];

export default function Character() {
  const [categories] = useState<Categories>({
    list: list,
    grid: grid,
    map: map,
  });

  return (
    <div className='w-full px-2  sm:px-0'>
      <TabViewOfObjects categories={categories} createLink='/createCharacter' />
    </div>
  );
}
