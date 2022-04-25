import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const connect = async () => {
  await client
    .$connect()
    .then(() => console.log("Database connection succeeded!"))
    .catch((e: any) => console.error(e));
};

export default client;
