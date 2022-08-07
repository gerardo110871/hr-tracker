require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { Sequelize } = require("sequelize");

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});


app.get("/cars", (req, res) => {
  sequelize
    .query(
      `
    SELECT * FROM cars
  `
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200).send(dbres);
    });
});

app.post("/addVehicle", (req, res) => {
  console.log(req.body)
  const { ro, vehicle, insurance, hrs } = req.body;
  sequelize
    .query(
      `
      INSERT INTO cars ("ro", "vehicle", "insurance", "hrs")
      VALUES('${ro}', '${vehicle}', '${insurance}', '${hrs}')
    `
    )
    .then((dbres) => {
      res.status(200).send(dbres);
    });
});

app.get("/hrs", (req, res) => {
  sequelize
  .query(`
      SELECT SUM(hrs) FROM cars  
  `)
  .then((dbres) => {
    res.status(200).send(dbres);
  })
})

app.delete("/deleteAll", (req, res) => {
  sequelize
  .query(`
    delete from cars
  `)
  .then((dbres) => {
    res.status(200).send(dbres);
  })
})


// app.get("/cart/:id", (req, res) => {
//   const { id } = req.params;
//   sequelize
//     .query(
//       `
//       SELECT u.id, u.user_id, p.item_id, p.item, p.description, p.price, p.url 
//       FROM cart u 
//       JOIN products p 
//       ON u.item_id = p.item_id 
//       WHERE u.user_id = ${id};
//   `
//     )
//     .then((dbres) => {
//       res.status(200).send(dbres[0]);
//     });
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   sequelize
//     .query(
//       `
//     SELECT id, first_name, last_name, email FROM signup
//     WHERE email = '${email}' AND password = '${password}'
//     `
//     )
//     .then((dbres) => {
//       if (dbres[0].length === 0) {
//         return res.status(401).send("No User With Those Credentials");
//       } else {
//         console.log(dbres);
//         res.status(200).send(dbres[0]);
//       }
//     })
//     .catch((err) => res.status(401).send("No User With Those Credentials"));
// });

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  sequelize.query(`
  delete from cart
  where item_id = ${id}
  `);
});

app.listen(3333, () => console.log(`running on port 3333`));