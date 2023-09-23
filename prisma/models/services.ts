import prisma from "../prisma";

type Service = {
  title: string;
  description: string;
  image: string;
};

// READ
export const getAll = async (deletedAt: boolean = false) => {
  try {
    const records = await prisma.services.findMany({
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
    const record = await prisma.services.findUnique({
      where: { id },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};

// CREATE
export const create = async (body: Service) => {
  try {
    const record = await prisma.services.create({
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
export const update = async (id: string, body: Service) => {
  try {
    const record = await prisma.services.update({
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
    const record = await prisma.services.update({
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
    const record = await prisma.services.delete({
      where: {
        id,
      },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};
