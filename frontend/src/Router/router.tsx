import MainLayout from '../pages/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound.tsx';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },

        ],
    },
]);