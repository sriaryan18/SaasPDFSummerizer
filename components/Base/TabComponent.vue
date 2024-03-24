<template>
    <TabView :v-bind="props.tabViewProps">
      <TabPanel v-for="{pannelProps,id, headerComponent,bodyComponent} in props.pannel">
        <template #header>
           <component :is="headerComponent" v-bind="pannelProps?.headerProps" />
        </template>
          <component :is="bodyComponent"  v-bind="pannelProps?.bodyProps"/>
      </TabPanel>
      
    </TabView>
    
    
</template>

<script lang="ts" setup>
import type { TabViewProps}  from 'primevue/tabview';
import type { Component } from 'vue';

interface TabPannel {
  pannelProps?:any,  // TODO: apply appropiate props
  id:string | number,
  headerComponent: Component | string
  bodyComponent:Component | string,
}

interface componenetProps {
  tabViewProps:TabViewProps
  pannel:	TabPannel[],
}


const props = defineProps<componenetProps>();


</script>

<style>

</style>