import { JWTPayload } from "~/types/CommonTypes";
import jwt from 'jsonwebtoken';

export const generateJWT = (payload:JWTPayload) => {
  const {jwrSecret,jwtExpireTime} = useRuntimeConfig().jwt;
  return  jwt.sign(payload,jwrSecret,{expiresIn:jwtExpireTime})
}