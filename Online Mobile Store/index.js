// //connection to MongoDB

// //load mongodb client from mongodb package
 const { MongoClient } = require('mongodb');

// async function main(){
 const url = 'mongodb://localhost:27017';
 const client = new MongoClient(url); 

// Database Name
const dbName = 'OnlinePhoneStore';


   //creat home address docoment
   const ha = {
    "addressLine1": "13 the green",
   "addressLine2": "the park",   
    "town": "maynooth",
    "county": "Kildare",
    "Eircode": "kd8373"
 };

 //creat home address docoment
 const ha1 = {
    "addressLine1": "14 the green",
   "addressLine2": "the green",   
    "town": "Dublin",
   "county": "Dublin",
    "Eircode": "Dn8373"
 };
 //creat home address docoment
 const ha2 = {
    "addressLine1": "111 the AVENUE",
   "addressLine2": "ardeligh",   
    "town": "dublin",
   "county": "Dublin",
    "Eircode": "Do1373"
 };
 //creat home address docoment
 const ha3 = {
    "addressLine1": "200 dalton park",
   "addressLine2": "ardeligh",   
    "town": "dublin",
   "county": "Dublin",
    "Eircode": "Dp1373"
 };

 //creat home address docoment
 const ha4 = {
    "addressLine1": "9 Cresent",
   "addressLine2": "ardeligh",   
    "town": "Maynooth",
   "county": "Kildare",
    "Eircode": "k71373"
 };

//create shhoping address
 const sa = {
    "addressLine1": "14 the green",
   "addressLine2": "the park",
    "town": "maynooth",
    "county": "Kildare",
    "Eircode": "kd4373"
 };

 const sa1 = {
    "addressLine1": "17 the green",
   "addressLine2": "the avenue",
    "town": "Mullingar",
    "county": "westmeath",
    "Eircode": "n914373"
 };
 const sa2 = {
    "addressLine1": "13 abbey",
   "addressLine2": " avenue",
    "town": "Mullingar",
    "county": "westmeath",
    "Eircode": "n914073"
 };
 const sa3 = {
    "addressLine1": "1 the park",
   "addressLine2": "the avenue",
    "town": "Mullingar",
    "county": "westmeath",
    "Eircode": "n91273"
 };

 const sa4 = {
    "addressLine1": "220 ardleigh",
   "addressLine2": "vale",
    "town": "dublin",
    "county": "dublin",
    "Eircode": "D14373"
 };

 

 //item details //create 10
const item = {
    "Manufacturer" : "samsung",
    "Model" : "A70",
    "Price" : 180
};
const item1 = {
    "Manufacturer" : "Apple",
    "Model" : "Iphone x",
    "Price" : 490
};
const item2 = {
    "Manufacturer": "Samsung",
    "Model": "Galaxy S10",
    "Price": 450
};

const item3 = {
    "Manufacturer": "Google",
    "Model": "Pixel 5",
    "Price": 350
};

const item4 = {
    "Manufacturer": "OnePlus",
    "Model": "OnePlus 8",
    "Price": 400
};

const item5 = {
    "Manufacturer": "Huawei",
    "Model": "P30 Pro",
    "Price": 420
};

const item6 = {
    "Manufacturer": "Sony",
    "Model": "Xperia 1 II",
    "Price": 500
};

const item7 = {
    "Manufacturer": "LG",
    "Model": "V60 ThinQ",
    "Price": 380
};

const item8 = {
    "Manufacturer": "Motorola",
    "Model": "Moto G Power",
    "Price": 250
};

const item9 = {
    "Manufacturer": "Xiaomi",
    "Model": "Mi 11",
    "Price": 600
};

