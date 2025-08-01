import { Metadata } from "next"
export const metadata : Metadata = {
    title : {
        absolute : "Blog"
    }
}
export default function First(){
    return <h1>My Blog first</h1>
}