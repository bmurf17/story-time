import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import Card from '../../shared/Card';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Character() {
  const [categories] = useState({
    List: [
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
    ],
    Grid: [
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
    ],
    Map: [
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
    ],
  });

  return (
    <div className='w-full px-2  sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}>
              {idx === 0 ? (
                <ul>
                  <li className='relative rounded-md p-3 hover:bg-gray-100'>
                    <h3 className='text-md font-medium leading-5 text-blue-600'>
                      <FontAwesomeIcon size='sm' className='mr-4' icon={faAdd} />
                      Add A Character
                    </h3>
                  </li>
                  {posts.map((post) => (
                    <li key={post.id} className='relative rounded-md p-3 hover:bg-gray-100'>
                      <h3 className='text-sm font-medium leading-5'>{post.title}</h3>

                      <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                        <li>{post.date}</li>
                      </ul>
                      <a
                        href='#'
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  {idx === 1 ? (
                    <div className='relative rounded-md p-3 '>
                      <div className='grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                        <Card
                          img='https://v1.tailwindcss.com/img/card-top.jpg'
                          alt='Sunset in the mountains'
                          description='Add a new Character'
                          title='Add a character'
                        />
                        {posts.map((post) => (
                          <Card
                            key={post.id}
                            img='https://v1.tailwindcss.com/img/card-top.jpg'
                            alt='Sunset in the mountains'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
                            title='The Coldest Sunset'
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>Map THIS WILL TAKE A LOT OF WORK</>
                  )}
                </>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