//update customer details
const updatecustomerinfo = {
    $set: {
    phone: '0877777777',
    email: 'ololol@gmail.com',
    title: 'Dr',
        }
};
    const updateha = {
        $set: {
        "addressLine1": "99 the green",
       "addressLine2": "main street",   
        "town": "maynooth",
        "county": "Kildare",
        "Eircode": "k00000"
        }
};
const updatesa = {
    $set: {
    "addressLine1": "99 the avenue",
   "addressLine2": "main street",   
    "town": "maynooth",
    "county": "Kildare",
    "Eircode": "k10000"
    }

};

//updating the price and  the model of the item5
    const updateitem = {
      $set: {
        "Price": 450,  // New price
        "Model": "P30 Pro Updated"  // updating the model
      }
    };
    const updateorderd = {
        $set: {
          surname: "tony", // Update surname
          "item.Model": " s21", // Update  model of the first item
          "item1.Price": 880 // Update the price of the second item
        }
      };

//main
async function main() {
   // Use connect method to connect to the server
   await client.connect();
   console.log('Connected successfully to server');
   const db = client.db(dbName);
   //CREATE 3 COLLECTION
   const personalDetails = db.collection("personaldetails");
   const ItemDetails = db.collection("item");
   const purchaseCollection = db.collection("purchases");



  



 //CRUD   
 

//calling the crud functions
 await createUser(personalDetails);
 await createItem(ItemDetails);
await createPurchase(purchaseCollection);  

 await retrieveUser(personalDetails);

 await retrieveItem(ItemDetails);

 await retrievePurchase(purchaseCollection);


 await updateCustomer(personalDetails);
 await updateitemm(ItemDetails);
 await updatepurchase(purchaseCollection);
 

 await deleteCustomer(personalDetails);
 await deleteitem(ItemDetails);
 await deleteorder(purchaseCollection);


 
 
 
                        

   return 'done.';
}
 //CREATE
//to isert into database 
//function to create(inset)
async function createUser(personalDetails)
{
    await personalDetails.insertOne({ title:'mr',firstname:'bash' ,surname:'Ali',mobile:'098765333',email:'bash34@gmail.com',homeaddress: ha,shoppingaddress:sa});
    await personalDetails.insertOne({ title:'Dr',firstname:'bashaa' ,surname:'adam',mobile:'08765333',email:'bashaa@gmail.com',homeaddress: ha1,shoppingaddress:sa1});
    await personalDetails.insertOne({ title:'mr',firstname:'adam' ,surname:'alahmad',mobile:'093635433',email:'adam09@gmail.com',homeaddress: ha2,shoppingaddress:sa2});
    await personalDetails.insertOne({ title:'ms',firstname:'leen' ,surname:'kelly',mobile:'07635353',email:'leenk@gmail.com',homeaddress: ha3,shoppingaddress:sa3});
    await personalDetails.insertOne({ title:'ms',firstname:'lisa' ,surname:'alzayn',mobile:'0873653333',email:'lisaal@gmail.com',homeaddress: ha4,shoppingaddress:sa4});
    
}

async function createItem(ItemDetails)
{
    await ItemDetails.insertOne({ Manufacturer:item.Manufacturer,Model:item.Model,Price:item.Price});
    await ItemDetails.insertOne({ Manufacturer:item1.Manufacturer,Model:item1.Model,Price:item1.Price});
    await ItemDetails.insertOne({ Manufacturer:item2.Manufacturer,Model:item2.Model,Price:item2.Price});
    await ItemDetails.insertOne({ Manufacturer:item3.Manufacturer,Model:item3.Model,Price:item3.Price});
    await ItemDetails.insertOne({ Manufacturer:item4.Manufacturer,Model:item4.Model,Price:item4.Price});
    await ItemDetails.insertOne({ Manufacturer:item5.Manufacturer,Model:item5.Model,Price:item5.Price});
    await ItemDetails.insertOne({ Manufacturer:item6.Manufacturer,Model:item6.Model,Price:item6.Price});
    await ItemDetails.insertOne({ Manufacturer:item7.Manufacturer,Model:item7.Model,Price:item7.Price});
    await ItemDetails.insertOne({ Manufacturer:item8.Manufacturer,Model:item8.Model,Price:item8.Price});
    await ItemDetails.insertOne({ Manufacturer:item9.Manufacturer,Model:item9.Model,Price:item9.Price});
    
    

}
//order details
async function createPurchase(purchaseCollection)
{
    await purchaseCollection.insertOne({ firstname:'bash' ,surname:'Ali',item:item,item1:item1});
    await purchaseCollection.insertOne({ firstname:'lisa' ,surname:'alzayn',item2:item2});
    await purchaseCollection.insertOne({ firstname:'adam' ,surname:'alahmad',item3:item3});  
}
////////////////// ///////////////////////retrive(search)///////////////////////////////////////////////////

