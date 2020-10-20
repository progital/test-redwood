import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/utils';
const orderBy = [{ id: 'asc' }];

export const orders = ({ userId = null }) => {
  if (userId) {
    return db.order.findMany({ where: { userId }, orderBy });
  }
  return db.order.findMany();
};

export const order = ({ id }) => {
  return db.order.findOne({
    where: { id },
  });
};

export const createOrder = ({ input }) => {
  const data = foreignKeyReplacement(input);
  return db.order.create({
    data,
  });
};

export const updateOrder = ({ id, input }) => {
  const data = foreignKeyReplacement(input);
  return db.order.update({
    data,
    where: { id },
  });
};

export const deleteOrder = ({ id }) => {
  return db.order.delete({
    where: { id },
  });
};

export const Order = {
  user: (_obj, { root }) => db.order.findOne({ where: { id: root.id } }).user(),
  OrderLineItem: (_obj, { root }) =>
    db.order.findOne({ where: { id: root.id } }).OrderLineItem(),
};
