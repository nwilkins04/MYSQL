var mysql = require ("mysql");
var inquirer = require ("inquirer");
var products;
//creates connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon_db"
  });

//connecting to mysql
connection.connect(function (err) {
    if (err) throw err;
    displayProducts();
    //console.log("connected");
});

//display products
function displayProducts() {
    connection.query("SELECT * FROM bamazon_db.products;", function(err, results) {
        if (err) throw err;
        products = results;
        for (var i = 0; i < results.length; i++) {
            console.log("Product ID: " + results[i].item_id);
            console.log("Product Name: " + results[i].product_name);
            console.log("Product price: $" + results[i].price + "\n-------\n");
        }
        userPrompt();

    })
};

//asks users questions
function userPrompt() {
    inquirer.prompt ([
        {
            type: "input",
            name: "productId",
            message: "What is the ID of the product you would like to buy?",
            validate:function(userResponse) {
                return !isNaN(parseInt(userResponse));
            }
            
        },  
        {
            type: "input",
            name: "numberOfUnits",
            message: "How many would you like to buy?",
            validate:function(userResponse) {
                return !isNaN(parseInt(userResponse));
            }
        },
    ])
    .then(function(answer) {
        var userSelectedProductId = parseInt(answer.productId);
        var userSelectedQuantity = parseInt(answer.numberOfUnits);
        
        var filteredArray = products.filter(function(product){
	return product.item_id === userSelectedProductId;
});
if(Array.isArray(filteredArray) && filteredArray.length > 0){
    //here we go to database
    var filteredItem = filteredArray[0];
    if(filteredItem.stock_quantity >= userSelectedQuantity){
        //valid sale
        var newQuantity = filteredItem.stock_quantity - userSelectedQuantity;
        var userCost = userSelectedQuantity * filteredItem.price;
        connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [newQuantity,userSelectedProductId ], function(err, res){
            if(err) throw err;
             console.log("congrats! we have your order! Your cost was: " + userCost);
            
        });
    }
    else {
        //we do not have enough quantity to sell to user
        console.log('Sorry not enough product choose again.');
        displayProducts();
    }
}
else {
    //the product ID was not valid
}
        //     connection.query("UPDATE products WHERE" chosenItem-=);
        // if(chosenItem === true)
        // connection.query("UPDATE products WHERE" + chosenItem-=;
        //     function(error) {
        //         if(!err)
        //         console.log("order placed!")
        //     })
        // else {
        //     console.log("we are currently out of that item")
        // }
        // displayProducts();
        // )
    })
    // connection.end();
};
