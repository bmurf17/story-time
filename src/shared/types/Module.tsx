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
import Todo from '../../modules/todo/Todo';
import Encyclopedia from '../../modules/encyclopedia/Encyclopedia';
import Resources from '../../modules/resources/Resources';
import KeyItems from '../../modules/keyItems/KeyItems';
import Notes from '../../modules/notes/Notes';
import Timeline from '../../modules/timeline/Timeline';
import Organizations from '../../modules/organizations/Organizations';

export interface Module {
  link: string;
  icon: JSX.Element;
  name: string;
  description: string;
  page: JSX.Element;
}

export const modules: Module[] = [
  {
    link: '/todo',
    name: 'Todo',
    description: 'Keep all characters in your story',
    icon: <FontAwesomeIcon size='xl' icon={faUserGroup} />,
    page: <Todo />,
  },
  {
    link: '/encyclopedia',
    name: 'Encyclopedia',
    description: 'Houses all of your information',
    icon: <FontAwesomeIcon size='xl' icon={faBook} />,
    page: <Encyclopedia />,
  },
  {
    link: '/resources',
    name: 'Resources',
    description: 'Upload all external resources',
    icon: <FontAwesomeIcon size='xl' icon={faUpload} />,
    page: <Resources />,
  },
  {
    link: '/key-items',
    name: 'Key Items',
    description: 'Keep track of all items in your story',
    icon: <FontAwesomeIcon size='xl' icon={faKey} />,
    page: <KeyItems />,
  },
  {
    link: '/notes',
    name: 'Notes',
    description: 'Just jot down some notes',
    icon: <FontAwesomeIcon size='xl' icon={faNoteSticky} />,
    page: <Notes />,
  },
  {
    link: '/timeline',
    name: 'Timeline',
    description: 'Keep track of the order',
    icon: <FontAwesomeIcon size='xl' icon={faTimeline} />,
    page: <Timeline />,
  },
  {
    link: '/organizations',
    name: 'Organizations',
    description: 'Any hierarchical groups',
    icon: <FontAwesomeIcon size='xl' icon={faTree} />,
    page: <Organizations />,
  },
];
