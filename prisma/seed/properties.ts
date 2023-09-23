import prisma from "../prisma";

async function main() {
  const data = [
    {
      name: "Luxury Condo",
      amount: "5750000",
      address: "456, Park Avenue, New York, NY",
      bedrooms: "3",
      bathrooms: "2",
      space: "2200",
      description:
        "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
      image: [
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645b95796a3a9507fa269c8d_main-property-01.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20e21d00b10fa778062_eduardo-alvarado-4KRJEfaqY-A-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20eaab91ae17916270d_spacejoy-nEtpvJjnPVo-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20faab2f481ee970a21_spacejoy-YI2YkyaREHk-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20eb807493e58d414b5_spacejoy-YqFz7UMm8qE-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20ef1f760439fc4139e_roam-in-color-RryFk4n-vOs-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20e1432f4ca53b32bb5_spacejoy-IH7wPsjwomc-unsplash.jpg",
      ],

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Mountain Retreat",
      amount: "7900000",
      address: "789 Aspen Ridge Road, Aspen CO",
      bedrooms: "3",
      bathrooms: "2",
      space: "2200",
      description:
        "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
      image: [
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645b95853b958381ca1a8f8a_main-property-02.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba23e1d75933f8fdaceec_spacejoy-85pCvDWDMmI-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba23e13538c8862326c14_spacejoy-ffFnddUEaL4-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba23e36f656fd5072fad0_spacejoy-g3KbcDWrBUM-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba23e821ce0791b0b42a7_spacejoy-WHftO_2Be5o-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20ef1f760439fc4139e_roam-in-color-RryFk4n-vOs-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba20e1432f4ca53b32bb5_spacejoy-IH7wPsjwomc-unsplash.jpg",
      ],

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Downtown Penthouse",
      amount: "3250000",
      address: "1010 Brickell Avenue, Miami, FL",
      bedrooms: "5",
      bathrooms: "6",
      space: "6000",
      description:
        "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
      image: [
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645b958d7c5c3c8b21fe7e29_main-property-03.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba24f460d48a799381826_alyssa-strohmann-2r2RUsEU1Aw-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba23e13538c8862326c14_spacejoy-ffFnddUEaL4-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba24f48d26b072a43ac90_bilal-mansuri-uJWiOvOPVGk-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba24faab2f465e8970e1a_kam-idris-vqMQN9zImG4-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba24f57c7aea425618348_spacejoy-4sDvPgKK4jE-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba24faab2f407df970e19_spacejoy-AAy5l4-oFuw-unsplash.jpg",
      ],

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Oceanfront Estate",
      amount: "12500000",
      address: "123 View Ocean Drive Malibu, CA",
      bedrooms: "6",
      bathrooms: "4",
      space: "8500",
      description:
        "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
      image: [
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645b9595b620b35a96d2c2cc_main-property-04.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25ed405de6715e2bdaa_hutomo-abrianto-9mPl0Zo7_gQ-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25e5b9f145f7147bc81_spacejoy-M95SWsUIXTE-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25eab5302786b1f373e_spacejoy-lMD5yogVPWM-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25e6228f19142afc96e_spacejoy-kz_xZG9ufbk-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25e48d26bcc4e43ad3a_spacejoy-fkOURiFtFCk-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25e5b9f14293a47bc80_r-architecture-M6E8SO73MPY-unsplash.jpg",
      ],

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Modern Villa",
      amount: "4950000",
      address: "123 Ocean Breeze Drive, Malibu, CA",
      bedrooms: "4",
      bathrooms: "5",
      space: "4200",
      description:
        "This exquisite modern villa is a true oasis for couples who value privacy and luxury. The interiors are sleek and sophisticated with light colors, and the outdoor areas are simply stunning. The open-concept living room and dining area lead to a lush garden and a serene pool, while the bedrooms are spacious and comfortable. The villa boasts state-of-the-art amenities, including a fully-equipped kitchen, a fitness center, and a cinema room.",
      image: [
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/646a13f864dc0b5ec348f96f_main-property-06.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/646a1414e56849aa8a9841fd_alona-gross-jPShfuaDs9I-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/646a1414e54349b00ab21a19_alona-gross-YZoBIZtr6II-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba25eab5302786b1f373e_spacejoy-lMD5yogVPWM-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/646a1414f01604a84f93fec2_laura-adai-J60bPeDiR8A-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/646a1414ffc7d3ef568fc300_r-architecture-P_0tnQ8hb70-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/646a14140462344c0938d472_r-architecture-KqMaA8gDfl0-unsplash.jpg",
      ],

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      name: "Penthouse with Rooftop Pool",
      amount: "6500000",
      address: "1010 Collins Avenue, Miami Beach, FL",
      bedrooms: "5",
      bathrooms: "6",
      space: "5000",
      description:
        "This stunning penthouse apartment is a true gem in the heart of Miami Beach. The two-story unit boasts a unique and inviting design with wooden accents, green plants, and an abundance of natural light. The living areas are spacious and elegant, featuring a gourmet kitchen, a dining room, and a cozy lounge area. The bedrooms are all generously sized, with en-suite bathrooms and walk-in closets. The highlight of the property is the rooftop pool and lounge area, which offers breathtaking views of the ocean and the city skyline.",
      image: [
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645b959df76c744814c2c028_main-property-05.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba272fa6ce9af5aba7266_vista-wei-IbUpH8-AkX8-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba2722d80b34204a36960_r-architecture-wDDfbanbhl8-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba27247d35e6a981be210_hemant-kanojiya-LSKfjiXsbUU-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba2725b9f14785b47bd9b_r-architecture-rOk4VSMS3Ck-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645ba272b8074943a2d41732_r-architecture-W6YhRmR8nuA-unsplash.jpg",
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645b959df76c744814c2c028_main-property-05.jpg",
      ],

      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
  ];
  const response = await prisma.property.createMany({
    data,
  });
  console.log("Inserted dummy properties:", response);
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
