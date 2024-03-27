import { checkUserExists } from "../../database/user";

export default defineEventHandler(async (event) => {  
  try{
    const body = await readBody(event);
    console.log('I am bidy',body);
    
    const {username,password} = body;    
    const userData = await checkUserExists(username);
    
    if(!userData){
      sendError(event,createError({
        statusMessage:'User does not exists',
        statusCode:404
      }));
    }else if(userData){
        const {password:hashedPassword} = userData;
        const isPasswordMatched = comparePassword(password,hashedPassword);
        if(!isPasswordMatched){
          sendError(event,createError({
            message:'Username or password does not match',
            statusCode:401
          }));
          return;
        }
        const token =  generateJWT({username})
        return {
            username:userData.username,
            token
        }
    }
  }catch(e){
    console.log(e);
    sendError(event,createError({
      message:'Something went wrong',
      statusCode:500
    }));
    
  }
})
