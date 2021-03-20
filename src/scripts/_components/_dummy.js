import React from 'react';

function TestComp(){
    return (        
        <section>
            <h2>Hello React!!!</h2>
            <div className="div1">Div 1</div>
            <div className="div2">Div 2</div>
            <div className="div3">Div 3</div>
        </section>
    );
}

function AnotherStatelessComp() {
    return (
        <div>
            
            <p>
                I am a (stateless) react component
            </p>
        </div>
    );
}

export { TestComp, AnotherStatelessComp }