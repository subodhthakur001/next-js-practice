import { comments } from "@/data/common";

export async function GET(){
    return Response.json(comments);
}

export async function POST(request : Request){
    const comment = await request.json();
    const newComment = {
        id : comments.length + 1,
        text : comment.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers: {"content-Type" : "application/json"},
        status : 201
    })

}