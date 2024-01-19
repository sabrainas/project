export const Layout = ({children}: any) => {
    return(
        <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
            <main className=" my-10 w-full md: max-w-2xl">
                {children}
            </main>
        </div>
    )
}