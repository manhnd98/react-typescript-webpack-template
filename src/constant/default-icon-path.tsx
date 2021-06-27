import { StringHandler } from 'types/handler';

export const DEFAULT_ICON_PATH: StringHandler<string> = (name: string) => {
    return name.includes('.svg#') ? name : `#${name}`;
}