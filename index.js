const Controller = require("./Controllers/controller");
const input =  process.argv.slice(3)
const commands= process.argv[2]


switch (commands) {
    case 'query-1':
        Controller.showMenuDrink()
        break;
    case 'query-2':
        Controller.showMenuStock()
        break;
    case 'query-3':
        Controller.showBurgerMenu()
        break;
    case 'query-4':
        Controller.showMenuWithStock()
        break;
    case 'query-5':
        Controller.sales()
        break;


    default:
        break;
}