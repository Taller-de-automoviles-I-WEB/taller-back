# API Reference

All routes are prefixed with `/api`.

- Remember run `npm install` in the main directory before starting the server and create a .env file with the necessary environment variables
- To start the server, run `npm run dev` in the main directory, then navigate to `localhost:3001/` in your browser.

## Providers API

The Providers API provides endpoints for provider management.

### Create Provider

To create a provider, make a **post** request to this endpoint with the provider's details as body parameters.

```http
POST /providers
```
**Request Parameters**

| Field       | Type     | Description                                           |
| :---------- | :------- | :---------------------------------------------------- |
| `fullName` | `string` | **Required**. Full Name                            |
| `address`  | `string` | **Required**. Address                           |
| `password`  | `string` | **Required**. Password                                |
| `email`     | `string` | **Required**. Email                                   |
| `industry`  | `string` | **Required**. Industry of provider                           |
| `state`      | `string` | **Required**. State of provider       |

**Successful Response**

```json
{
	"newProvider": {
		"id": 10,
		"fullName": "Mauirio leon",
		"address": "Argentina",
		"password": "$2b$10$G9cLxO2fqQLDK/ZEObdgN.WIbhOHrREl/pK46caP67pihr.pHYTru",
		"email": "leon@mail.com",
		"industry": "Tecnologia",
		"state": true,
		"updated_at": "2023-09-17T02:14:54.142Z",
		"created_at": "2023-09-17T02:14:54.142Z"
	},
	"message": "Provider create success"
}
```

### Get Providers

To get all providers, make a **get** request to this endpoint.

```http
GET /providers
```

**Successful Response**

```json
{
	"providers": [
		{
			"id": 10,
			"fullName": "Javier ortega",
			"address": "Venezuela",
			"email": "javi@mail.com",
			"industry": "Tecnologia",
			"state": true,
			"created_at": "2023-09-17T02:14:54.000Z",
			"updated_at": "2023-09-17T02:14:54.000Z"
		},
		{
			"id": 11,
			"fullName": "Mauricio Panel",
			"address": "Venezuela",
			"email": "dosn@mail.com",
			"industry": "Tecnologia",
			"state": true,
			"created_at": "2023-09-17T02:16:29.000Z",
			"updated_at": "2023-09-17T02:16:29.000Z"
		}
	],
	"message": "Providers success found."
}
```

#### Get provider by id

To get a proviver by id , make a **get** request to this endpoint with the provider's id as a parameter.

```http
GET /providers/id/:id
```

**Successful Response**

```json
{
	"provider": {
		"id": 11,
		"fullName": "Mauricio Panel",
		"address": "Venezuela",
		"email": "dosn@mail.com",
		"industry": "Tecnologia",
		"state": true,
		"created_at": "2023-09-17T02:16:29.000Z",
		"updated_at": "2023-09-17T02:16:29.000Z"
	},
	"message": "Provider success found."
}
```

#### Get provider by email

To get a proviver by id , make a **get** request to this endpoint with the provider's id as a parameter.

```http
GET /providers/email/:email
```

**Successful Response**

```json
{
	"provider": {
		"id": 11,
		"fullName": "Mauricio Panel",
		"address": "Venezuela",
		"email": "dosn@mail.com",
		"industry": "Tecnologia",
		"state": true,
		"created_at": "2023-09-17T02:16:29.000Z",
		"updated_at": "2023-09-17T02:16:29.000Z"
	},
	"message": "Provider success found."
}
```
### Update Provider

To update a provider, make a **post** request to this endpoint with the provider's details as body parameters.

```http
PUT /providers
```
**Request Parameters**

| Field       | Type     | Description                                           |
| :---------- | :------- | :---------------------------------------------------- |
| `fullName` | `string` | **Required**. Full Name                            |
| `address`  | `string` | **Required**. Address                           |
| `password`  | `string` | **Required**. Password                                |
| `email`     | `string` | **Required**. Email                                   |
| `industry`  | `string` | **Required**. Industry of provider                           |
| `state`      | `string` | **Required**. State of provider       |

**Successful Response**

```json
{
	"newProvider": {
		"id": 10,
		"fullName": "Mauirio leon",
		"address": "Argentina",
		"password": "$2b$10$G9cLxO2fqQLDK/ZEObdgN.WIbhOHrREl/pK46caP67pihr.pHYTru",
		"email": "leon@mail.com",
		"industry": "Tecnologia",
		"state": true,
		"updated_at": "2023-09-17T02:14:54.142Z",
		"created_at": "2023-09-17T02:14:54.142Z"
	},
	"message": "Provider update success"
}
```

#### Delete provider by id

To delete a provider by id, make a **delete** request to this endpoint with the provider's id as a parameter.

```http
DELETE /providers/id/:id
```

**Successful Response**

```json
{
	"message": "Provider successfully deleted."
}
```

#### Delete ALL provider

To delete a provider by id, make a **delete** request to this endpoint with the provider's id as a parameter.

```http
DELETE /providers/all
```

**Successful Response**

```json
{
	"message": "6 providers successfully deleted."
}
```

## Env file explanation

```js
# General
PORT=

# Database

DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
DB_HOST=
```
