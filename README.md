# 📚 Library Management API
A fully functional RESTful Library Management System built with **Express**, **TypeScript**, and **MongoDB**. This API allows users to manage books, borrow them, and track borrowing summaries.



## 🚀 Live API Base URL


## 🧩 Features

- Create, Read, Update, and Delete books
- Borrow books with quantity and due date
- Automatically update availability based on copies
- Aggregated report of borrowed books
- Filtering and sorting support on books
- Error handling with standard format
- Built-in schema validation, instance/static methods, and middleware



## 🛠️ Technologies Used

- Node.js + Express.js
- TypeScript
- MongoDB + Mongoose
- Mongoose Middleware
- RESTful API Structure
- Aggregation Pipelines


## 📁 Folder Structure

```

src/
├── app/
│ ├── modules/
│ │ ├── book/
│ │ └── borrow/
│ └── utils/
├── config/
├── server.ts
└── index.ts

```

## 🧪 API Endpoints

### 📘 Book Endpoints

#### ➕ Create Book
```

POST /api/books

````
**Request:**
```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
````

#### 📚 Get All Books

```
GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
```

#### 🔍 Get Book by ID

```
GET /api/books/:bookId
```

#### ✏️ Update Book

```
PUT /api/books/:bookId
```

**Request:**

```json
{
  "copies": 50
}
```

#### ❌ Delete Book

```
DELETE /api/books/:bookId
```


### 📦 Borrow Endpoints

#### 🏷️ Borrow a Book

```
POST /api/borrow
```

**Request:**

```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

**Business Logic:**

- Checks for enough copies
- Deducts the number of borrowed copies
- If 0, sets `available` to `false` using an instance method

#### 📊 Borrowed Books Summary (Aggregation)

```
GET /api/borrow
```

**Response:**

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
```

## ⚠️ Error Response Format

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "name": "ValidatorError",
        "kind": "min",
        "path": "copies",
        "value": -5
      }
    }
  }
}
```

## 🧰 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/library-management-api.git
cd library-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup `.env`

Create a `.env` file in the root:

```env
NODE_ENV="development"
PORT=
DB_USER=
DB_PASS=
```

### 4. Run the Server

```bash
npm run dev
```



## 📋 Checklist
- [x] Express + TypeScript setup
- [x] MongoDB connection with Mongoose
- [x] Book model with validation
- [x] Full CRUD for books
- [x] Borrow logic with availability control
- [x] Mongoose instance/static method
- [x] Middleware (pre/post)
- [x] Aggregation pipeline for borrow summary
- [x] Filtering and sorting for books
- [x] Error response formatting

