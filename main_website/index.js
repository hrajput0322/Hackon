const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql2");
const port = process.env.PORT || 3000;

let username;
let prev = "index";

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

app.get("/", function(req, res){
    res.render("index");
});

app.get("/login", function(req, res){
    res.render("login");
});

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;

let tag1;
let tag2;
let tag3;
let tag4;
let tag5;
let tag6;
let tag7;
let tag8;
let tag9;
let tag10;
let tag11;
let tag12;

let name1;
let name2;
let name3;
let name4;
let name5;
let name6;
let name7;
let name8;
let name9;
let name10;
let name11;
let name12;

let p_name;
let p_description;
let p_image;
let p_price;
let p_tag;
let p_category;

app.get("/index", function(req, res){
    prev = "index";
    res.render("index", {username: username});
})



app.get("/electronic", function(req, res){
    prev = "electronic";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_id, p_tag, p_name, p_image FROM products WHERE p_category='electronic' ORDER BY FIELD(p_tag, 'eco-friendly', 'normal')";

        con.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        
            img1 = result[0].p_image;
            img2 = result[1].p_image;
            img3 = result[2].p_image;
            img4 = result[3].p_image;
            img5 = result[4].p_image;
            img6 = result[5].p_image;
            img7 = result[6].p_image;
            img8 = result[7].p_image;
            img9 = result[8].p_image;
            img10 = result[9].p_image;
            img11 = result[10].p_image;
            img12 = result[11].p_image;


            tag1 = result[1].p_tag;
            tag2 = result[0].p_tag;
            tag3 = result[2].p_tag;
            tag4 = result[3].p_tag;
            tag5 = result[4].p_tag;
            tag6 = result[5].p_tag;
            tag7 = result[6].p_tag;
            tag8 = result[7].p_tag;
            tag9 = result[8].p_tag;
            tag10 = result[9].p_tag;
            tag11 = result[10].p_tag;
            tag12 = result[11].p_tag;

            name1 = result[0].p_name;
            name2 = result[1].p_name;
            name3 = result[2].p_name;
            name4 = result[3].p_name;
            name5 = result[4].p_name;
            name6 = result[5].p_name;
            name7 = result[6].p_name;
            name8 = result[7].p_name;
            name9 = result[8].p_name;
            name10 = result[9].p_name;
            name11 = result[10].p_name;
            name12 = result[11].p_name;

            // Pass the fetched data to the EJS template
            res.render("electronic", {
                username: username,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                img7: img7,
                img8: img8,
                img9: img9,
                img10: img10,
                img11: img11,
                img12: img12,
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                tag5: tag5,
                tag6: tag6,
                tag7: tag7,
                tag8: tag8,
                tag9: tag9,
                tag10: tag10,
                tag11: tag11,
                tag12: tag12,
                name1: name1,
                name2: name2,
                name3: name3,
                name4: name4,
                name5: name5,
                name6: name6,
                name7: name7,
                name8: name8,
                name9: name9,
                name10: name10,
                name11: name11,
                name12: name12,
            });
        });
    });
});



app.get("/others", function(req, res){
    prev = "others";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_id, p_tag, p_name, p_image FROM products WHERE p_category='others' ORDER BY FIELD(p_tag, 'eco-friendly', 'normal')";

        con.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        
            img1 = result[0].p_image;
            img2 = result[1].p_image;
            img3 = result[2].p_image;
            img4 = result[3].p_image;
            img5 = result[4].p_image;
            img6 = result[5].p_image;

            tag1 = result[1].p_tag;
            tag2 = result[0].p_tag;
            tag3 = result[2].p_tag;
            tag4 = result[3].p_tag;
            tag5 = result[4].p_tag;
            tag6 = result[5].p_tag;

            name1 = result[0].p_name;
            name2 = result[1].p_name;
            name3 = result[2].p_name;
            name4 = result[3].p_name;
            name5 = result[4].p_name;
            name6 = result[5].p_name;

            // Pass the fetched data to the EJS template
            res.render("others", {
                username: username,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                tag5: tag5,
                tag6: tag6,
                name1: name1,
                name2: name2,
                name3: name3,
                name4: name4,
                name5: name5,
                name6: name6,
            });
        });
    });
});



