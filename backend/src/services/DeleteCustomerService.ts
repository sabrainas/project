import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({id}: DeleteCustomerProps){

        if(!id){
            throw new Error("Id is required");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Customer not found");
        }

        await prismaClient.customer.delete({
            where: {
                id: id
            }
        })

        return { message: "Customer deleted successfully"}
    }

}

export {DeleteCustomerService}