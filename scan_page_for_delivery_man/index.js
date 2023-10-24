const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql2");


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "harsh123",
    database: "hackon"
});


const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 5500;


let username;
let address;
let green_points;
let user_image;



app.get("/", function(req, res){
    con.connect(function(err) {
        if (err) {
            throw err;
        }

        var sql = "SELECT user_image, address, green_points FROM users WHERE user_name = 'Harsh Rajput'";

        con.query(sql, function(err, result) {
            if (err) {
                throw err;
            }

            // Check if there are rows in the result
            if (result.length > 0) {
                user_image = result[0].user_image;
                address = result[0].address;
                green_points = result[0].green_points;
            }
                // Now that both queries have completed, render the page
                res.render("index", {
                    username: "Harsh Rajput",
                    user_image: user_image,
                    green_points: green_points,
                    address: address,
                });
            });
        });
    });



app.post("/add-green-points", function(req, res) {
    const sql = "update users set green_points = green_points+10 where user_name='Harsh Rajput'";
    con.query(sql, function(err, result){
        if (err) {
            throw err;
        }
        else {
            // Set a success flag and render the EJS template
            res.render("index", {
                username: username,
                user_image: user_image,
                green_points: green_points,
                address: address,
                successMessage: true, // Set the successMessage variable to true
            });
        }
    })
})




app.listen(port, function(){
    console.log("server started on port 5500");
});