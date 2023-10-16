import React from 'react';

export default function Header(props){
    const {countCartItems}=props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Dorette's Shopping Cart</h1>
                </a>

            </div>

            <div>
            <a href="#/Cart">
                
                Cart { '' }
                {countCartItems ? (
                    <button className='badge'>{countCartItems}</button>
                ) : (
                    ""
                
                    )}
                
                </a> <a href="#/Signin">Signin</a>


                
            </div>
        </header>
    );
}