app.get("/utensils", function(req, res){
    prev = "utensils";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_id, p_tag, p_name, p_image FROM products WHERE p_category='utensils' ORDER BY FIELD(p_tag, 'eco-friendly', 'normal')";

        con.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        
            img1 = result[0].p_image;
            img2 = result[1].p_image;
            img3 = result[2].p_image;
            img4 = result[3].p_image;
            img5 = result[4].p_image;
            img6 = result[5].p_image;
            img7 = result[6].p_image;
            img8 = result[7].p_image;
            img9 = result[8].p_image;
            img10 = result[9].p_image;

            tag1 = result[1].p_tag;
            tag2 = result[0].p_tag;
            tag3 = result[2].p_tag;
            tag4 = result[3].p_tag;
            tag5 = result[4].p_tag;
            tag6 = result[5].p_tag;
            tag7 = result[6].p_tag;
            tag8 = result[7].p_tag;
            tag9 = result[8].p_tag;
            tag10 = result[9].p_tag;

            name1 = result[0].p_name;
            name2 = result[1].p_name;
            name3 = result[2].p_name;
            name4 = result[3].p_name;
            name5 = result[4].p_name;
            name6 = result[5].p_name;
            name7 = result[6].p_name;
            name8 = result[7].p_name;
            name9 = result[8].p_name;
            name10 = result[9].p_name;

            // Pass the fetched data to the EJS template
            res.render("utensils", {
                username: username,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                img7: img7,
                img8: img8,
                img9: img9,
                img10: img10,
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                tag5: tag5,
                tag6: tag6,
                tag7: tag7,
                tag8: tag8,
                tag9: tag9,
                tag10: tag10,
                name1: name1,
                name2: name2,
                name3: name3,
                name4: name4,
                name5: name5,
                name6: name6,
                name7: name7,
                name8: name8,
                name9: name9,
                name10: name10,
            });
        });
    });
});



app.get("/cleaning", function(req, res){
    prev = "cleaning";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_image, p_tag, p_name FROM products WHERE p_category='cleaning' ORDER BY FIELD(p_tag, 'eco-friendly', 'normal')";

        con.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        
            img1 = result[0].p_image;
            img2 = result[1].p_image;
            img3 = result[2].p_image;
            img4 = result[3].p_image;
            img5 = result[4].p_image;
            img6 = result[5].p_image;
            img7 = result[6].p_image;

            tag1 = result[1].p_tag;
            tag2 = result[0].p_tag;
            tag3 = result[2].p_tag;
            tag4 = result[3].p_tag;
            tag5 = result[4].p_tag;
            tag6 = result[5].p_tag;
            tag7 = result[6].p_tag;

            name1 = result[0].p_name;
            name2 = result[1].p_name;
            name3 = result[2].p_name;
            name4 = result[3].p_name;
            name5 = result[4].p_name;
            name6 = result[5].p_name;
            name7 = result[6].p_name;

            // Pass the fetched data to the EJS template
            res.render("cleaning", {
                username: username,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                img7: img7,
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                tag5: tag5,
                tag6: tag6,
                tag7: tag7,
                name1: name1,
                name2: name2,
                name3: name3,
                name4: name4,
                name5: name5,
                name6: name6,
                name7: name7,
            });
        });
    });
});



app.get("/stationary", function(req, res){
    prev = "stationary";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_id, p_tag, p_name, p_image FROM products WHERE p_category='stationary' ORDER BY FIELD(p_tag, 'eco-friendly', 'normal')";

        con.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        
            img1 = result[0].p_image;
            img2 = result[1].p_image;
            img3 = result[2].p_image;
            img4 = result[3].p_image;

            tag1 = result[1].p_tag;
            tag2 = result[0].p_tag;
            tag3 = result[2].p_tag;
            tag4 = result[3].p_tag;

            name1 = result[0].p_name;
            name2 = result[1].p_name;
            name3 = result[2].p_name;
            name4 = result[3].p_name;

            // Pass the fetched data to the EJS template
            res.render("stationary", {
                username: username,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                tag1: tag1,
                tag2: tag2,
                tag3: tag3,
                tag4: tag4,
                name1: name1,
                name2: name2,
                name3: name3,
                name4: name4,
            });
        });
    });
});



app.get("/checkout", function(req, res){
    if (!username){
        res.render("login");
    }
    else {
        p_name = req.query.p_name;
        prev = "checkout";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_name, p_description, p_price, p_image, p_category, p_tag FROM products WHERE p_name = ?";

        con.query(sql, [p_name], function (err, result) {
            if (err) {
                throw err;
            }

            // Check if there are rows in the result
            if (result.length > 0) {
                // You can access the fields of the first row like this
                p_description = result[0].p_description;
                p_price = result[0].p_price;
                p_image = result[0].p_image;
                p_category = result[0].p_category;
                p_tag = result[0].p_tag;
                // Now you can pass this data to your EJS template
                res.render("checkout", {
                    username: username,
                    p_name: p_name,
                    p_tag: p_tag,
                    p_description: p_description,
                    p_price: p_price,
                    p_image: p_image
                });
            }
        });
    });
    }
});



