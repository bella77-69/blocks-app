import { PrismaClient } from '@prisma/client'

export const db =  new PrismaClient();


export const createBlock = async (block: any) => {
    try {
        const newBlock = await db.block.create({
            data: block
        })
        return newBlock
    }
    catch (error) {
        console.log(error)
    }
}