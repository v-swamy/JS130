let ItemCreator = (function () {
  function itemNameIsValid(itemName) {
    return itemName.match(/[^ ]/g).length >= 5;
  }

  function categoryIsValid(category) {
    return category.match(/\b[^ ]{5,}\b/g).length === 1;
  }

  function quantityProvided(quantity) {
    return !(quantity === null || quantity === undefined);
  }

  function createSKUCode(itemName, category) {
    let beginning = itemName.match(/[^ ]/g).slice(0, 3).join('');
    let end = category.match(/[^ ]/g).slice(0, 2).join('');
    return (beginning + end).toUpperCase();
  }

  function itemIsValid(itemName, category, quantity) {
    return (itemNameIsValid(itemName) &&
            categoryIsValid(category) &&
            quantityProvided(quantity));
  }

  return function(itemName, category, quantity) {
    if (itemIsValid(...arguments)) {
      this.SKUCode = createSKUCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],

  create() {
    let item = new ItemCreator(...arguments);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
      return item;
    }
  },

  update(SKUCode, updateObj) {
    let index = this.findIndex(SKUCode);
    let item = this.items[index];
    for (let prop in updateObj) {
      item[prop] = updateObj[prop];
    }
  },

  delete(SKUCode) {
    let index = this.findIndex(SKUCode);
    this.items.splice(index, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  findIndex(SKUCode) {
    return this.items.findIndex(item => item.SKUCode === SKUCode);
  },

  findItem(SKUCode) {
    return this.items[this.findIndex(SKUCode)];
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(SKUCode) {
    let item = this.items.findItem(SKUCode);
    return {
      itemInfo() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`);
        }
      }
    };
  },

  reportInStock() {
    let itemsInStock = this.items.inStock();
    let itemNames = itemsInStock.map(item => item.itemName);
    console.log(itemNames.join(','));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10