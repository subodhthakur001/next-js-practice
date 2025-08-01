import { comments } from "@/data/common";

export async function GET(_request : Request, {params}  : { params : Promise<{ id : string}>}

){
    const {id} = await params;
    const comment = comments.find((c) => c.id === parseInt(id));
    return Response.json(comment);

}


export async function DELETE(request : Request, {params} : {params : Promise<{id: string}>}

)
{
    const {id} = await params;
    const index = comments.findIndex((c) => c.id === parseInt(id));
    const deltedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deltedComment);


}

