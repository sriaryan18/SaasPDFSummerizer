<template>
  <div class="flex justify-center mt-5 flex-col items-center gap-10 ">
    <FloatLabel>
      <InputText id="username" v-model="props.formvalues.value.username"/>
      <label for="username">Username / Email</label>
    </FloatLabel>
    <FloatLabel>
      <InputText type="password" id="password" v-model="props.formvalues.value.password" />
      <label for="password">Password</label>
    </FloatLabel>
    <Button
      label="Login"
      class="w-[35%]"
      @click="handleSignUp"
    />
  </div>
</template>

<script lang="ts" setup>


interface LoginFormProps{
  formvalues:Ref<{
    username:string,
    password:string,
    email:string,
  mobile:string
  }>
}

const props = defineProps<LoginFormProps>();


async function handleSignUp(e:Event){
  const {response:{data}} = await useUserAuth({
    "username":"Aryantest",
    "password":"test"
},'signIn');
console.log('I am data',data.value?.username);

}


</script>

<style>

</style>