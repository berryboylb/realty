import prisma from "../prisma";

async function main() {
  const data = [
    {
      title: "PROPERTY VALUATION",
      description:
        "Get an accurate valuation of your property with our expert team.",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/6460d01246818cacc5ed6a7d_message-square.svg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      title: "PROPERTY MANAGEMENT",
      description:
        "We offer full-service property management to help you maximize your investment.",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/6460d01246818cacc5ed6a7d_message-square.svg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      title: "INVESTMENT OPPORTUNITIES",
      description:
        "Our team can help you identify and invest in profitable real estate opportunities.",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/6460d01246818cacc5ed6a7d_message-square.svg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
  ];
  const response = await prisma.services.createMany({
    data,
  });
  console.log("Inserted dummy services:", response);
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
