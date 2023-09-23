import prisma from "../prisma";

async function main() {
  const data = [
    {
      fullName: "John Smith",
      description:
        "Working with Realty was a pleasure from start to finish. Their team is knowledgeable, professional, and dedicated to helping you find the perfect property. Highly recommend!",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/645ba5a149a601589986b898_testimonial%2001.jpg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },

    {
      fullName: "Jane Doe",
      description:
        "I couldn't be happier with the service I received from Realty. They made the buying process smooth and stress-free, and I couldn't be happier with my new home. Thank you!",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/645ba5a12d80b3abe4a3966d_testimonial%2002.jpg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
  ];
  const response = await prisma.reviews.createMany({
    data,
  });
  console.log("Inserted dummy reviews:", response);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
