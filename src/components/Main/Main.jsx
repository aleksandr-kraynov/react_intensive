import React from 'react';
import Card from '../Card/Card';
import './Main.scss';

function Main() {
    return (
        <main class="main">
            <div class="container">   
                <section className='cards'>
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                </section>                         
            </div>
        </main>
    );
}

export default Main;