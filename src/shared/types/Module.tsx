import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faBook,
  faUpload,
  faKey,
  faNoteSticky,
  faTimeline,
  faTree,
} from '@fortawesome/free-solid-svg-icons';

export interface Module {
  link: string;
  icon: JSX.Element;
  name: string;
  description: string;
}

export const modules: Module[] = [
  {
    link: '/todo',
    name: 'Todo',
    description: 'Keep all characters in your story',
    icon: <FontAwesomeIcon size='xl' icon={faUserGroup} />,
  },
  {
    link: '/encyclopedia',
    name: 'Encyclopedia',
    description: 'Houses all of your information',
    icon: <FontAwesomeIcon size='xl' icon={faBook} />,
  },
  {
    link: '/resources',
    name: 'Resources',
    description: 'Upload all external resources to help you organize',
    icon: <FontAwesomeIcon size='xl' icon={faUpload} />,
  },
  {
    link: '/key-items',
    name: 'Key Items',
    description: 'Keep track of all items in your story',
    icon: <FontAwesomeIcon size='xl' icon={faKey} />,
  },
  {
    link: '/notes',
    name: 'Notes',
    description: 'Just jot down some notes',
    icon: <FontAwesomeIcon size='xl' icon={faNoteSticky} />,
  },
  {
    link: '/timeline',
    name: 'Timeline',
    description: 'Keep track of the order',
    icon: <FontAwesomeIcon size='xl' icon={faTimeline} />,
  },
  {
    link: '/organizations',
    name: 'Organizations',
    description: 'Any hierarchical groups',
    icon: <FontAwesomeIcon size='xl' icon={faTree} />,
  },
];
