import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import { routes } from './shared/Routes';

function App() {
  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Nav />
        <main className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-4 '>
          <Routes>
            {routes.map((route) => {
              return <Route path={route.route} element={route.component} key={route.name} />;
            })}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
