export function findExtraKeys(source, target) {
  const targetKeys = Object.keys(target);

  //.filter() creates a new array containing only the keys that passed the condition
  return targetKeys.filter((key) => {
    return !Object.hasOwn(source, key);
  });
}


//this also works:
// import { findMissingKeys } from "./findMissingKeys";

// export function findExtraKeys(source, target) {
//   return findMissingKeys(target, source);
// }