<template>
    <div class="border-2 border-red-300 flex justify-center items-center h-[100vh] ">
      <div class="w-[50%]">
        <BaseTabComponent
        :pannel="pannels"
        :tabViewProps="tabViewProps"
        :pt="{
          root:{class:'rounded'},
          nav:{class:'justify-around'},
          inkbar:{style:{display:'none'}},
        
      }"
      :pt-options="{mergeProps:true,mergeSection:true}"
    />
      </div>
    
  </div>
 
</template>

<script lang="ts" setup>

interface UserForm {
  username:string,
  password:string,
  email:string,
  mobile:number | null

}



const formvalues = ref<UserForm>({
  username:'',
  email:'',
  mobile:null,
  password:''
})

const pannels = [
  {
    id:1,
    headerComponent : resolveComponent('AuthLoginButton'),
    bodyComponent: resolveComponent('AuthLoginForm'),
    pannelProps:{
      bodyProps:{
        formvalues,
      } 
    } 
  },
  {
    id:2,
    headerComponent : resolveComponent('AuthSignUpButton'),
    bodyComponent: resolveComponent('AuthSignUpForm') ,
    pannelProps:{
      bodyProps:{
        formvalues,
      } 
    } 

  }
]
const tabViewProps={
  activeIndex:1,
}

</script>

<style>

</style>