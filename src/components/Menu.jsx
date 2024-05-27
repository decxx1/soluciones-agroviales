import { useState,useEffect } from 'react';
export default function Menu () {
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    const classMenu = (value) => {
        if (value === path) {
            return 'bg-gray-600 dark:bg-gray-700 text-white dark:text-white lg:bg-transparent lg:dark:bg-transparent rounded';
        } else {
            return 'text-gray-400 hover:bg-gray-600 dark:text-gray-500 dark:hover:bg-gray-700';
        }
        
    }
    return (
        <>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/"
                        className={ classMenu('/') + ' block py-2 pr-4 pl-3  border-b border-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
                        aria-current="page">Inicio</a>
                </li>
                <li>
                    <a href="/about"
                        className={ classMenu('/about') + ' block py-2 pr-4 pl-3  border-b border-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
                        aria-current="page">Sobre nosotros</a>
                </li>
                <li>
                    <a href="/contact"
                        className={ classMenu('/contact') + ' block py-2 pr-4 pl-3  border-b border-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
                        aria-current="page">Contacto</a>
                </li>
            </ul>
        </>
    )
}