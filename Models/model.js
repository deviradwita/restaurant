const fs = require("fs");
const pool = require("../Config/connection");
const Factory = require("./class");


class Model {
  static showMenuDrink(cb) {
    let query1 = `
    SELECT "m".*, c."name" as "categoryName"
    FROM "Menus" m 
    INNER JOIN "Categories" c ON m."CategoryId" = c."id"
    WHERE c."name" = 'Drink' and DATE_PART('month', m."createdAt") between 5 and 6;
    `;
    // console.log(query1);
    pool.query(query1, (err, res) => {
      if (err) {
        cb(err);
      } else {
        const data = res.rows.map((el) => {
        //   return new GirlGroup(el.name, el.member, el.debutSong, el.company);
        //name, category, stock, price, createdAt
        return Factory.createMenu(el.name, el.categoryName, el.stock, el.price, el.createdAt)
        // console.log(el);
        });
        // console.table(data);
        cb(null, data);
      }
    });
  }

  static showMenuStock(cb){
    let query2=`
    SELECT m.*, c."name" as "categoryName"
    FROM "Menus" m 
    INNER JOIN "Categories" c ON m."CategoryId" = c."id"
    WHERE m."stock" =(
	select MAX(m."stock")
	from "Menus" m 
	INNER JOIN "Categories" c ON m."CategoryId" = c."id") ;
    `

    pool.query(query2, (err,res)=>{
        if (err) {
            cb(err)
        } else {
            // console.log(res.rows);
            const data = res.rows.map(el=>{
                return Factory.createMenu(el.name, el.categoryName, el.stock, el.price, el.createdAt)
                // console.log(el);
            })
            // console.log(data);
            cb(null, data);
        }
    })
  }

  static showBurgerMenu (cb){

    let query3=`
    SELECT "m".*, c."name" as "categoryName"
    FROM "Menus" m 
    INNER JOIN "Categories" c ON m."CategoryId" = c."id"
    WHERE m."name" ilike '%burger%'
    `

    pool.query(query3, (err,res)=>{
        if (err) {
            cb(err)
        } else {
            const data = res.rows.map(el=>{
                return Factory.createMenu(el.name, el.categoryName, el.stock, el.price, el.createdAt)
                // console.log(el);
            })
            // console.log(data);
            cb(null, data);
        }
    })
   
  }

  static showMenuWithStock (cb){
   
        let query4= `
        SELECT m."name", m."stock" , m."price", c."name" as "categoryName", m."createdAt" 
        FROM "Menus" m 
        INNER JOIN "Categories" c ON m."CategoryId" = c."id"
        WHERE m."stock" =(
	    select MAX(m."stock")
	    from "Menus" m 
	    INNER JOIN "Categories" c ON m."CategoryId" = c."id"
        ) and m."createdAt" between '2021-06-02' and '2021-07-09';
        `

        pool.query(query4, (err,res)=>{
            if (err) {
                cb(err)
            } else {
                const data = res.rows.map(el=>{
                    // console.log(el);
                    return Factory.createMenu(el.name, el.categoryName, el.stock, el.price, el.createdAt)
                    // console.log(el);
                })
                // console.log(data);
                cb(null, data);
            }
        })
        
    }
    
    static sales(cb){
        let query5=`
        select  c."name" as "categoryName" ,sum(m."stock" * m."price") as "totalSales", sum(m."stock")
        FROM "Menus" m 
        INNER JOIN "Categories" c ON m."CategoryId" = c."id"
        group by c."name"
        having sum(m."stock" * m."price") > 3000000
        `


        pool.query(query5, (err,res)=>{
            if (err) {
                cb(err)
            } else {
                const data = res.rows.map(el=>{
                    // console.log(el);
                    return Factory.createCategory(el.categoryName, el.sum,  el.totalSales)
                    // console.log(el);
                })
                // console.log(data);
                cb(null, data);
            }
        })
    }

}

module.exports = Model;
