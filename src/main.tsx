
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainlLayout from "./layouts/MainlLayout.tsx";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";
import AddPost from "./pages/AddPost.tsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainlLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={"login"} element={<Auth/>}/>
        <Route path={"addPost"} element={<AddPost/>}/>
    </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(

        <RouterProvider router={router} />

);
