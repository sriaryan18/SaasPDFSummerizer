export default defineNuxtPlugin((nuxtApp) => {
  
    
    const {user} = useMyAuthStoreStore()
    const $api = $fetch.create({
        baseURL:process.env.BASE_URL,
        
        onRequest({request,options,error}) {
            if(user?.token){
                options.headers = options.headers || {};
                options.headers['Authorization' as keyof HeadersInit] = `Bearer ${user.token}`
            }
        },
        onRequestError({response}):any{
            if (response?.status === 401) {
                return navigateTo('/auth')
              }
        }
       
        
    })
    return {
        provide:{
            api:$api
        }
    }
})
