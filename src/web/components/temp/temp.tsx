import * as React from 'react';
import './temp.css';

const JsxComp = (props:any) =>
    <>
        <span>
            {props.data.toString()}
            <br/>
            另一个tsx的组建
            <a> tag A</a>
            <b> tag B</b>
        </span>
    </>;

export {
    JsxComp,
};