app.get("/checkout_2", function(req, res){
    if (!username){
        res.render("login");
    }
    else {
        p_name = req.query.p_name;
        prev = "checkout_2";

    con.connect(function(err){
        if (err){
            throw err;
        } 

        var sql = "SELECT p_name, p_description, p_price, p_image, p_category, p_tag FROM products WHERE p_name = ?";

        con.query(sql, [p_name], function (err, result) {
            if (err) {
                throw err;
            }

            // Check if there are rows in the result
            if (result.length > 0) {
                // You can access the fields of the first row like this
                p_description = result[0].p_description;
                p_price = result[0].p_price;
                p_image = result[0].p_image;
                p_category = result[0].p_category;
                p_tag = result[0].p_tag;

                // Now you can pass this data to your EJS template
                res.render("checkout_2", {
                    username: username,
                    p_name: p_name,
                    p_description: p_description,
                    p_price: p_price,
                    p_image: p_image
                });
            }
        });
        var sql2 = "INSERT INTO orders (p_name, p_price, p_category, p_tag, p_description, p_image) VALUES (?, ?, ?, ?, ?, ?)";
        con.query(sql2, [p_name, p_price, p_category, p_tag, p_description, p_image], function (err2, result2) {
            if (err2) {
                throw err2;
            }
        });
    });
    }   
});




let user_image;
let address;
let green_points;
let orders;

app.get("/user_info", function(req, res) {
    con.connect(function(err) {
        if (err) {
            throw err;
        }

        var sql = "SELECT user_image, address, green_points FROM users WHERE user_name = ?";
        var sql2 = "SELECT p_name, p_image FROM orders ORDER BY p_id DESC LIMIT 4";

        con.query(sql, [username], function(err, result) {
            if (err) {
                throw err;
            }

            // Check if there are rows in the result
            if (result.length > 0) {
                user_image = result[0].user_image;
                address = result[0].address;
                green_points = result[0].green_points;
            }

            con.query(sql2, function(err2, result2) {
                if (err2) {
                    throw err2;
                }

                orders = result2;

                // Now that both queries have completed, render the page
                res.render("user_info", {
                    username: username,
                    user_image: user_image,
                    green_points: green_points,
                    address: address,
                    orders: orders
                });
            });
        });
    });
});


app.post('/logout', function(req, res) {
    username = undefined;
    prev = undefined;
    res.render('index', {
        username: undefined
    });
})




app.post('/redeem-coupon', function(req, res) {
    const username = req.body.username; // Assuming you have the username from the request
    const sql = 'UPDATE users SET green_points = green_points-100 WHERE user_name = "Harsh Rajput"';
    con.query(sql, [username], function(err, result) {
        if (err) {
            console.log(err); // Handle the error as needed
            res.status(500).json({ error: 'An error occurred' });
        } else {
            // You can send a success response
            const mobileNumber = "+918630875700";
const couponCode = "SAVE5";

// Your Twilio credentials
const accountSid = 'AC8dc1c5d0f6da38e8f3ca3163ca7bfb3c';
const authToken = 'ee8bf1035bb2588423c23bc07b3328ce';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: `Your Amazon Re-Box coupon code is ${couponCode}`,
        from: '+18589255363', // Your Twilio phone number
        to: mobileNumber // The recipient's phone number
    })
    .then(message => {
        console.log(message.sid);
        res.json({ message: 'Coupon redeemed successfully' }); // Respond to the client here
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to send coupon' }); // Handle the error
    });
                    }
                });
            });
            


app.post('/add-to-wishlist', (req, res) => {
    p_name = req.body.p_name; // Get the product name sent from the client

    // Fetch additional product details from the products table
    const sqlSelect = "SELECT p_description, p_tag, p_category, p_price, p_image FROM products WHERE p_name = ?";

    con.connect(function(err) {
        if (err) {
            throw err;
        }

        con.query(sqlSelect, [p_name], function(err, result) {
            if (err) {
                throw err;
            }

            // Check if there are rows in the result
            if (result.length > 0) {
                const productDetails = result[0];

                // Insert the product details along with p_name into the wishlist table
                const sqlInsert = "INSERT INTO wishlist (p_name, p_description, p_tag, p_category, p_price, p_image) VALUES (?, ?, ?, ?, ?, ?)";

                con.query(sqlInsert, [
                    p_name,
                    productDetails.p_description,
                    productDetails.p_tag,
                    productDetails.p_category,
                    productDetails.p_price,
                    productDetails.p_image
                ], function(err, insertResult) {
                    if (err) {
                        throw err;
                    }

                    res.send("Added to wishlist successfully");
                });
            } else {
                res.status(404).send("Product not found");
            }
        });
    });
});




