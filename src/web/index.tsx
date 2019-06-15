import * as React from 'react';
import {render} from 'react-dom';


//  other tsx component
import {JsxComp} from './components/temp/temp.tsx';

interface IAppProps {
}


interface IAppState {
}


class App extends React.Component<IAppProps, IAppState> {
    public render(): JSX.Element {
        return (
            <>
            <div>
                Hello world
                <br/>
                <JsxComp></JsxComp>
            </div>
            </>
        )
    }
}


console.log(JsxComp);
const abd = {
    a: 1,
    bbb: 1
};
console.log(abd);

alert(process.env.NODE_ENV);

const _ = require('lodash');

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

render(<App/>, document.getElementById('app'))