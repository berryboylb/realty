import prisma from "../prisma";

async function main() {
  const blogPosts = [
    {
      title: "Creating a cozy living room and tricks",
      description:
        "Make your living room the perfect place to relax and entertain with our tips for creating a cozy place",
      image:
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645badd20c976617d2727593_post%2001-p-800.jpg",
      tags: ["Home Decor", "Living Room"],
      content: `<div class="rich-text w-richtext"><p>Your living room is the heart of your home, where you relax, entertain guests, and spend quality time with your loved ones. But how do you create a cozy and inviting space that reflects your personal style and makes you feel at home?</p><p>Here are some tips and tricks to help you create a cozy living room:</p><ol role="list"><li>Choose warm colors: Warm colors like beige, brown, and rust can create a cozy and inviting atmosphere in your living room. Consider painting your walls or adding accent pieces in these colors to create a warm and welcoming space.</li><li>Add soft textures: Soft textures like plush rugs, cozy throws, and fluffy pillows can add a touch of luxury and comfort to your living room. These items not only look great, but they also make your space feel more inviting and comfortable.</li><li>Create a focal point: A focal point, such as a fireplace, artwork, or a statement piece of furniture, can help draw the eye and create a sense of harmony in your living room. Choose a focal point that reflects your personal style and adds visual interest to your space.</li><li>Layer lighting: Lighting is a crucial element in creating a cozy living room. By layering different types of lighting, such as ambient, task, and accent lighting, you can create a warm and inviting atmosphere that is perfect for relaxing or entertaining guests.</li><li>Personalize your space: Finally, don't forget to personalize your living room with items that reflect your personal style and interests. Whether it's a collection of books, artwork, or family photos, these items can add a personal touch to your living room and make it feel truly yours.</li></ol><p>In conclusion, creating a cozy living room is all about combining comfort, style, and personal touches. By following these tips and tricks, you can transform your living room into a warm and inviting space that you and your loved ones will enjoy for years to come.</p></div>`,
      createdAt: "2023-01-01T10:00:00.000Z",
      updatedAt: "2023-01-01T10:00:00.000Z",
      deletedAt: false,
    },
    {
      title: "Add a Pop of Colour with a Statement Armchair",
      description:
        "Brighten up any space with a bold yellow armchair and add a pop of colour to your decor with our expert advice",
      image:
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645bae2cda50f50faac09640_post%2002.jpg",
      tags: ["Home Decor", "Furniture"],
      content: `<div class="rich-text w-richtext"><p>Your living room is the heart of your home, where you relax, entertain guests, and spend quality time with your loved ones. But how do you create a cozy and inviting space that reflects your personal style and makes you feel at home?</p><p>Here are some tips and tricks to help you create a cozy living room:</p><ol role="list"><li>Choose warm colors: Warm colors like beige, brown, and rust can create a cozy and inviting atmosphere in your living room. Consider painting your walls or adding accent pieces in these colors to create a warm and welcoming space.</li><li>Add soft textures: Soft textures like plush rugs, cozy throws, and fluffy pillows can add a touch of luxury and comfort to your living room. These items not only look great, but they also make your space feel more inviting and comfortable.</li><li>Create a focal point: A focal point, such as a fireplace, artwork, or a statement piece of furniture, can help draw the eye and create a sense of harmony in your living room. Choose a focal point that reflects your personal style and adds visual interest to your space.</li><li>Layer lighting: Lighting is a crucial element in creating a cozy living room. By layering different types of lighting, such as ambient, task, and accent lighting, you can create a warm and inviting atmosphere that is perfect for relaxing or entertaining guests.</li><li>Personalize your space: Finally, don't forget to personalize your living room with items that reflect your personal style and interests. Whether it's a collection of books, artwork, or family photos, these items can add a personal touch to your living room and make it feel truly yours.</li></ol><p>In conclusion, creating a cozy living room is all about combining comfort, style, and personal touches. By following these tips and tricks, you can transform your living room into a warm and inviting space that you and your loved ones will enjoy for years to come.</p></div>`,
      createdAt: "2023-02-15T14:30:00.000Z",
      updatedAt: "2023-02-15T14:30:00.000Z",
      deletedAt: false,
    },
    {
      title: "Sleek and Modern: A virtual tour of a contemporary home",
      description:
        "Take a virtual tour of your modern stunning home, inisde and out and experience the slick style and innovative features for yourself",
      image:
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645bae3d7b4a0bc0677b1444_post%2003.jpg",
      tags: ["Home Tours", "Real State"],
      content: `<div class="rich-text w-richtext"><p>Your living room is the heart of your home, where you relax, entertain guests, and spend quality time with your loved ones. But how do you create a cozy and inviting space that reflects your personal style and makes you feel at home?</p><p>Here are some tips and tricks to help you create a cozy living room:</p><ol role="list"><li>Choose warm colors: Warm colors like beige, brown, and rust can create a cozy and inviting atmosphere in your living room. Consider painting your walls or adding accent pieces in these colors to create a warm and welcoming space.</li><li>Add soft textures: Soft textures like plush rugs, cozy throws, and fluffy pillows can add a touch of luxury and comfort to your living room. These items not only look great, but they also make your space feel more inviting and comfortable.</li><li>Create a focal point: A focal point, such as a fireplace, artwork, or a statement piece of furniture, can help draw the eye and create a sense of harmony in your living room. Choose a focal point that reflects your personal style and adds visual interest to your space.</li><li>Layer lighting: Lighting is a crucial element in creating a cozy living room. By layering different types of lighting, such as ambient, task, and accent lighting, you can create a warm and inviting atmosphere that is perfect for relaxing or entertaining guests.</li><li>Personalize your space: Finally, don't forget to personalize your living room with items that reflect your personal style and interests. Whether it's a collection of books, artwork, or family photos, these items can add a personal touch to your living room and make it feel truly yours.</li></ol><p>In conclusion, creating a cozy living room is all about combining comfort, style, and personal touches. By following these tips and tricks, you can transform your living room into a warm and inviting space that you and your loved ones will enjoy for years to come.</p></div>`,
      createdAt: "2023-03-10T08:45:00.000Z",
      updatedAt: "2023-03-10T08:45:00.000Z",
      deletedAt: false,
    },
    {
      title: "Revamp your kitchen: Simple Upgrades for a new look",
      description:
        "Transform your kitchen without breaking the bank with our easy upgrades and give your space a fresh new look.",
      image:
        "https://assets.website-files.com/644bdb9dc906ebc2d53b5353/645bae53060be1b9dc8c66fc_post%2004.jpg",
      tags: ["Home Upgrades", "Kitchen"],
      content: `<div class="rich-text w-richtext"><p>Your living room is the heart of your home, where you relax, entertain guests, and spend quality time with your loved ones. But how do you create a cozy and inviting space that reflects your personal style and makes you feel at home?</p><p>Here are some tips and tricks to help you create a cozy living room:</p><ol role="list"><li>Choose warm colors: Warm colors like beige, brown, and rust can create a cozy and inviting atmosphere in your living room. Consider painting your walls or adding accent pieces in these colors to create a warm and welcoming space.</li><li>Add soft textures: Soft textures like plush rugs, cozy throws, and fluffy pillows can add a touch of luxury and comfort to your living room. These items not only look great, but they also make your space feel more inviting and comfortable.</li><li>Create a focal point: A focal point, such as a fireplace, artwork, or a statement piece of furniture, can help draw the eye and create a sense of harmony in your living room. Choose a focal point that reflects your personal style and adds visual interest to your space.</li><li>Layer lighting: Lighting is a crucial element in creating a cozy living room. By layering different types of lighting, such as ambient, task, and accent lighting, you can create a warm and inviting atmosphere that is perfect for relaxing or entertaining guests.</li><li>Personalize your space: Finally, don't forget to personalize your living room with items that reflect your personal style and interests. Whether it's a collection of books, artwork, or family photos, these items can add a personal touch to your living room and make it feel truly yours.</li></ol><p>In conclusion, creating a cozy living room is all about combining comfort, style, and personal touches. By following these tips and tricks, you can transform your living room into a warm and inviting space that you and your loved ones will enjoy for years to come.</p></div>`,
      createdAt: "2023-04-20T12:15:00.000Z",
      updatedAt: "2023-04-20T12:15:00.000Z",
      deletedAt: false,
    },
    {
      title:
        "Kitchen Decor Ideas: Bringing Style and Functionality to Your Space",
      description:
        "Latest trends and creative ideas to transform your kitchen into a stylish and functional space.",
      image: "https://example.com/database-design-image.jpg",
      tags: ["Home Decor", "Kitchen", "Home Upgrades"],
      content: `<div class="rich-text w-richtext"><p>Your living room is the heart of your home, where you relax, entertain guests, and spend quality time with your loved ones. But how do you create a cozy and inviting space that reflects your personal style and makes you feel at home?</p><p>Here are some tips and tricks to help you create a cozy living room:</p><ol role="list"><li>Choose warm colors: Warm colors like beige, brown, and rust can create a cozy and inviting atmosphere in your living room. Consider painting your walls or adding accent pieces in these colors to create a warm and welcoming space.</li><li>Add soft textures: Soft textures like plush rugs, cozy throws, and fluffy pillows can add a touch of luxury and comfort to your living room. These items not only look great, but they also make your space feel more inviting and comfortable.</li><li>Create a focal point: A focal point, such as a fireplace, artwork, or a statement piece of furniture, can help draw the eye and create a sense of harmony in your living room. Choose a focal point that reflects your personal style and adds visual interest to your space.</li><li>Layer lighting: Lighting is a crucial element in creating a cozy living room. By layering different types of lighting, such as ambient, task, and accent lighting, you can create a warm and inviting atmosphere that is perfect for relaxing or entertaining guests.</li><li>Personalize your space: Finally, don't forget to personalize your living room with items that reflect your personal style and interests. Whether it's a collection of books, artwork, or family photos, these items can add a personal touch to your living room and make it feel truly yours.</li></ol><p>In conclusion, creating a cozy living room is all about combining comfort, style, and personal touches. By following these tips and tricks, you can transform your living room into a warm and inviting space that you and your loved ones will enjoy for years to come.</p></div>`,
      createdAt: "2023-05-05T16:40:00.000Z",
      updatedAt: "2023-05-05T16:40:00.000Z",
      deletedAt: false,
    },
  ];
  const createdBlogPosts = await prisma.blogPost.createMany({
    data: blogPosts,
  });
  console.log("Inserted dummy blog posts:", createdBlogPosts);
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
