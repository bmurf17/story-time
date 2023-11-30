import Home from '../home/Home';
import CreateCharacter from '../modules/characters/CreateCharacter';
import Project from '../project/Projects';

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
];
