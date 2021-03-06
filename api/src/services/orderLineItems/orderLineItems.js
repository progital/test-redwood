import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/utils';
import { calcOrderTotal } from 'src/services/orders';
import { requireAuth } from 'src/lib/auth';

const orderBy = [{ id: 'asc' }];

export const orderLineItems = ({ orderId = null }) => {
  requireAuth();

  if (orderId) {
    return db.orderLineItem.findMany({ where: { orderId }, orderBy });
  }
  return db.orderLineItem.findMany({ orderBy });
};

export const orderLineItem = ({ id }) => {
  requireAuth();

  return db.orderLineItem.findOne({
    where: { id },
  });
};

export const createOrderLineItem = async ({ input }) => {
  requireAuth();

  const { orderId } = input;
  const data = foreignKeyReplacement(input);
  const lineItem = await db.orderLineItem.create({
    data,
  });
  await calcOrderTotal({ orderId });
  return lineItem;
};

export const updateOrderLineItem = async ({ id, input }) => {
  requireAuth();

  const { orderId } = input;
  const data = foreignKeyReplacement(input);
  const lineItem = await db.orderLineItem.update({
    data,
    where: { id },
  });
  await calcOrderTotal({ orderId });
  return lineItem;
};

export const deleteOrderLineItem = async ({ id }) => {
  requireAuth();

  const item = await orderLineItem({ id });
  const lineItem = await db.orderLineItem.delete({
    where: { id },
  });
  await calcOrderTotal(item);
  return lineItem;
};

export const OrderLineItem = {
  order: (_obj, { root }) =>
    db.orderLineItem.findOne({ where: { id: root.id } }).order(),
  product: (_obj, { root }) =>
    db.orderLineItem.findOne({ where: { id: root.id } }).product(),
};
