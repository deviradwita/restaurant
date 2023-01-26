const Model = require("../Models/model")
const View = require("../Views/view")


class Controller {
    static showMenuDrink(){
        Model.showMenuDrink((err, data)=>{
            if(err){
                View.showError(err)
            } else{
                View.showMenuDrink(data)
            }
            
        })
    }

    static showMenuStock(){
        Model.showMenuStock((err,data)=>{
            if(err){
                View.showError(err)
            } else{
                View.showMenuStock(data)
            }
            
        })
    }

    static showBurgerMenu(){
        Model.showBurgerMenu((err,data)=>{
            if (err) {
                View.showError(err)
            } else {
                View.showBurgerMenu(data)
            }
        })
    }

    static showMenuWithStock(){
        Model.showMenuWithStock((err,data)=>{
            if (err) {
                View.showError(err)
            } else {
                View.showMenuWithStock(data)
            }
        })
    }

    static sales(){
        Model.sales((err,data)=>{
            if (err) {
                View.showError(err)
            } else {
                View.sales(data)
            }
        })
    }
}


module.exports= Controller