import { db } from 'src/lib/db';
const bcrypt = require('bcrypt');
const snakeCase = require('lodash/snakeCase');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const tokenExpiry = '2d';
const selectUser = {
  id: true,
  email: true,
  displayName: true,
  userName: true,
  createdAt: true,
};

const emailExists = ({ email }) => {
  return db.user.findOne({
    where: { email },
    select: selectUser,
  });
};

export const users = () => {
  return db.user.findMany({ select: selectUser });
};

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
    select: selectUser,
  });
};

export const createUser = async ({ input }) => {
  const check = await emailExists(input);
  if (check) {
    throw new Error('This e-mail already exists');
  }

  const hashed = await bcrypt.hash(input.password, saltRounds);
  if (!input.userName && input.displayName) {
    input.userName = snakeCase(input.displayName);
  }

  return db.user.create({
    data: { ...input, password: hashed },
    select: selectUser,
  });
};

export const updateUser = async ({ id, input }) => {
  const hashed = await bcrypt.hash(input.password, saltRounds);

  return db.user.update({
    data: { ...input, password: hashed },
    where: { id },
    select: selectUser,
  });
};

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
    select: selectUser,
  });
};

export const loginUser = async ({ input: { email, password } }) => {
  const user = await db.user.findOne({
    where: { email },
    select: { ...selectUser, password: true },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const isValid = await bcrypt.compare(password, user.password);
  delete user.password;

  if (!isValid) {
    throw new Error('Wrong credentials');
  }

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: tokenExpiry,
  });

  return { user, token };
};

export const logoutUser = () => {
  // not implemented yet
  return true;
};

export const User = {
  Order: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id }, select: selectUser }).Order(),
};
