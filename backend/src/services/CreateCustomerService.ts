import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string;
    email: string;
    cpf: string;
    address: string;
    rg: string
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps) {

        if (!name || !email) {
            throw new Error('name and email are required');
        }

        try {
            const customer = await prismaClient.customer.create({
                data: {
                    name,
                    email,
                    status: true,
                },
            });

            return customer;
        } catch (error) {
            console.error('Error creating customer:', error);
            throw new Error('Error creating customer');
        }
    }
}

export { CreateCustomerService } 