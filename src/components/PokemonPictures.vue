<template>
  <div class="pokemon-container">
    <img
      :src="imgSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />
    <img
      v-if="showPokemon"
      :src="imgSrc"
      class="fade-in"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {
  props: {
      pokemonId:{
        type: Number,
        require: true 
      },
      showPokemon: {
        type: Boolean,
        require: true,
        default: false
      }
      },
  computed:{
    imgSrc(){
      return require(`@/assets/${this.pokemonId}.png`)
    // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
    },
};
</script>

<style scoped>
/* Pokemon Image */
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 42%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}

</style>