import prisma from "../prisma";

type Team = {
  fullName: string;
  position: string;
  image: string;
  instagramLink: string;
  twitterLink: string;
  facebookLink: string;
};

// READ
export const getAll = async (deletedAt: boolean = false) => {
  try {
    const records = await prisma.team.findMany({
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
    const record = await prisma.team.findUnique({
      where: { id },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};

// CREATE
export const create = async (body: Team) => {
  try {
    const record = await prisma.team.create({
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
export const update = async (id: string, body: Team) => {
  try {
    const record = await prisma.team.update({
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
    const record = await prisma.team.update({
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
    const record = await prisma.team.delete({
      where: {
        id,
      },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};
