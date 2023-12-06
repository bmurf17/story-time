import { Tab } from '@headlessui/react';
import { useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CreateCharacter() {
  const [categories] = useState({
    Recent: [
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
    Popular: [
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
    Trending: [
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

  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-3'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 p-4'>
          <div className='flex flex-col gap-4'>
            <img
              className='object-contain '
              src={
                'data:image/jpeg;base64,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'
              }
              alt={'Picture of Character'}
            />
            <form className='w-full max-w-sm'>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Full Name
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Pronouns
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Species
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Occupation
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Height
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Weight
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
              <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                  <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Age
                  </label>
                </div>
                <div className='md:w-2/3'>
                  <input
                    className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    id='inline-full-name'
                    type='text'
                    value='Jane Doe'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
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