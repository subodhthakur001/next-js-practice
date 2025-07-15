import { Metadata } from "next"
import { title } from "process"
export const metadata : Metadata = {
    title : {
        absolute : "Blog"
    }
}
export default function First(){
    return <h1>My Blog first</h1>
}