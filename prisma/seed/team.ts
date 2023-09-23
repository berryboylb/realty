import prisma from "../prisma";

async function main() {
  const data = [
    {
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/645fab2dd0f1ddfad238f257_team-member-01.jpg",
      fullName: "Emily Rodriguez",
      position: "Sales Manager",
      instagramLink: "https://instagram.com",
      twitterLink: "https://twitter.com",
      facebookLink: "https://facebook.com",
      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/645fab2d21302df2d16464e4_team-member-02.jpg",
      fullName: "Michael Johnson",
      position: "CEO",
      instagramLink: "https://instagram.com",
      twitterLink: "https://twitter.com",
      facebookLink: "https://facebook.com",
      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/645fab2d5e4b02b72cfe71fd_team-member-03.jpg",
      fullName: "William Brown",
      position: "Senior Real Estate Agent",
      instagramLink: "https://instagram.com",
      twitterLink: "https://twitter.com",
      facebookLink: "https://facebook.com",
      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      image:
        "https://assets.website-files.com/644bd4412d68a90f78fd3896/645fab2d5e4b02b72cfe721d_team-member-04.jpg",
      fullName: "Samantha Lee",
      position: "Administrative Assistant",
      instagramLink: "https://instagram.com",
      twitterLink: "https://twitter.com",
      facebookLink: "https://facebook.com",
      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
  ];
  const response = await prisma.team.createMany({
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
