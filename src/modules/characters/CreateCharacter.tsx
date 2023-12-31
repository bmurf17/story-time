import { Tab } from '@headlessui/react';
import { useState } from 'react';
import Spotlight from '../../shared/Spotlight';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CreateCharacter() {
  const [categories] = useState({
    'Basic Info': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Connections: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    'Add A Tab +': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  const fields: Map<string, string> = new Map<string, string>([
    ['First Name', 'text'],
    ['Pronouns', 'text'],
    ['Species', 'text'],
    ['Occupation', 'text'],
    ['Height', 'text'],
    ['Weight', 'text'],
    ['Age', 'text'],
  ]);
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-3'>
        <Spotlight fields={fields} />
      </div>

      <div className='col-span-9 '>
        <div className='rounded overflow-hidden shadow-lg bg-slate-200 p-4'>
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
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className='relative rounded-md p-3 hover:bg-gray-100'>
                        <h3 className='text-sm font-medium leading-5'>{post.title}</h3>

                        <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
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
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
