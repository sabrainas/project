import { useRef, FormEvent } from "react"
import { api } from "../services/api";


export const Form = () => {

    const nameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(!nameRef.current?.value || !emailRef.current?.value) return;

        const response = await api.post("/customer", {
            name: nameRef.current.value,
            email: emailRef.current.value
        })

    }

      return (
        <form className="flex flex-col my-6" action="" onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-semibold text-white">Nome:</label>
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                className="w-full mb-5 p-2 rounded" 
                ref={nameRef} 
            />

            <label htmlFor="email" className="font-semibold text-white">Email:</label>
            <input 
                type="email" 
                placeholder="Digite seu email" 
                className="w-full mb-5 p-2 rounded" 
                ref={emailRef}
            />

            <button 
                type="submit" 
                value="Cadastrar"
                className="bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded">Enviar
            </button>
        </form>
    )

}
