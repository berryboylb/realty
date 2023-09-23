import prisma from "../prisma";

async function main() {
  const data = [
    {
      name: "Email",
      value: "info@example.com",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/6460d01246818cacc5ed6a7d_message-square.svg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Phone",
      value: "+12 345 678 9900",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/6460d01229e31e8a4095fa7a_phone.svg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Office",
      value: "1234 Harrison Avenue, New York NY",
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/6460d012215f1e351365b5ba_map-pin.svg",

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
  ];
  const response = await prisma.companyContact.createMany({
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
