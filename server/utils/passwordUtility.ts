import bcrypt from 'bcrypt';

export const encryptPassword = (password:string) : string => {
  const {saltRounds} = useRuntimeConfig()
  return bcrypt.hashSync(password,saltRounds);
}

export const comparePassword =  (password:string,hashPassword:string) : Boolean => {
   const isEqual =  bcrypt
    .compareSync(password,hashPassword);
    return isEqual;
}