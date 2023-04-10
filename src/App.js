import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './store';
import EditPage from './pages/EditPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient()
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>,
    },
    {
      path: "/edit",
      element:
        <QueryClientProvider client={queryClient}>
          <EditPage />
        </QueryClientProvider>,
    },
  ])


  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
