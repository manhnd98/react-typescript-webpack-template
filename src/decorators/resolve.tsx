import {container, InjectionToken} from 'tsyringe';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Inject(token: InjectionToken<unknown>): any {
    return function (
        _target: unknown,
        propertyKey: string,
        {get, enumerable},
    ): unknown {
        if (get) {
            return {
                enumerable,
                get(): unknown {
                    const instance = container.resolve(token);

                    Object.defineProperty(this, propertyKey, {
                        enumerable,
                        value: instance,
                    });

                    return instance;
                },
            };
        }

        return {
            enumerable,
            get(): unknown {
                const instance = container.resolve(token);

                Object.defineProperty(this, propertyKey, {
                    value: instance,
                });

                return instance as unknown;
            },
        };
    };
}
