const pool = require("./connection");
const fs = require ('fs');

const categories = JSON.parse(fs.readFileSync('../data/categories.json','utf-8')).map(el=>{
    return `('${el.name}')`
})

// console.log(categories);


const menus= JSON.parse(fs.readFileSync('../data/menus.json','utf-8')).map(el=>{
    // console.log(el);
    return `('${el.name}', ${el.stock}, ${el.price}, '${el.createdAt}', ${el.CategoryId})`
})
// console.log(menus);

const queryCategories= `
INSERT INTO "Categories" ("name")
VALUES ${categories.join(",\n")}
`

const queryMenus= `
INSERT INTO "Menus" ("name", "stock", "price", "createdAt", "CategoryId" )
VALUES ${menus.join(",\n")}
`

pool.query(queryCategories, (err, res)=>{
if(err){
    console.log(`Error : ${err}`);
} else{
    pool.query(queryMenus, (err, res)=>{
        if(err){
            console.log(`Error : ${err}`);
        } else{
            console.log("Sucessfully seeding");
        }
    })
}

})