//to retrive user(customer)(read)
async function retrieveUser(personalDetails){
    const filteredDocs = await personalDetails.find({ firstname:'bash' ,surname:'Ali' }).toArray();
   console.log("Selected USER");
    console.log( filteredDocs[0].firstname);
    console.log( filteredDocs[0].surname);
    console.log( filteredDocs[0].mobile);
    console.log( filteredDocs[0].email);
  //to print out the home address details for the specific customer above
  console.log("HOME ADDRESS FOR USER");
    console.log( filteredDocs[0].homeaddress.addressLine1);
    console.log( filteredDocs[0].homeaddress.addressLine2);
    console.log( filteredDocs[0].homeaddress.town);
    console.log( filteredDocs[0].homeaddress.county);
    console.log( filteredDocs[0].homeaddress.Eircode);

    //to print out the shopping address details for the specific customer above
     console.log("SHIPPING ADDRESS FOR USER");
     console.log( filteredDocs[0].shoppingaddress.addressLine1);
     console.log( filteredDocs[0].shoppingaddress.addressLine2);
     console.log( filteredDocs[0].shoppingaddress.town);
     console.log( filteredDocs[0].shoppingaddress.county);
     console.log( filteredDocs[0].shoppingaddress.Eircode);

  
}
// ///to retrive items 
 async function retrieveItem(itemDetails){
   const filteredDocs = await itemDetails.find({Manufacturer:"samsung",Model:"A70",Price:180}).toArray();

  console.log("Retrieved item");
  console.log( filteredDocs[0].Manufacturer);
  console.log( filteredDocs[0].Model);
  console.log( filteredDocs[0].Price);
  //console.log( filteredDocs[1].Model);


}

//to retrive purchase 
async function retrievePurchase(purchaseCollection){
    const filteredDocs = await purchaseCollection.find({ firstname:'bash' ,surname:'Ali',item:item ,item1:item1 }).toArray();
//     
     console.log("Retrieved purchased orders details");
     console.log( filteredDocs[0].item);
     console.log( filteredDocs[0].item1);
     console.log("Retrieved customer who bought this items  ");
     console.log( filteredDocs[0].firstname);
     console.log( filteredDocs[0].surname);

}



