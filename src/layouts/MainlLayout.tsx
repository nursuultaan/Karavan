import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";

const MainlLayout = () => {
    return (
        <>
            <Header/>
            <main >

                <Outlet/>

            </main>

        </>

    );
};

export default MainlLayout;