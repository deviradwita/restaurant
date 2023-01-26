class View {

  static showError(err){
    console.log("error");
  }

  static showMenuDrink(data){
    // console.log(data);
    let newData = data.map(el =>{
        return {name: el.name, price : el.price, stock: el.stock, category: el.category, createdAt: el.createdAt}
    })
      console.table(newData);
  }

  static showMenuStock(data){
    let newData = data.map(el =>{
        return {name: el.name, price : el.price, stock: el.stock, category: el.category, createdAt: el.createdAt}
    })
    console.table(newData);

  }

  static showBurgerMenu(data){
    let newData = data.map(el =>{
        return {name: el.name, price : el.price, stock: el.stock, category: el.category, createdAt: el.createdAt}
    })
    console.table(newData);
  }

  static showMenuWithStock(data){
    let newData = data.map(el =>{
        return {name: el.name, price : el.price, stock: el.stock, category: el.category, createdAt: el.createdAt}
    })
    console.table(newData);
  }

  static sales(data){
    // console.log(data);
    let newData = data.map(el =>{
        return { category: el.category, totalStock: el.totalStock, totalSales: el.totalSales}
    })
    console.table(newData);
  }


}

module.exports =View