<template>
  <div class="bg-white h-[8rem] rounded-lg flex justify-center items-center border-2 border-primary-200 ">
    <div class="flex items-center flex-col gap-4" >
      <FileUpload 
        v-bind="props"
        @uploader="handleCustomeUpload"
        @upload="onUpload"  
      />
      <p>Upload Your File here</p>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import type { FileUploadUploaderEvent,FileUploadProps } from 'primevue/fileupload';
import FileUpload from 'primevue/fileupload';

interface EmitTypes {
  (e?:'onUpload') : void,
  (e?:'customUploader') : void
}



const props =defineProps<FileUploadProps>();

const emits = defineEmits<EmitTypes>()

function onUpload(event:FileUploadUploaderEvent){
  console.log('cscsj');
}
const handleCustomeUpload = () =>{
    emits('customUploader')
}
</script> 

<style>

</style>



