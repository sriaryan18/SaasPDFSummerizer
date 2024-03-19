import { UserType } from "~/types/UserTypes"
import { prisma } from "."
import { checkUserExistsResponse } from "~/types/CommonTypes";

export const createNewUser = async ({username, password, email, name, mobile} : UserType) => {

   const res= await prisma.user.create({data:{
    email,
    mobile,
    password,
    username,
    name
   }});
   return {
      email:res.email,
      name: res.name,
      username:res.username
   }

}

export const checkUserExists = async (query:string) : Promise<checkUserExistsResponse | null>=>{
   const response = await prisma.user.findFirst({
      where:{
         OR:[
            {username:{
               equals:query
            }},
            {email:{
               equals:query
            }}
         ]
      }
   });
   
   if(response) return {
         username:response.username,
         password:response.password
   } satisfies checkUserExistsResponse
   else return null
}