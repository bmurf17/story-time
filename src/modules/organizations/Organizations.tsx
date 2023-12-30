import { useState } from 'react';
import TabViewOfObjects from '../../shared/TabViewOfObjects';
import { Categories } from '../../shared/types/Categories';
import { list, grid, map } from '../../shared/types/Post';

export default function Organizations() {
  const [categories] = useState<Categories>({
    list: list,
    grid: grid,
    map: map,
  });

  return (
    <div className='w-full px-2  sm:px-0'>
      <TabViewOfObjects categories={categories} createLink='/traverseOrganization' />
    </div>
  );
}
