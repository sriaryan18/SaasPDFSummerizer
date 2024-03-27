import {createNewUser} from '../../database/user'
import { generateJWT } from '../../utils/jwt';

export default defineEventHandler(async (event) => {
   const body = await readBody(event);
   try{
    const {username, password, email, name, mobile} = body;
    const hashedPassword = encryptPassword(password);

    const res= await createNewUser({
      username,
      email,
      name,
      password:hashedPassword,
      mobile
    });

    const token = generateJWT({username})

    return {
      ...res,
      token
    };

   }catch(e){
    console.log(e);
    
    sendError(event,createError({
      message:'Something Went Wrong',
      statusCode:500
    }))
   }
})
