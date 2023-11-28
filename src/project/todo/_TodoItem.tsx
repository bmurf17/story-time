import { Todo } from '../../shared/types/Todo';

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  return (
    <div className='rounded overflow-hidden shadow-lg bg-slate-200'>
      <div className='px-6 py-4 flex '>
        <div className='flex items-center '>
          <input
            id='default-checkbox'
            type='checkbox'
            defaultChecked={todo.done}
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 focus:ring-2'
          />
          <div className='ms-2 text-xl font-medium text-gray-900 mb-1'>{todo.description}</div>
        </div>
      </div>
    </div>
  );
}
