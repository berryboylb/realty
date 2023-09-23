import prisma from "../prisma";

type BlogPost = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  content: string;
};

// READ
export const getAll = async (deletedAt: boolean = false) => {
  try {
    const records = await prisma.blogPost.findMany({
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
    const record = await prisma.blogPost.findUnique({
      where: { id },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};

// CREATE
export const create = async (body: BlogPost) => {
  try {
    const record = await prisma.blogPost.create({
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
export const update = async (id: string, body: BlogPost) => {
  try {
    const record = await prisma.blogPost.update({
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
    const record = await prisma.blogPost.update({
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
    const record = await prisma.blogPost.delete({
      where: {
        id,
      },
    });
    return { record };
  } catch (error) {
    return { error };
  }
};
