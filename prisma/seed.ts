import { Prisma, PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

let itemData: Prisma.ItemCreateInput[] = [
  {
    name: 'Dog Food',
    prevPrice: 1200,
    price: 840,
    description: 'Рога оленя для собак весом от 10 до 30 кг',
    image: '/img/food.png',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const data of itemData) {
    const item = await prisma.item.create({
      data,
    });
    console.log(`Created user with id: ${item.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
