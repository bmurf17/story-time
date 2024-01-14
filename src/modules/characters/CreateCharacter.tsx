import { Tab } from '@headlessui/react';
import { useState } from 'react';
import Spotlight from '../../shared/Spotlight';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface Tabs {
  name: string;
  fields: { [key: string]: string }[];
}

export default function CreateCharacter() {
  const [categories] = useState<Tabs[]>([
    {
      name: 'Basic Info',
      fields: [
        { 'First Name': 'text' },
        { Pronouns: 'text' },
        { Species: 'text' },
        { Occupation: 'text' },
        { Height: 'text' },
        { Weight: 'text' },
        { Age: 'text' },
      ],
    },
    {
      name: 'Tab 2',
      fields: [
        { 'First Name': 'text' },
        { Pronouns: 'text' },
        { Species: 'text' },
        { Occupation: 'text' },
        { Height: 'text' },
        { Weight: 'text' },
        { Age: 'text' },
      ],
    },
  ]);
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
              {categories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-blue-700 shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }>
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='mt-2'>
              {categories.map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    ' focus:outline-none focus:ring-2'
                  )}>
                  <div className='grid grid-cols-2 gap-4'>
                    {posts.fields.map((field) => {
                      const [key, value] = Object.entries(field)[0];
                      return (
                        <div className='flex items-center'>
                          <div className='md:w-1/3'>
                            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                              {key}
                            </label>
                          </div>
                          <div className='md:w-2/3'>
                            <input
                              className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                              id={key + value}
                              type='text'
                              defaultValue='Jane Doe'
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className='flex items-center justify-center text-blue-500 text-xl cursor-pointer'>
                      + Add a Field
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
