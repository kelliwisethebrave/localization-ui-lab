export function findMissingKeys(source, target) {
  const sourceKeys = Object.keys(source);

  //.filter() creates a new array containing only the keys that passed the condition
  return sourceKeys.filter((key) => {
    return !Object.hasOwn(target, key);
  });
}
