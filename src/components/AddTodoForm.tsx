
export default function addToDoForm() {
    // const [input, setInput] = useState();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return(
        <form className="flex  gap-2 pb-8 m-auto sm:w-11/12   " onSubmit={handleSubmit}>
            <input 
            type="text"
            // value={input}
            // onChange = {(e) => setInput(e.target.value)}

            placeholder="what needs to be done?"
             className=" grow rounded-3xl border border-gray-400 py-3 px-5   placeholder-gray-400 focus:border-gray-600 outline-none hover:border-gray-600 "
            />

            <button type="submit" className="rounded-3xl bg-blue-600 p-3 xs:px-4 md:px-5 md:py-3 text-white text-sm md:text-base lg:text-lg hover:bg-blue-700 transition transform hover:scale-105"> Add</button>
        </form>
    );


}