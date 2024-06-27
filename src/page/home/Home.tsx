import React from 'react';
import Logo1 from '../../assets/Comida_Amor__Vida_hands.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Comida, Amor & Vida</h2>
            <p className='text-xl'>Venha conosco ajudar crianças a terem uma boa alimentação</p>
        
            <div className="flex justify-around gap-4">
            
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Venha conhecer</button>
            </div>
            </div>

            <div className="flex justify-center ">
            <img src={Logo1} alt="" className='w-2/3' />
    
            </div>
        </div>
        </div>
    
    </>
    );
}

export default Home;