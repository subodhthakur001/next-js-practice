"use client";
import { useRouter } from "next/navigation"
export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        router.push("/")
    }
    return (
    <>
    <h1>hello this is the order page</h1>
    <button className='bg-white text-black'onClick={handleClick}>Place order</button>
    </>
    )
   
}