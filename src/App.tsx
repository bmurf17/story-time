import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import { routes } from "./shared/Routes";
import { modules } from "./shared/types/Module";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-4 ">
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    path={route.route}
                    element={route.component}
                    key={route.route}
                  />
                );
              })}
              {modules.map((module) => {
                return (
                  <Route
                    path={module.link}
                    element={module.page}
                    key={module.link}
                  />
                );
              })}
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
