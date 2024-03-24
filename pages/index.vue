<template>
    <div class=" flex h-[100vh] justify-center">
        <div class=" border-2 border-black w-[60%] flex flex-col pt-[2rem] pb-[2rem] gap-4 items-center overflow-scroll">
          <div class=" items-center flex flex-col gap-4 "> 
            <h1 class="text-3xl font-extrabold">Chat with PDF</h1>
            <div class="gap-4 flex flex-wrap justify-center">
              <NuxtLink to="/chats">
                <Button label="Go To Chats" icon="pi pi-arrow-right" icon-pos="right" class="p-2"/>
              </NuxtLink>
              
              <Button label="Manage Subscriptions" :pt="{root:{class:'bg-primary-0 p-2 rounded border-2 border-primary-300'}}"/>
            </div>
          </div>
           <div class=" w-[40%] text-center  text-gray-500">
            <p>Join Millond of students, researcher and Professor to instantly answer questions using AI from a PDF</p>
           </div>
           <div class="w-[70%]">
              <BaseUpload choose-label="Upload" mode="basic" @custom-uploader="console.log('cnsncks')" custom-upload auto/>
           </div>
           <div>
            <Image src="../assets/chat_gpt-sixteen_nine.jpg"/>
           </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
  
</script>

<style>

</style>