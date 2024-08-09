import Header from "./Header.tsx";
import {Blog} from "./models.ts";
import {ChangeEvent, useState} from "react";

export default function App() {
    console.log("Render")

    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [visible, setVisible] = useState<boolean>(true)

    const myBlogEntry: Blog = {
        id: "1",
        title: "Mein Mittwoch",
        text: "bla"
    }

    const add = (num1: number, num2: number) => {
        return num1 + num2
    }

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("OnChange")
        console.log(event.target.value)
        setName(event.target.value)
    }

    return (
        <div>
            <Header/>
            <p>{name + " !"} Test</p>
            <p>{add(8, 9)}</p>

            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                Button
            </button>

            <input onChange={onNameChange}
                   value={name}
                   placeholder={"Name"}/>

            <p>{myBlogEntry.title}</p>
            <p>{myBlogEntry.text}</p>
            {visible && <Header/>}

            {count > 10 && <p>Count ist über 10!</p>}
            {count === 15
                ? <p>
                    Count is gleich 15!
                </p>
                : <p>
                    Count ist nicht 15!
                </p>}
        </div>
    )
}
