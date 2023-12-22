import { tempTodos } from '../../shared/types/Todo';
import ColumnHeader from '../_ColumnHeader';
import { TodoItem } from './_TodoItem';

export default function Todos() {
  return (
    <div className='flex flex-col gap-4'>
      <ColumnHeader columnTitle='Pending Todos' />
      {tempTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
