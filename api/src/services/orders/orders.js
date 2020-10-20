import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/utils';
import { requireAuth } from 'src/lib/auth';
import round from 'lodash/round';

const orderBy = [{ id: 'asc' }];

export const calcOrderTotal = async ({ orderId }) => {
  const items = await db.orderLineItem.findMany({ where: { orderId } });
  const total = items.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );
  return db.order.update({
    data: { total: round(total) },
    where: { id: orderId },
  });
};

export const orders = ({ userId = null }) => {
  requireAuth();

  if (userId) {
    return db.order.findMany({ where: { userId }, orderBy });
  }
  return db.order.findMany({ orderBy });
};

export const order = ({ id }) => {
  requireAuth();

  return db.order.findOne({
    where: { id },
  });
};

export const createOrder = ({ input }) => {
  requireAuth();

  const data = foreignKeyReplacement(input);
  return db.order.create({
    data,
  });
};

export const updateOrder = ({ id, input }) => {
  requireAuth();

  const data = foreignKeyReplacement(input);
  return db.order.update({
    data,
    where: { id },
  });
};

export const deleteOrder = ({ id }) => {
  requireAuth();

  return db.order.delete({
    where: { id },
  });
};

export const Order = {
  user: (_obj, { root }) => db.order.findOne({ where: { id: root.id } }).user(),
  OrderLineItem: (_obj, { root }) =>
    db.order.findOne({ where: { id: root.id } }).OrderLineItem(),
};
