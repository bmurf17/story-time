import Nav from './Nav';
import Home from './home page/Home';

function App() {
  return (
    <>
      <Nav />
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-4 '>
        <Home />
      </div>
    </>
  );
}

export default App;
