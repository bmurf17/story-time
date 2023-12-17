export interface TimeLineItem {
  title: string;
  sortOrder: number;
  category: string;
  description: string;
  link: string;
}

export const tempTimeLine: TimeLineItem[] = [
  {
    title: 'First One',
    category: 'Main Story',
    description: 'This is where the story starts',
    link: '/more',
    sortOrder: 0,
  },
  {
    title: 'Second One',
    category: 'Main Story',
    link: '/more',
    description: 'This is where the story picks up',
    sortOrder: 1,
  },
  {
    title: 'Third One',
    category: 'Main Story',
    link: '/more',
    description: 'This is where the story gets crazy',
    sortOrder: 2,
  },
  {
    title: 'Fourth One',
    category: 'Main Story',
    description: 'This is where the story ends',
    link: '/more',
    sortOrder: 3,
  },
];
