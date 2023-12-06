import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

export default function NavTodo() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-base font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}>
            <span>Add a Todo</span>
            <ChevronDownIcon
              className={`${open ? 'text-purple-300' : 'text-purple-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-purple-300/80`}
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'>
            <Popover.Panel className='absolute left-3/4 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 '>
              <div className='flex flex-col gap bg-slate-200 rounded-md p-4'>
                <div className='md:flex md:items-center'>
                  <div className='md:w-1/3'>
                    <label className='block text-gray-500 font-bold md:text-right mb-0 pr-4'>
                      Description
                    </label>
                  </div>
                  <div className='md:w-2/3'>
                    <input
                      className='  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                      id='inline-full-name'
                      type='text'
                    />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
