export type Node = {
  label: string;
  description: string;
  showChildren: boolean;
  children: Node[];
};

export const reactNode: Node = {
  label: 'React',
  description:
    'React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.',
  showChildren: true,
  children: [
    {
      label: 'API Calls',
      description:
        'APIs, short for Application Programming Interfaces, are software-to-software interfaces. Meaning, they allow different applications to talk to each other and exchange information or functionality. This allows businesses to access another business’s data, piece of code, software, or services in order to extend the functionality of their own products — all while saving time and money. There are several options available to make API calls from your React.js applications.',
      showChildren: false,
      children: [
        {
          label: 'React-query',
          description:
            'Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue.',
          showChildren: false,
          children: [],
        },
        {
          label: 'Axios',
          description:
            'The most common way for frontend programs to communicate with servers is through the HTTP protocol. You are probably familiar with the Fetch API and the XMLHttpRequest interface, which allows you to fetch resources and make HTTP requests. Axios is a client HTTP API based on the XMLHttpRequest interface provided by browsers.',
          showChildren: false,
          children: [],
        },
      ],
    },
    {
      label: 'SSR Frameworks',
      description:
        'Server-side rendering (SSR) is a technique for rendering a JavaScript application on the server, rather than in the browser. This can improve the performance and user experience of a web application, as the initial render of the application is done on the server and the content is sent to the browser as a fully-rendered HTML page There are several frameworks and libraries available for server-side rendering',
      showChildren: false,
      children: [
        {
          label: 'Remix',
          showChildren: false,

          description:
            'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.',

          children: [],
        },
        {
          label: 'Next.js',

          showChildren: false,
          description:
            'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',

          children: [],
        },
      ],
    },
    {
      label: 'Hooks',
      showChildren: false,
      description:
        'Hooks were introduced in React 16.8 and they let us use React’s features-like managing your component’s state and or performing an after effect when certain changes occur in state(s) without writing a class.',
      children: [
        {
          label: 'Basic Hooks',
          description: 'Core Hooks for basic react development',
          showChildren: false,
          children: [
            {
              label: 'useState',
              description:
                'useState hook is used to manage the state of a component in functional components. Calling useState returns an array with two elements: the current state value and a function to update the state.',
              showChildren: false,
              children: [],
            },
            {
              label: 'useEffect',
              showChildren: false,
              description:
                'useEffect is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.',
              children: [],
            },
          ],
        },
        {
          label: 'Common Hooks',
          description: 'Hooks that you should be familiar with as you work through ',
          showChildren: false,
          children: [
            {
              label: 'useCallback',
              description:
                'is a React Hook that lets you cache a function definition between re-renders.',
              showChildren: false,
              children: [],
            },
            {
              label: 'useRef',
              description:
                'useRef is a React Hook that lets you reference a value that’s not needed for rendering.',
              showChildren: false,
              children: [],
            },
            {
              label: 'useMemo',

              description:
                'useMemo Hook can be used to optimize the computation costs of your React function components',
              showChildren: false,
              children: [],
            },
            {
              label: 'useContext',
              description:
                'Building your own Hooks lets you extract component logic into reusable functions.',
              showChildren: false,
              children: [],
            },
          ],
        },
        {
          label: 'Writing Custom Hooks',
          description:
            'Building your own Hooks lets you extract component logic into reusable functions.',
          showChildren: false,
          children: [],
        },
      ],
    },
  ],
};
