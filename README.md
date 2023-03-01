## Web Wednesdays: NoSQL Databses

NoSQL (short for "not only SQL") databases are a type of database management system that are designed to handle large volumes of unstructured or semi-structured data, such as social media content, log files, and user-generated content.

### How to Get Started

1. Create an account on [MongoDB](https://cloud.mongodb.com)
2. Set up a cluster on MongoDB Atlas
3. Create a Database
4. Navigate to the **Security** tab
5. Under network Security, Either add your public IP address ot allow all traffic(not recommended)
6. Navigate to the **Connect** tab
7. Select **connect your application**
8. Obtain the URI. You will paste it the .env file file replacing **&lt;password&gt;** with your database password

### Installation Steps

After forking the Repository

```bash
git clone git@github.com:[GITHUB_USERNAME]/nosql_demo.git
```

```bash
cd nosql_demo/
```

Install the dependencies

```bash
npm install
```

Create a _.env_ file

```bash
touch .env
```

Paste the MongoDB connection URI in the .env file

```bash
MONGO_URI="mongodb+srv:........."
```

Run the server

```bash
npm run dev
```

The nodemon server will start running
You should see a message:

```bash
Server runnig on http://localhost:5000/
Connected to DB
```

### Testing on Postman

Open this [WorkSpace](https://elements.getpostman.com/redirect?entityId=19299357-deed8b97-7f1d-4200-bd0c-71e3e15561a3&entityType=collection) and select the **NoSQL Demo** collection.
Modify the endpoints and test the API
