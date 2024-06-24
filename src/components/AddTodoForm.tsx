
export default function addToDoForm() {
    return(
        <form className="flex  gap-3 pb-8 w-11/12 m-auto">
            <input 
            type="text"
            placeholder="what needs to be done?"
             className=" grow rounded-3xl border border-gray-400 p-3"
            />

            <button type="submit" className="rounded-3xl bg-blue-600 p-3 xs:px-4 md:px-6 md:py-3 text-white text-sm md:text-base lg:text-lg"> Add</button>
        </form>
    )


}