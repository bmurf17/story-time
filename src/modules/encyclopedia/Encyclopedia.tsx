import ColumnHeader from '../../shared/ColumnHeader';
import { SearchBar } from '../../shared/SearchBar';
import { EncyclopediaItem } from './_EncyclopediaItem';

const eItems = [
  {
    name: 'string1',
    type: 'string',
    link: 'string',
  },
  {
    name: 'string2',
    type: 'string',
    link: 'string',
  },
  {
    name: 'string3',
    type: 'string',
    link: 'string',
  },
];

export default function Encyclopedia() {
  return (
    <div className='flex flex-col m-4 justify-center gap-4'>
      <div className='flex w-full'>
        <SearchBar />
      </div>
      <div className='flex justify-between md:flex-row flex-col gap-4  w-full'>
        <div className='flex flex-col gap-4 w-full justify-center'>
          <ColumnHeader columnTitle={'Recent'} />
          {eItems.map((item) => {
            return (
              <EncyclopediaItem
                key={item.name}
                link={item.link}
                name={item.name}
                type={item.type}
              />
            );
          })}
          <div className='flex justify-center'>{'< 1/4 >'}</div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <ColumnHeader columnTitle={'Pinned'} />
          {eItems.map((item) => {
            return (
              <EncyclopediaItem
                key={item.name}
                link={item.link}
                name={item.name}
                type={item.type}
              />
            );
          })}
          <div className='flex justify-center'>{'< 1/4 >'}</div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <ColumnHeader columnTitle={'Outlines and Articles'} />
          {eItems.map((item) => {
            return (
              <EncyclopediaItem
                key={item.name}
                link={item.link}
                name={item.name}
                type={item.type}
              />
            );
          })}
          <div className='flex justify-center'>{'< 1/4 >'}</div>
        </div>
      </div>
    </div>
  );
}
