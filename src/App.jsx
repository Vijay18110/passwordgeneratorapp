import React from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'




function App() {
    const [length, setlength] = useState(8);
    const [password, setpassword] = useState("");
    const [characterAllow, setcharacterAllow] = useState(false);
    const [numberAllow, setnumberAllow] = useState(false);
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvz";
    const refpassword = useRef();
    useEffect(() => {
        passwordgenerator();
    }, [characterAllow, numberAllow, length,])
    const passwordgenerator = useCallback(() => {
        if (characterAllow) str = str + "@#$%^&*()_?/|`~!";
        if (numberAllow) str = str + "0123456789";
        for (let i = 1; i <= length; i++) {
            const index = Math.floor(Math.random() * str.length + 1);
            const char = str.charAt(index);
            pass += char;
        }
        setpassword(pass);

    }, [characterAllow, numberAllow, length])
    const passwordclipboard = useCallback(() => {
        refpassword.current?.select();
        // refpassword.current?.setSelectionRange(0, 5)
        window.navigator.clipboard.writeText(password);
    }, [password])
    return (
        <>
            <div className='container main'>
                <div className='h1 text-center text-primary' >password generator</div>
                <div className='input px-3 py-5'>
                    <input
                        className='w-50 text-dark input1'
                        type="text"
                        placeholder='password'

                        value={password}
                        ref={refpassword}
                        onChange={(e) => setpassword(e.target.value)}


                    />
                    <button className='btn btn-primary' onClick={passwordclipboard}>copy</button>
                </div>
                <div className=' text-white    r2'>
                    <input

                        type="range"
                        min={8}
                        max={100}
                        onChange={(e) => setlength(e.target.value)}
                    />
                    <label htmlFor="" className='text-white'> length:{length}</label>
                    <input type="checkbox" name="" id="" onChange={() => {
                        setcharacterAllow((prev) => !prev)
                    }} />
                    <label htmlFor="">characterAllow</label>
                    <input type="checkbox" name="" id="" onChange={() => {
                        setnumberAllow((prev) => !prev)
                    }} />
                    <label htmlFor="">numberAllow </label>
                </div>

            </div>
        </>


    )
}
export default App