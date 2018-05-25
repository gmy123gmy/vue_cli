<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul >
        <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinished(item)" >
            {{item.lable}}
        </li>
    </ul>
  </div>
</template>
<script>

import Store from '@/js/store'
var initItems=Store.fetch();
//console.log(initItems);
export default {
  name: 'todo',
  data :function() {
    return {
      title: 'This is a toDoList.',
      items:initItems,
      newItem:''
    }
  },
   watch:{
     items: {
      handler: function (items) { 
            Store.save(items);
       },
      deep: true
    }
  },
  methods:{
    toggleFinished:function(item){
    item.isFinished=!item.isFinished;
    },
    addNew:function(){
        this.items.push({
          lable:this.newItem,
          isFinished:false
        });
        this.newItem="";
    }
  }
 
}
</script>
