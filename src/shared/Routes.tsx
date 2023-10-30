import Home from '../home/Home';
import Projects from '../projects/Projects';

export interface Route {
  name: string;
  route: string;
  component: JSX.Element;
}

export const routes: Route[] = [
  {
    name: 'Home',
    route: '/',
    component: <Home />,
  },
  {
    name: 'Projects',
    route: '/projects',
    component: <Projects />,
  },
];
