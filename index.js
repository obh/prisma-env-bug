import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

console.log("before -> ", process.env.DATABASE_URL)
dotenv.config({path: "prod.env"})
console.log("after -> ", process.env.DATABASE_URL)
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  console.log("hello world!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
