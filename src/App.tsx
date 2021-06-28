import SvgComponent from 'components/svg/svg';
import React, {Component, ReactNode} from 'react';
import ButtonComponent from './components/button/button';

export default class AppComponent extends Component {

    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="wrapper tw-flex">
                <h1>React 17 and TypeScript 4 App!🚀</h1>
                <ButtonComponent>hello button</ButtonComponent>
                <SvgComponent></SvgComponent>
            </div>
        );
    }
}
