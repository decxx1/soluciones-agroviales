import { useState,useEffect } from 'react';
export default function Menu () {
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const classMenu = (value) => {
        if (value === path) {
            return 'bg-primary-600 text-white lg:text-primary-700 dark:text-white lg:bg-transparent rounded';
        } else {
            return 'text-primary-950 hover:bg-gray-50';
        }
        
    }
    return (
        <>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/"
                        className={ classMenu('/') + ' block py-2 pr-4 pl-3  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
                        aria-current="page">Inicio</a>
                </li>
            </ul>
        </>
    )
}