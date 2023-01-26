const pool = require("./connection");

const queryDrop = `
DROP TABLE IF EXISTS "Menus", "Categories";
`;

const queryCategories = `
create table if not exists "Categories"(
    "id" SERIAL primary KEY,
    "name" VARCHAR not NULL
    );`;

const queryMenu = `
create table if not exists "Menus"(
    "id" SERIAL primary key,
    "name" VARCHAR,
    "stock" INTEGER,
    "price" INTEGER, 
    "createdAt" date, 
    "CategoryId" integer,
    foreign key ("CategoryId")
        references "Categories" ("id")
        on delete cascade
        on update cascade
    );
`;

// console.log(query1);

pool.query(queryDrop, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    pool.query(queryCategories, (err, res) => {
      if (err) {
        console.log("error: ", err);
      } else {
        console.log("sucessfuly create menus table");

        pool.query(queryMenu, (err, res) => {
          if (err) {
            console.log("error: ", err);
          } else {
            console.log("sucessfuly create categories table");
          }
        });
      }
    });
  }
});
