import prisma from "../prisma";

type Subscribe = {
  email: string;
};

// READ
export const getAllSubscribers = async (deletedAt: boolean = false) => {
  const subscribers = await prisma.subscribe.findMany({
    where: {
      deletedAt,
    },
  });
  return subscribers;
};

export const getSingleSubscriber = async (id: string) => {
  const subscriber = await prisma.subscribe.findUnique({
    where: { id },
  });
  return subscriber;
};

// CREATE
export const createSubscriber = async (body: Subscribe) => {
  const subscriber = await prisma.subscribe.create({
    data: {
      ...body,
    },
  });
  return subscriber;
};

// UPDATE
export const updateSubscriber = async (id: string, body: Subscribe) => {
  const subscriber = await prisma.subscribe.update({
    where: {
      id,
    },
    data: {
      ...body,
    },
  });
  return subscriber;
};

// SOFT DELETE
export const suspendSubscriber = async (id: string) => {
  const subscriber = await prisma.subscribe.update({
    where: {
      id,
    },
    data: {
      deletedAt: true,
    },
  });
  return subscriber;
};

// HARD DELETE
export const deleteSubscriber = async (id: string) => {
  const subscriber = await prisma.subscribe.delete({
    where: {
      id,
    },
  });
  return subscriber;
};
