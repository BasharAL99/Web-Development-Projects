
# Database Managament for Online Mobile Store (Backend)

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