///////////////////////////////////////UPDATE//////////////////////////////
async function updateCustomer(personalDetails) {
    try {
      //selected  a customer with a specific first name and last name
      const query = { firstname: "leen", surname: "kelly" };
  
      // update operation
      const updateResult = await personalDetails.updateOne(query, updatecustomerinfo);
      const updateResult1 = await personalDetails.updateOne(query,updateha);
      const updateResult2 = await personalDetails.updateOne(query,updatesa);
      // Log the result of the update
      console.log('Updated Customer details =>', updateResult.modifiedCount);
      console.log('Updated home Address =>', updateResult1.modifiedCount);
      console.log('Updated Shopping Address =>', updateResult2.modifiedCount);

  
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  }
  //update item
    async function updateitemm(ItemDetails) {
    try {
        //an item by manufacturer and model
        const query = { Manufacturer: "Huawei", Model: "P30 Pro" };
  
      // update operation
      const updateResult = await ItemDetails.updateOne(query, updateitem);

        // Log the result of the update
    console.log('Updated Item =>', updateResult.modifiedCount);

    } catch (error) {
    console.error('Error updating item:', error);
    }
    }


    //update for order details(purshase)
    async function updatepurchase(purchaseCollection) {
        try {
   // query to find the purchase
    const query = { firstname: "bash", surname: "Ali" };

    // update operation
    const updateResult = await purchaseCollection.updateOne(query, updateorderd);

    // Log the result of the update
console.log('Updated purchase details =>', updateResult.modifiedCount);

} catch (error) {
console.error('Error updating purchase:', error);
}
}
    
// //////////////////////////////////////Delete///////////////////////////////////////
// //delete customer
async function deleteCustomer(personalDetails) {
    try {
      // Query object to specify which customer to delete
      const query = { firstname: "bashaa", email: "bashaa@gmail.com", mobile: "08765333" };
      
      // Deleting the document from the MongoDB collection
      const result = await personalDetails.deleteOne(query);
  
      // Logging the result of the deletion
      console.log("Customer Deleted =>", result.deletedCount > 0 ? "Success" : "No match found");
  
    } catch (error) {
      // Error handling if the deletion fails
      console.error("Error deleting customer:", error);
    }
  }
//   //delete item
  async function deleteitem(ItemDetails) {
    try {
      // Query object to specify which customer to delete
      const query = { Manufacturer: "Xiaomi", Model: "Mi 11", Price: 600 };
      
      // Deleting the document from the MongoDB collection
      const result = await ItemDetails.deleteOne(query);
  
      // Logging the result of the deletion
      console.log("Item Deleted =>", result.deletedCount > 0 ? "Success" : "No match found");
  
    } catch (error) {
      // Error handling if the deletion fails
      console.error("Error deleting Item:", error);
    }
  }

  //delete orderdetails(purchase)
  async function deleteorder(purchaseCollection) {
    try {
      // Query object to specify which customer to delete
      const query = {firstname:"bash",surname:"tony"};
      
      // Deleting the document from the MongoDB collection
      const result = await purchaseCollection.deleteMany(query);
  
      // Logging the result of the deletion
      console.log("order Deleted =>", result.deletedCount > 0 ? "Success" : "No match found");
  
    } catch (error) {
      // Error handling if the deletion fails
      console.error("Error deleting order:", error);
    }
  }




main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
//////////////////////////////////////////////////////////////

/* 
Database Design Description and Impact on Code Development:

1. Database Structure:
   - my MongoDB database, named 'OnlinePhoneStore', includes three primary collections: 'personaldetails', 'itemdetails', and 'purchasescollection'.
   - The 'personaldetails' collection stores customer data first and surname , including contact information such as mobile and email and addresses for home and shopping purposes.
   - The 'itemdetails' collection contains details about products such as manufacturer, model, and price, reflecting the diverse inventory.
   - The 'purchasescollection' collection links customers to the items they have bought, capturing essential transaction data.

2. Data Modeling Approach:
   - The schema design allows for flexible and scalable data storage, accommodating various attributes for customers and items without rigid constraints.
   - Address data is embedded within the 'personaldetails' collection for quick access and management, reducing the need for excessive joins or lookups.
   - Each item in the 'itemdeatils' collection is designed to stand alone with complete details, simplifying inventory management and retrieval.

3. Impact on Code Development:
   - the  CRUD operations are straightforward and efficient, leveraging MongoDB's capabilities to handle dynamic queries and updates, such as modifying customer information or item details.
   - The modular approach in handling each collection separately within the code enhances maintainability and scalability, allowing easy updates to the database schema without significant code overhaul.
   - Error handling is integrated to ensure robustness and reliability of the database interactions, providing clear feedback and logging for operations, which aids in debugging and operational monitoring.

This design and implementation strategy ensures that the OnlinePhoneStore database is not only optimised for performance but also flexible enough to adapt to future requirements as the store expands its offerings or modifies its operational strategies.
*/

