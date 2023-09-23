import prisma from "../prisma";

type Contact = {
  fullname: string;
  phone: string;
  email: string;
  message: string;
};

// READ
export const getAllContacts = async (deletedAt: boolean = false) => {
  const contacts = await prisma.contact.findMany({
    where: {
      deletedAt,
    },
  });
  return contacts;
};

export const getSingleContact = async (id: string) => {
  const contact = await prisma.contact.findUnique({
    where: { id },
  });
  return contact;
};

// CREATE
export const createContact = async (body: Contact) => {
  const contact = await prisma.contact.create({
    data: {
      ...body,
    },
  });
  return contact;
};

// UPDATE
export const updateContact = async (id: string, body: Contact) => {
  const contact = await prisma.contact.update({
    where: {
      id,
    },
    data: {
      ...body,
    },
  });
  return contact;
};

// SOFT DELETE
export const suspendContact = async (id: string) => {
  const contact = await prisma.contact.update({
    where: {
      id,
    },
    data: {
      deletedAt: true,
    },
  });
  return contact;
};

// HARD DELETE
export const deleteContact = async (id: string) => {
  const contact = await prisma.contact.delete({
    where: {
      id,
    },
  });
  return contact;
};
