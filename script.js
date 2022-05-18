const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.print(i));
    }
  },

  add: function (text1) {
    this.items.unshift({
      text: text1,
      completed: false,
    });
    return this.printAll();
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    if (this.items[index].completed === false) {
      return "[ ]" + this.items[index].text;
    }
    return "[x]" + this.items[index].text;
  },

  complete: function (index) {
    this.items[index].completed = true;
    console.log(this.items);
  },
};
