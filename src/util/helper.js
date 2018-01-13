/**
 * 一些助手方法
 * some helper function
 * @author toshcn <toshcn@foxmail.com>
 * @date 2017-12
 */

/**
 * Search for a specified value within an array and return its index (or -1 if not found)
 * @param value type Anything The value to search for.
 * @param array type Array An array through which to search.
 * @param fromIndex type Number The index of the array at which to begin the search. The default is 0, which will search the whole array.
 * @returns {boolean}
 */
export function inArray (value, array, fromIndex) {
  fromIndex = parseInt(fromIndex) || 0;
  for (let i = fromIndex; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

// Find component parent component
export function findParentComponent (context, name) {
  const parent = context.$parent;
  if (parent.length) {
    for (const item of parent) {
      if (item.$options.name === name) {
        return item;
      }
    }
  }
  return null;
}

// Find component next component
export function findNextComponent (context, name) {
  const children = context.$children;

  if (children.length) {
    for (const item of children) {
      if (item.$options.name === name) {
        return item;
      }
    }
  }

  return null;
}

// Find component children components
export function findChildrenComponents (context, name) {
  return context.$children.reduce((components, child) => {
    console.log(child.$options.name);
    if (child.$options.name === name) components.push(child);
    return components;
  }, []);
}
