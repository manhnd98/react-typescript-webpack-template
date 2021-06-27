import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {container} from 'tsyringe';
import {ICONS_PATH} from 'tokens/icons-path';
import {DEFAULT_ICON_PATH} from 'constant/default-icon-path';

container.register(ICONS_PATH, {
    useValue: DEFAULT_ICON_PATH,
});

ReactDOM.render(
    <React.StrictMode>{<App />}</React.StrictMode>,
    document.getElementById('root'),
);
