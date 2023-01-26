

class Menu {
    constructor(name, category, stock, price, createdAt){
        this.name= name
        this.category= category
        this.stock= stock
        this.price= price
        this.createdAt = createdAt
    }

}


class Category{
    constructor(category, totalStock, totalSales){
        this.category=category
        this.totalStock= totalStock
        this.totalSales= totalSales
    }
}

class Factory{
    static createMenu (name, category, stock, price, createdAt){
        return new Menu(name, category, stock, price, createdAt)
    }

    static createCategory(category, totalStock, totalSales){
        return new Category(category, totalStock, totalSales)
    }
}

module.exports= Factory

