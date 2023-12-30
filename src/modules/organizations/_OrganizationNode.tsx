import { useState } from 'react';
import { Node } from '../../shared/types/Node';

interface Props {
  node: Node;
}

export function OrganizationNode({ node }: Props) {
  const [showChildren, setShowChildren] = useState(node.showChildren);

  const toggleMore = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <div className='flex flex-col align-middle'>
        <div className='flex flex-col align-middle p-1'>
          <div className='my-2 flex align-middle justify-center mx-1'>
            {node.label}
            <>
              {node.children.length > 0 ? (
                <>
                  <button className='ml-2' onClick={toggleMore}>
                    {' '}
                    show more
                  </button>
                </>
              ) : (
                <></>
              )}
            </>
          </div>
          <div className='flex'>
            <>
              {showChildren ? (
                <>
                  {node.children.map((child) => (
                    <div className='m-1' key={child.label}>
                      <OrganizationNode node={child} />
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
}
