export default async function ProductDetails({params,}: {
    params: Promise<{productId: string}>
}){
    const productId = (await params).productId;
    return <h1>Details about product with productId : {productId} </h1>
}