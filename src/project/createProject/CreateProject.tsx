import CustomButton from '../../shared/components/CustomButton';
import CustomInput from '../../shared/components/CustomInput';

export default function CreateProject() {
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
      <div className='container flex flex-col gap-2'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>Create a New Project</h1>
          <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            Enter the details for your new project below.
          </p>
        </div>
        <div className='grid gap-4'>
          <div className='grid gap-1'>
            <CustomInput
              id='name'
              inputClasses='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              labelClasses='md:w-1/3'
              label='Project Name'
              type='text'
            />
          </div>
          <div className='grid gap-1'>
            <CustomInput
              id='Description'
              inputClasses='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              labelClasses='md:w-1/3'
              label='Description'
              type='text'
            />
          </div>
          <div className='grid gap-1'>
            <CustomInput
              id='imageUrl'
              inputClasses='appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              labelClasses='md:w-1/3'
              label='Image Url'
              type='text'
            />
          </div>
          <CustomButton
            disabled={false}
            title='Create Project'
            containerStyles='text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
          />
        </div>
      </div>
      <div className='container flex flex-col gap-2 pt-10'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>Your Projects</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'></div>
      </div>
    </main>
  );
}

// function BookOpenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
//       <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
//     </svg>
//   );
// }

// function GitBranchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <line x1='6' x2='6' y1='3' y2='15' />
//       <circle cx='18' cy='6' r='3' />
//       <circle cx='6' cy='18' r='3' />
//       <path d='M18 9a9 9 0 0 1-9 9' />
//     </svg>
//   );
// }

// function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
//       <path d='M9 18c-4.51 2-5-2-7-2' />
//     </svg>
//   );
// }

// function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
//       <polyline points='9 22 9 12 15 12 15 22' />
//     </svg>
//   );
// }

// function LayoutPanelLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <rect width='7' height='18' x='3' y='3' rx='1' />
//       <rect width='7' height='7' x='14' y='3' rx='1' />
//       <rect width='7' height='7' x='14' y='14' rx='1' />
//     </svg>
//   );
// }

// function MoreHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns='http://www.w3.org/2000/svg'
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke='currentColor'
//       strokeWidth='2'
//       strokeLinecap='round'
//       strokeLinejoin='round'>
//       <circle cx='12' cy='12' r='1' />
//       <circle cx='19' cy='12' r='1' />
//       <circle cx='5' cy='12' r='1' />
//     </svg>
//   );
// }
