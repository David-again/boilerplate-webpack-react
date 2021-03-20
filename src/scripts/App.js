import React from 'react';
import { TestComp, AnotherStatelessComp } from './_components/_dummy.js';

function App() {
    return (<div>
        <TestComp />
        <hr/>
        <AnotherStatelessComp />
        </div>
    );
}

export default App;