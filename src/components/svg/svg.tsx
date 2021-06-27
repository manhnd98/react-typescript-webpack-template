import {acoPure} from 'decorators/pure';
import {Inject} from 'decorators/resolve';
import React from 'react';
import {Component, ReactNode} from 'react';
import {ICONS_PATH} from 'tokens/icons-path';
import {StringHandler} from 'types/handler';
import {isIE} from '../../utils/browser';
import {SvgProps} from './svg.model';

export class SvgComponent extends Component<SvgProps> {
    @Inject(ICONS_PATH)
    iconsPath: StringHandler<string>;

    icon: string;

    isIE = isIE(window.navigator.userAgent);

    constructor(props: SvgProps) {
        super(props);

        const {src} = props;
        this.icon = src;
    }

    render(): ReactNode {
        return <div></div>;
    }

    get use(): string {
        return this.icon.includes('.svg#')
            ? this.icon
            : this.resolveName(this.icon, this.iconsPath);
    }

    private get isUse(): boolean {
        return this.use.includes('.svg#');
    }

    private get isUrl(): boolean {
        return this.icon.endsWith('.svg');
    }

    @acoPure
    private resolveName(name: string, iconsPath: StringHandler<string>) {
        return iconsPath(name);
    }
}
