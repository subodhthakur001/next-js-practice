import { notFound } from "next/navigation";

export default async function Reviews({params,}:{
    params : Promise<{productId: string, reviewId: string}>
}){
    const reviewId = (await params).reviewId;
    const productId = (await params).productId;
    if(parseInt(reviewId) > 1000){
        notFound();
    }
    return <h1> Product of the {productId} review {reviewId} </h1>;
}