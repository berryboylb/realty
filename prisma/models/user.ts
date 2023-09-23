import prisma from "../prisma";
import { UserRole } from "@/lib";

type User = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone: string;
  picture: string;
  role: UserRole;
  isVerified: boolean;
  loginToken: string;
  loginTokenExpires: Date;
  password: string;
};

// READ
export const getAll = async (deletedAt: boolean = false) => {
  try {
    const records = await prisma.user.findMany({
      where: {
        deletedAt,
      },
    });
    return { records };
  } catch (error) {
    return { error };
  }
};

export const getOne = async (id: string) => {
  try {
    const record = await prisma.user.findUnique({
      where: { id },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};

// CREATE
export const create = async (body: User) => {
  try {
    const record = await prisma.user.create({
      data: {
        ...body,
      },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};

// UPDATE
export const update = async (id: string, body: User) => {
  try {
    const record = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};

// SOFT DELETE
export const suspend = async (id: string) => {
  try {
    const record = await prisma.user.update({
      where: {
        id,
      },
      data: {
        deletedAt: true,
      },
    });
    return { record };
  } catch (error) {}
};

// HARD DELETE
export const remove = async (id: string) => {
  try {
    const record = await prisma.user.delete({
      where: {
        id,
      },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};
