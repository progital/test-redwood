// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/orders/new" page={NewOrderPage} name="newOrder" />
      <Route path="/orders/{id:Int}/edit" page={EditOrderPage} name="editOrder" />
      <Route path="/orders/{id:Int}" page={OrderPage} name="order" />
      <Route path="/orders" page={OrdersPage} name="orders" />
      <Route path="/products/new" page={NewProductPage} name="newProduct" />
      <Route path="/products/{id:Int}/edit" page={EditProductPage} name="editProduct" />
      <Route path="/products/{id:Int}" page={ProductPage} name="product" />
      <Route path="/products" page={ProductsPage} name="products" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
