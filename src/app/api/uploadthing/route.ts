import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
import { UTApi } from "uploadthing/server";



// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter
});

export async function DELETE(request:Request){
  const {fileKey}=await request.json();
  const utApi=new UTApi();
  await utApi.deleteFiles(fileKey);
  return Response.json({message:"successfully deleted"},{status:200})
}