interface Props {
  columnTitle: string;
}

export default function ColumnHeader({ columnTitle }: Props) {
  return (
    <h3 className=' text-2xl bg-slate-200 text-center p-4 font-bold rounded'>{columnTitle}</h3>
  );
}
