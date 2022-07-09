"use strict";

// function makeList() {
//   let listItems = [];
//   return function(item) {
//     if (item) {
//       let index = listItems.indexOf(item);
//       if (index === -1) {
//         listItems.push(item);
//         console.log(`${item} added!`);
//       } else {
//         listItems.splice(index, 1);
//         console.log(`${item} removed!`);
//       }
//     } else {
//       if (listItems.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         listItems.forEach(item => console.log(item));
//       }
//     }
//   };
// }

// let list = makeList();
// list();
// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();

function makeList() {
  let items = [];

  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        console.log("item not found!");
      } else {
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();
list.list();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
console.log(list.items);