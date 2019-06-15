import * as React from 'react';
import {render} from 'react-dom';
// import _ from './other';
// console.log(_)

interface IAppProps {
}


interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
    public render(): JSX.Element {
        return (
            <div>
                Hello world
            </div>
        )
    }
}
 const abd = {
    a: 1,
    bbb: 1
}
render(<App/>, document.getElementById('app'))