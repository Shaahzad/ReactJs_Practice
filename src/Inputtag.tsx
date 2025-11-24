import { useState } from "react"


const Inputtag = () => {
    const [tags, setTags] = useState<string[]>([])
    const [input, setInput] = useState<string>('')

    const HandleAddTags = () => {
        if (!input) {
            return alert('Add Value')
        }
        if (input) {
            setTags([...tags, input])
            setInput('')
        }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <input className="py-2 border bo" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={HandleAddTags} className="px-6 py-2 cursor-pointer bg-red-900 text-white">Add</button>
            </div>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </>
    )
}

export default Inputtag