/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 *
 * I copied this function from @taiga-ui
 */
export function acoPure<T>(
    _target: unknown,
    propertyKey: string,
    {get, enumerable, value}: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> {
    if (get) {
        return {
            enumerable,
            get(): T {
                const value = get.call(this);

                Object.defineProperty(this, propertyKey, {enumerable, value});

                return value;
            },
        };
    }

    if (typeof value !== 'function') {
        throw new Error('acoPure can only be used with functions or getters');
    }

    const original = value;

    return {
        enumerable,
        get(): T {
            let previousArgs: ReadonlyArray<unknown> = [];
            let previousResult: unknown;

            const patched = (...args: Array<unknown>) => {
                if (
                    previousArgs.length === args.length &&
                    args.every((arg, index) => arg === previousArgs[index])
                ) {
                    return previousResult;
                }

                previousArgs = args;
                previousResult = original.apply(this, args);

                return previousResult;
            };

            Object.defineProperty(this, propertyKey, {
                value: patched,
            });

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return patched as any;
        },
    };
}
