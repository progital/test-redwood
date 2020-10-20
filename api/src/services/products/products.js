import { db } from 'src/lib/db';
const orderBy = [{ id: 'asc' }];

export const products = () => {
  return db.product.findMany({ orderBy });
};

export const product = ({ id }) => {
  return db.product.findOne({
    where: { id },
  });
};

export const createProduct = ({ input }) => {
  return db.product.create({
    data: input,
  });
};

export const updateProduct = ({ id, input }) => {
  return db.product.update({
    data: input,
    where: { id },
  });
};

export const deleteProduct = ({ id }) => {
  return db.product.delete({
    where: { id },
  });
};

export const Product = {
  OrderLineItem: (_obj, { root }) =>
    db.product.findOne({ where: { id: root.id } }).OrderLineItem(),
};
