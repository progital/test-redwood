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
      <Route path="/admin/users/new" page={NewUserPage} name="newUser" />
      <Route path="/admin/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/admin/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/admin/users" page={UsersPage} name="users" />
      <Private unauthenticated="home">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/dashboard/order/{id:Int}" page={ShowOrderPage} name="showOrder" />
        <Route path="/dashboard/order/{id:Int}/edit" page={EditOrderPage} name="editOrder" />
        <Route path="/dashboard/products" page={ProductsPage} name="products" />
        <Route path="/dashboard/products/{id:Int}" page={ShowProductPage} name="showProduct" />
        <Route path="/dashboard/products/{id:Int}/edit" page={EditProductPage} name="editProduct" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
