import React, { useEffect, useState } from 'react'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Links } from './Links'

export const Search = () => {
    const [text, setText] = useState('');  
    const { setSearchTerm } = useResultContext(); 
    const [term, setTerm] = useState('github Viet An Truong');
     
    useEffect(() => {
        if (term) setSearchTerm(term)
    }, [term])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="Search or type URL"
                onChange={(e) => setText(e.target.value)}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        setTerm(text)
                    }
                }}
            />
            {text && (
                <button type="button" className="absolute top-4 right-32 text-2xl text-gray-500 " onClick={() => setText('')}>
                    x
                </button>
            )}
            <button
                type="button"
                className="m-2 mb-0 sm:w-20 w-16 h-12 text-xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900"
                onClick={() => setTerm(text)}
            >
                Search
            </button>
            <Links />
        </div>

    )
}
