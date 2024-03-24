import { defineStore } from 'pinia';


interface UserType {
  username:string,
  email:string,
  token:string,
  loginAt?:number | null
}


export const useMyAuthStoreStore = defineStore('Authentication',()=>{
  const user = ref<UserType>();  
  const setUserData = (data:UserType) => {
    user.value = {...data,'loginAt':Date.now()};
  }
  const  resetUserData = () => {
    user.value = {
      username:'',
      email:'',
      token:'',
      loginAt:null
    }
  }
  const isLoggedIn = computed(() => user.value?.username && user.value.token)
  return {user,setUserData,resetUserData,isLoggedIn}
})
