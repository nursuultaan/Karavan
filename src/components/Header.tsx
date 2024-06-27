import logo from '../assets/karavan1.png'
import {Link} from "react-router-dom";

const Header = () => {

    const links = [

        {
            title:'home',
            url:'/'
        },

        {
            title:'add post',
            url:'/addPost'
        },
        {
            title:'login',
            url:'/login'
        },


    ];

    return (
        <header className="p-4 dark:text-gray-700 ">
            <div className="container flex justify-between h-16 mx-auto items-center">
                <span  className="flex items-center justify-center ">
                    <img className={"w-[12rem] h-auto"} src={logo}/>
                </span>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {links.map((link,index) => {
                        return (<Link to={link.url} key={index}>
                            <li className="flex ">
                                <h1 className="flex items-center px-4 -mb-1 uppercase ">{link.title}</h1>
                            </li>
                        </Link>)
                    })}

                </ul>

                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

        </header>
    );
};

export default Header;