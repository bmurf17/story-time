import ColumnHeader from '../_ColumnHeader';
import { tempActivities } from '../../shared/types/Activity';
import { ActivityItem } from './_ActivityItem';

export default function ActivityLog() {
  return (
    <div className='flex flex-col gap-y-4'>
      <ColumnHeader columnTitle='Activity Log' />
      {tempActivities.map((activity) => {
        return <ActivityItem key={activity.id} activity={activity} />;
      })}
    </div>
  );
}
