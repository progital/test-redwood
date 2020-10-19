// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router';

const Routes = () => {
  return (
    <Router>
      <Route path="/admin/order-line-items/new" page={NewOrderLineItemPage} name="newOrderLineItem" />
      <Route path="/admin/order-line-items/{id:Int}/edit" page={EditOrderLineItemPage} name="editOrderLineItem" />
      <Route path="/admin/order-line-items/{id:Int}" page={OrderLineItemPage} name="orderLineItem" />
      <Route path="/admin/order-line-items" page={OrderLineItemsPage} name="orderLineItems" />
      <Route path="/admin/orders/new" page={NewOrderPage} name="newOrder" />
      <Route path="/admin/orders/{id:Int}" page={OrderPage} name="order" />
      <Route path="/admin/orders" page={OrdersPage} name="orders" />
      <Route path="/admin/products/new" page={NewProductPage} name="newProduct" />
      <Route path="/admin/products/{id:Int}/edit" page={EditProductPage} name="editProduct" />
      <Route path="/admin/products/{id:Int}" page={ProductPage} name="product" />
      <Route path="/admin/products" page={ProductsPage} name="products" />
      <Route path="/admin/users/new" page={NewUserPage} name="newUser" />
      <Route path="/admin/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/admin/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/admin/users" page={UsersPage} name="users" />
      <Private unauthenticated="home">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/dashboard/order/{id:Int}" page={ShowOrderPage} name="showOrder" />
        <Route path="/dashboard/order/{id:Int}/edit" page={EditOrderPage} name="editOrder" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
