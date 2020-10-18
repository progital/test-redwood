import { db } from 'src/lib/db';

export const orderLineItems = () => {
  return db.orderLineItem.findMany();
};

export const orderLineItem = ({ id }) => {
  return db.orderLineItem.findOne({
    where: { id },
  });
};

export const createOrderLineItem = ({ input }) => {
  return db.orderLineItem.create({
    data: input,
  });
};

export const updateOrderLineItem = ({ id, input }) => {
  return db.orderLineItem.update({
    data: input,
    where: { id },
  });
};

export const deleteOrderLineItem = ({ id }) => {
  return db.orderLineItem.delete({
    where: { id },
  });
};

export const OrderLineItem = {
  order: (_obj, { root }) =>
    db.orderLineItem.findOne({ where: { id: root.id } }).order(),
  product: (_obj, { root }) =>
    db.orderLineItem.findOne({ where: { id: root.id } }).product(),
};
