import { useState } from 'react';
import TabViewOfObjects from '../../shared/TabViewOfObjects';
import { Categories } from '../../shared/types/Categories';
import { grid, list, map } from '../../shared/types/Post';

export default function KeyItems() {
  const [categories] = useState<Categories>({
    list: list,
    grid: grid,
    map: map,
  });

  return (
    <div className='w-full px-2  sm:px-0'>
      <TabViewOfObjects categories={categories} createLink='/createItems' />
    </div>
  );
}
