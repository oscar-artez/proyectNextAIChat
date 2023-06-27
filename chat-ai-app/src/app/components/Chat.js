'use client'

import {useChat } from 'ai/react'

export function Chat(){
    const {messages, input, handleInputChange, handleSubmit} = useChat();
    return(
        <div className='flex flex-col max-w-xl px-8 mx-auto'>
            {
                messages.map(message =>{
                    const isMama = message.role != 'user'
                    return (
                    <div key={message.id}>
                    <p>
                        {isMama? 'Mama' : 'usuario'}: <br/>
                        <span className={`${isMama ? 'text-yellow-500 ' : 'text-blue-600'}`}>{message.content} </span></p>
                    </div>
                    ) 
                })
            }
            <form className="fixed w-full bottom-4" onSubmit={handleSubmit}> 
                    <input className="fixed w-full max-w-xl px-4 py-2 m-auto mb-8 text-sm border border-gray-400 rounded-full shadow-2xl bottom-4" placeholder='Escribe algo a tu mamá enojada' type="text" name="content" onChange={handleInputChange} value={input} />
            </form>
        </div>
    )
}