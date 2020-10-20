import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/utils';
const orderBy = [{ id: 'asc' }];

export const orderLineItems = ({ orderId = null }) => {
  if (orderId) {
    return db.orderLineItem.findMany({ where: { orderId }, orderBy });
  }
  return db.orderLineItem.findMany({ orderBy });
};

export const orderLineItem = ({ id }) => {
  return db.orderLineItem.findOne({
    where: { id },
  });
};

export const createOrderLineItem = ({ input }) => {
  const data = foreignKeyReplacement(input);
  return db.orderLineItem.create({
    data,
  });
};

export const updateOrderLineItem = ({ id, input }) => {
  const data = foreignKeyReplacement(input);
  return db.orderLineItem.update({
    data,
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
