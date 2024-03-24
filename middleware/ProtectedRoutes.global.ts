import { protectedRoutes, publicRoutes } from "./helper"

export default defineNuxtRouteMiddleware((to, from) => {   
    if(protectedRoutes.includes(to.path)){
        const isLoggedIn = useMyAuthStoreStore().isLoggedIn;
        if(!isLoggedIn){
            return  navigateTo('/auth')
        }
    }else if(publicRoutes.includes(to.path)){
        const isLoggedIn = useMyAuthStoreStore().isLoggedIn;
        if(isLoggedIn && to.path!=='/'){
            return  navigateTo('/')
        }
    }

})
