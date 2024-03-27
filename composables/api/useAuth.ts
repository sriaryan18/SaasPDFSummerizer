interface ApiConfig {
  path:string,
  queryParams?:string,
  methodType:'post' | 'get',
}
type PossibleApis = 'signIn' | 'signUp'

interface AuthPayload {
  username:string,
  password:string,
  email?:string,
  mobile?:string | number,
}

export const useUserAuth = async (payload:AuthPayload,type:PossibleApis)  => {

  const {$api} = useNuxtApp();
 
  const appConfig : Record<PossibleApis , ApiConfig> = {
      signIn:{
        methodType:'post',
        path:'/api/auth/login',
      
      },
      signUp:{
        methodType:'post',
        path:'/api/auth/register',
        
      }
  }
  
    const {methodType,path} = appConfig[type];
      const response = await useFetch(path,{
          method:methodType,
          body:payload,
          $fetch:$api
      });

      console.log(response.data);
      
  
 
 return {response}
  
}