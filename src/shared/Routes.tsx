import Home from '../home/Home';
import CreateCharacter from '../modules/characters/CreateCharacter';
import TraverseOrganization from '../modules/organizations/_TraverseOrganization';
import Project from '../project/Projects';
import CreateProject from '../project/createProject/CreateProject';

export interface Route {
  name: string;
  route: string;
  component: JSX.Element;
  displayInNav: boolean;
}

export const routes: Route[] = [
  {
    name: 'Home',
    route: '/',
    component: <Home />,
    displayInNav: true,
  },
  {
    name: 'Projects',
    route: '/project',
    component: <Project />,
    displayInNav: false,
  },
  {
    name: 'Create Character',
    route: '/createCharacter',
    component: <CreateCharacter />,
    displayInNav: false,
  },
  {
    name: 'Traverse Organization',
    route: '/traverseOrganization',
    component: <TraverseOrganization />,
    displayInNav: false,
  },
  {
    name: 'Create Project',
    route: '/createProject',
    component: <CreateProject />,
    displayInNav: false,
  },
];
