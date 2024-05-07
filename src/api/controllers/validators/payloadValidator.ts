export const runValidators = <T>(args: T) => {
    for (const key in args) {
        if (args[key as keyof T] === undefined) {
            return {
                isValid: false,
                message: `Missing required field: ${key} expected ${typeof key} but received ${
                    args[key as keyof T]
                }`,
            };
        }
    }
    return { isValid: true };
};
