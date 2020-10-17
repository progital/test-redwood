# Full-stack Test for candidates

We expect the candidate create a API (backend) and a Client (frontend) to consume and display API data.

## Technical Requisites

The usage of the following are demanded
- Node.JS/Java/Php
- ES6
- Mongodb or Mysql
- Feel free to use any framework to Frontend (we use Angular) or Backend (we use Loopback that is Express based.)
- Containerize your applications (It's a plus)

## Frontend Technical Requisites
The front-end must be separated from the API and you are free to choose the tools used in the implementation

- Your HTML and CSS will be checked within the following implementation:

> 1. Account
>  * `Register` - The user must be able to register account
>  * `Login` - The user must be able to log in into the application
> 2. Products
>  * `Create/Update/Delete` - The user must be able to create, update and delete products
> 3. Orders
>  * `Search` - The user must be able to filter orders by a interval of price and interval of creation date
>  * `List` - The user must be able to see a list of orders
>  * `Details` - The user must be able to see order details (product name, quantity, price)

## API Main Tasks

> 1. Create the following unauthenticated service endpoints
>  * `/signin` - *POST* - receiving an user name and a password
>  * `/signup` - *POST* - receiving an user full display name, an user name, a password and e-mail address. Upon save time, add the current date and time to the database. An unique id must be created and used throughout the `/order/` POST endpoint described later in this document

> 2. Create the following authenticated service endpoints
>  * `/products` - *POST* - insert a new product to the product table with the following fields: id, name, description, price, creation date
>  * `/products/{id}` - *POST* - delete a product sending a product id
>  * `/products/{id}` - *PUT* - update all passed fields in its appropriate record
>  * `/orders` - *POST* - inserts an order receiving an user id and a list of products id with the current price and quantity
>  * `/orders` - *GET* - returns all orders from the logged user. The search must accept optional filters by price range and date interval of creation date
>  * `/orders/{orderId}` - *GET* - returns details from a specific order. Details are the total value of the order and a list of products with their individual quantity and the price

## Services Requisites
- Tests to ensure that requisites are satisfied (It's a plus)
- Use as many design patterns and best practices as you see fit
- ORM is open to your choice
- Store management for client (ngRx or similar) is a plus.

## Database Requisites
- You are the responsible the create the database structure as best as you can think of. Conciseness, coherence and best practices are going to be considered

## Running and Executing Requisites
- **Make your project running with the minimum needed interactions will be considered important in the analysis of your performance**
- Make it as easy as possible
- The ideal scenario will be to clone your repository and execute it through a single command such as `docker run`, `docker-compose up` or `make run`

## Documentation Requisites
- Should be easy to read and understand the usage (from a client developer's perspective) of your services
- It should be easy to understand how to execute your tests (`npm test or equivalent`)

## Last Requisites
- You can use your Github, GitLab or BitBucket or a zip to deliver this test
- Use as much best practices you see fit to address the commits and/or branch naming (we use techniques based on gitflow)
- Publishing the API and the client in the cloud will be considered a PLUS

Feel free to ask (**francesco.dicarlo@iterpro.com** **piercarlo.serena@iterpro.com**) any question.

You have 14 days counting from tomorrow to finish and deliver us the address of your github repository. Please, let us know if you need more time.
