# Inventory API

A simple REST API built with Express.js to manage products in an inventory system.

---

## Base URL

```
http://localhost:3000/inventory
```

(Replace with your deployed URL if hosted)

---

## Endpoints

### 1. Get All Products

**GET** `/inventory`

#### Description:

Fetch all products from inventory.

#### Example:

```
GET /inventory
```

#### Response:

```json
[
  {
    "id": 1,
    "name": "Phone",
    "category": "electronics",
    "price": 20000,
    "quantity": 20,
    "description": "Iphone 17"
  }
]
```

---

### 2. Get Product by ID

**GET** `/inventory/:id`

#### Description:

Fetch a single product using its ID.

#### Example:

```
GET /inventory/1
```

#### Response:

```json
{
  "id": 1,
  "name": "Phone",
  "category": "electronics",
  "price": 20000 ,
  "quantity": 20,
    "description": "Iphone 17"
}
```

---

### 3. Create Product

**POST** `/inventory`

#### Description:

Add a new product to inventory. All fields expect "description" are mandatory"

#### Request Body:

```json
{
  "name": "Laptop",
  "category": "electronics",
  "price": 50000,
  "quantity": 10,
  "description":"Dell Laptop"
}
```

#### Response:

```json
{
  "message": "Product created successfully",
  "product": {
    "id": 2,
    "name": "Laptop",
    "category": "electronics",
    "price": 50000,
    "quantity": 10,
    "description":"Dell Laptop"
  }
}
```

---

### 4. Update Product

**PUT** `/inventory/:id`

#### Description:

Update an existing product (full update).

#### Example:

```
PUT /inventory/2
```

#### Request Body:

```json
{
  "name": "Gaming Laptop",
  "category": "electronics",
  "price": 75000,
  "quantity": 30
}
```

#### Response:

```json
{
  "message": "Product updated successfully",
  "product": {
    "id": 2,
    "name": "Gaming Laptop",
    "category": "electronics",
    "price": 75000,
    "quantity": 15,
    "description": ""
  }
}
```

---

### 5. Delete Product

**DELETE** `/inventory/:id`

#### Description:

Remove a product from inventory.

#### Example:

```
DELETE /inventory/2
```

#### Response:

```json
{
  "message": "Product deleted successfully"
}
```

---

## Query Parameters

### Filter by Category

**GET** `/inventory?category=electronics`

#### Description:

Returns products that match the given category.


``
### Filter by Quantity

**GET** `/inventory?quantity=10`

#### Description:

Returns products that match the given quantity.


``

### Search by name or description

**GET** `/inventory?search=dell`

#### Description:

Returns products that has a similar name or description.


``


## Error Responses

### Invalid ID

```json
{
  "message": "Invalid product ID"
}
```

### Product Not Found

```json
{
  "message": "Product not found"
}
```

---

## Tech Stack

* Node.js
* Express.js

---

## 📌 Notes

* Data is stored in memory (resets on server restart)
* Validation middleware is used for product creation and update
* Use tools like Postman or Thunder Client to test APIs

---

## Author

Anjitha K S
