import { SearchBar } from '../../shared/SearchBar';

export default function Resources() {
  return (
    <div className='flex flex-col gap-4'>
      <SearchBar />
      <div>
        <table className='table-auto w-full text-left'>
          <thead className='bg-slate-200'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th className='px-6 py-3'>File Type</th>
              <th className='px-6 py-3'>Date Added</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            <tr className='bg-white border-b'>
              <td className='px-6 py-4'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className='px-6 py-4'>Malcolm Lockyer</td>
              <td className='px-6 py-4'>1961</td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-6 py-4'>Witchy Woman</td>
              <td className='px-6 py-4'>The Eagles</td>
              <td className='px-6 py-4'>1972</td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-6 py-4'>Shining Star</td>
              <td className='px-6 py-4'>Earth, Wind, and Fire</td>
              <td className='px-6 py-4'>1975</td>
            </tr>
          </tbody>
        </table>
        <div className='bg-slate-200 flex justify-center font-bold'>{'< 1/4 >'}</div>
      </div>
    </div>
  );
}
