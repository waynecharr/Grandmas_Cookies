import React from 'react';
// Insert CSS types here
import Auth from '../utils/auth';

function Intro(){
    return (
        <div className="flex items-center
        justify-center flex-col text-center 
        pt-20 pb-6 mr-5 ml-5 pr-5 pl-5">
            <h1 className="text-4x1 md:text-7x1 mb-1
             md:mb-3 font-bold">Grandma's Cookies</h1>
            <p className="text-base md:text-xl mb-3 font-medium">About Me</p>
            <p className="text-sm max-w-xl mb-6 font-small">
            Grandma here! This is my introduction to you!
                </p>
        </div>
    )
}

export default Intro;