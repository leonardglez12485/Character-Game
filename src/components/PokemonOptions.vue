<template>
  <div class="options-container">
    <ul>
      <li v-for="char in characters" :key="char.id" @click="$emit('selection', char.id)">
         {{ char.name }}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
   props:{
    characters:{
      type: Array,
      requeire: true
    }  
  }
}
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>