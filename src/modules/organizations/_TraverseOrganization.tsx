import { reactNode } from '../../shared/types/Node';
import { OrganizationNode } from './_OrganizationNode';

export default function TraverseOrganization() {
  return (
    <>
      <div className='flex align-middle justify-center'>Traverse Tree</div>
      <div>
        <OrganizationNode node={reactNode} />{' '}
      </div>
    </>
  );
}
