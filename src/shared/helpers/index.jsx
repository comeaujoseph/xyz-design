import cannotBeSetWith from './prop-types/cannot-be-set-with';

// SHIM Lodash because it caches in node_modules and generates id's that are always incrementing
const uniqueId = (() => {
    const PREFIXES = {};
    let idCounter = 0;
    const newCounter = prefix => {
        PREFIXES[prefix] = 0;
    };
    const incCounter = prefix => {
        PREFIXES[prefix] = PREFIXES[prefix] + 1;
        return PREFIXES[prefix];
    };
    const initCounterForPrefix = prefix => PREFIXES[prefix] != null ? PREFIXES[prefix] : newCounter(prefix);
    const addToPrefix = prefix => {
        initCounterForPrefix(prefix);
        return prefix + incCounter(prefix);
    };
    return prefix => (prefix ? addToPrefix(prefix) : idCounter++);
})();

export default {
    uniqueId
};

export { cannotBeSetWith };
