import {acoPure} from 'decorators/pure';
import {Inject} from 'decorators/resolve';
import React from 'react';
import {Component, ReactNode} from 'react';
import { StaticRequestService } from 'services/static-request.service';
import {ICONS_PATH} from 'tokens/icons-path';
import {StringHandler} from 'types/handler';
import {isIE} from '../../utils/browser';
import {SvgProps} from './svg.model';

export default class SvgComponent extends Component<SvgProps> {
    @Inject(ICONS_PATH)
    iconsPath: StringHandler<string>;

    @Inject(StaticRequestService) private staticRequestService: StaticRequestService;

    icon: string;

    isIE = isIE(window.navigator.userAgent);

    constructor(props: SvgProps) {
        super(props);

        const {src} = props;
        this.icon = src;

        this.staticRequestService.request('http://localhost:4000/icons/hello.svg').then(response => {
            console.log(response);
            console.log(this.staticRequestService)
        })
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

    private get isExternal(): boolean {
        return this.isUrl || (this.isIE && this.isUse) || this.i
    }

    private get isUrl(): boolean {
        return this.icon.endsWith('.svg');
    }

    /**
     * If icon source is same origin (domain) return false
     * otherwise, return true.
     */
    private get isCrossDomain(): boolean {
        return (this.isUse && this.use.startsWith('http') && !!window.origin && !this.use.startsWith(window.origin));
    }

    @acoPure
    private resolveName(name: string, iconsPath: StringHandler<string>) {
        return iconsPath(name);
    }
}