app.post('/add-to-cart', (req, res) => {
    const p_name = req.body.p_name; // Get the product name sent from the client

    // Fetch additional product details from the products table
    const sqlSelect = "SELECT p_description, p_tag, p_category, p_price, p_image FROM products WHERE p_name = ?";

    con.connect(function(err) {
        if (err) {
            throw err;
        }

        con.query(sqlSelect, [p_name], function(err, result) {
            if (err) {
                throw err;
            }

            // Check if there are rows in the result
            if (result.length > 0) {
                const productDetails = result[0];

                // Insert the product details along with p_name into the cart table
                const sqlInsert = "INSERT INTO cart (p_name, p_description, p_tag, p_category, p_price, p_image) VALUES (?, ?, ?, ?, ?, ?)";

                con.query(sqlInsert, [
                    p_name,
                    productDetails.p_description,
                    productDetails.p_tag,
                    productDetails.p_category,
                    productDetails.p_price,
                    productDetails.p_image
                ], function(err, insertResult) {
                    if (err) {
                        throw err;
                    }

                    res.send("Added to cart successfully");
                });
            } else {
                res.status(404).send("Product not found");
            }
        });
    });
});




app.get("/wishlist", function(req, res) {
    // Assuming you have already established a connection to your database (con)

    // Define the SQL query to select data from the wishlist table
    const sql = "SELECT p_name, p_tag, p_image FROM wishlist order by p_id desc";

    // Execute the SQL query
    con.query(sql, function(err, result) {
        if (err) {
            throw err; // Handle the error as needed
        }

        // Render the "wishlist.ejs" file and pass the query result to it
        res.render("wishlist", { 
            username: username,
            products: result,
         });
    });
});



app.get("/cart", function(req, res) {
    // Assuming you have already established a connection to your database (con)

    // Define the SQL query to select data from the wishlist table
    const sql = "SELECT p_name, p_tag, p_image FROM cart order by p_id desc";

    // Execute the SQL query
    con.query(sql, function(err, result) {
        if (err) {
            throw err; // Handle the error as needed
        }

        // Render the "wishlist.ejs" file and pass the query result to it
        res.render("cart", { 
            username: username,
            products: result,
         });
    });
});



app.post('/search-products', (req, res) => {
    const searchTerm = req.body.searchTerm; // Assuming you're sending the search term in the request body
  
    // Execute a database query
    con.connect(function(err){
        if(err){
            throw err;
        }
        else {
            con.query(
                'SELECT p_name, p_image, p_tag FROM products WHERE p_name LIKE ? order by field(p_tag, "eco-friendly", "normal")',
                [`%${searchTerm}%`],
                (err, results) => {
                  if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'An error occurred' });
                  } else {
                    res.json({ products: results });
                  }
                }
              );
        }
    })
  });


// Assuming you have required your necessary modules and set up your Express app

// Define an app.get route to handle removing a product from the wishlist
app.post("/remove-from-wishlist", function (req, res) {
    const p_name = req.body.p_name;

    // Use the p_name received from the request body to delete the product from the wishlist
    const sql = "DELETE FROM wishlist WHERE p_name = ?";

    con.query(sql, [p_name], function (err, result) {
        if (err) {
            // Handle the error, e.g., send an error response
            res.status(500).send("Error removing product from wishlist.");
        } else {
            // Send a success response
            res.status(200).send("Product removed from wishlist.");
        }
    });
});



app.post("/remove-from-cart", function (req, res) {
    const p_name = req.body.p_name;

    // Use the p_name received from the request body to delete the product from the wishlist
    const sql = "DELETE FROM cart WHERE p_name = ?";

    con.query(sql, [p_name], function (err, result) {
        if (err) {
            // Handle the error, e.g., send an error response
            res.status(500).send("Error removing product from cart.");
        } else {
            // Send a success response
            res.status(200).send("Product removed from cart.");
        }
    });
});






app.post("/login", function(req,res){
    username = req.body.username;
    const password = req.body.password;

    if (username==="Harsh Rajput" && password==="harsh123"){
        res.render(prev, {username: username,
            p_name: p_name,
            p_description: p_description,
            p_price: p_price,
            p_image: p_image,
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            img5: img5,
            img6: img6,
            img7: img7,
            img8: img8,
            img9: img9,
            img10: img10,
            img11: img11,
            img12: img12,
            tag1: tag1,
            tag2: tag2,
            tag3: tag3,
            tag4: tag4,
            tag5: tag5,
            tag6: tag6,
            tag7: tag7,
            tag8: tag8,
            tag9: tag9,
            tag10: tag10,
            tag11: tag11,
            tag12: tag12,
            name1: name1,
            name2: name2,
            name3: name3,
            name4: name4,
            name5: name5,
            name6: name6,
            name7: name7,
            name8: name8,
            name9: name9,
            name10: name10,
            name11: name11,
            name12: name12,});
        prev = "index";
    }
    else {
        res.send("wrong credentials");
    }
})

app.listen(port, function(){
    console.log("server started on port 3000");
});