const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-item.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(item, value) {
  let head = item;
  let current = item;
  let prev = null;

  while (current) {
    if (current.value === value) {
      if (head === current) {
        head = current.next;
      } else {
        prev.next = current.next;
        current = current.next;
        continue;
      }
    }
    prev = current;
    current = current.next;
  }
  return head;
}

module.exports = {
  removeKFromList
};
