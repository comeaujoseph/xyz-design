const cannotBeSetWith = (dependentPropName, propType) => {
    return function (props, propName, componentName, ...rest) {
        if (props[propName] === undefined || props[propName] === null) {
            return;
        }
        if (
            props[dependentPropName] !== undefined &&
            props[dependentPropName] !== null
        ) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    '` (has value `' +
                    props[propName] +
                    '`) supplied to `' +
                    componentName +
                    '`. Cannot set `' +
                    dependentPropName +
                    '` (has value `' +
                    props[dependentPropName] +
                    '`) when setting `' +
                    propName +
                    '`'
            );
        }
        return propType(props, propName, componentName, ...rest);
    };
};

export default cannotBeSetWith;
