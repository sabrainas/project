import { FiTrash } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export interface StudentProps{
    id: string;
    name: string;
    email: string;
    status: boolean;
    created_at: string;
}


export const Student = () => {

    const [student, setStudent] = useState<StudentProps[]>([])

    useEffect(() => {
      loadStudent()
    }, )
  
    async function loadStudent() {
      const response = await api.get("/customers")
      setStudent(response.data)
    }

    async function handleDelete(id: string) {
        try {
        await api.delete("/customer", {
            params: { 
                id: id
            }
        })

        const allStudent = student.filter((customer) =>customer.id !== id)
        setStudent(allStudent)

        loadStudent()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex flex-col gap-4'>
                {
                    student.map((customer) => (
                        <section className="w-full bg-white p-2 flex justify-between rounded hover:scale-105 duration-200" key={customer.id}>
                            <div>
                                <p><span className="font-semibold">Nome: </span>{customer.name}</p>
                                <p><span className="font-semibold">Email: </span>{customer.email}</p>
                                <p><span className="font-semibold">Status: </span>{customer.status ? " ATIVO " : " INATIVO "}</p>
                            </div>
                            
                            <button className=' w-7 h-7 flex items-center justify-center' onClick={() => handleDelete(customer.id)}>
                                <FiTrash size={20} color="rgb(127 29 29)"/>
                            </button>
                        </section>
                    ))
                }
            </div>
            
        </>
    )
}