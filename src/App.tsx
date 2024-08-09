import Header from "./Header.tsx";
import {Blog} from "./models.ts";

export default function App() {

    const name: string = "Florian"

    const myBlogEntry: Blog = {
        id: "1",
        title: "Mein Mittwoch",
        text: "bla"
    }

    const add = (num1: number, num2: number) => {
        return num1 + num2
    }

    return (
        <div>
            <Header />
            <p>{name + " !"} Test</p>
            <p>{add(8, 9)}</p>
            <button>Button</button>
            <p>{myBlogEntry.title}</p>
            <p>{myBlogEntry.text}</p>
            <Header />
        </div>
    )
}
