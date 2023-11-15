<template>
   <h1 v-if="!character">Cargando Personaje... </h1>
   <div v-else>
      <h1>Quien es este Personaje?</h1>

      <PokemonPictures :pokemonId="character.id" :showPokemon="showCharacter" />
      <PokemonOptions 
      :characters="characterArr" 
      @selection="checkAnswer"
      />
      
    <h2 v-if="showAnswer" class="fade-in">{{ message }}</h2>
    <button v-if="showAnswer" @click="newGame">Jugar otra vez</button>
   </div>
  
</template>

<script>
import PokemonPictures from "../components/PokemonPictures.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import getCharacterOptions from "@/helpers/getCharacterOptions";

// console.log(getCharacterOptions());

export default {
  components: {
    PokemonPictures,
    PokemonOptions,
  },
  data() {
    return {
      characterArr: [],
      character: null,
      showCharacter: false,
      showAnswer: false,
      message: ''
     
    };
  },
  methods: {
    mixCharacterArr(){
      this.characterArr= getCharacterOptions()
      let index = Math.floor(Math.random() * 4)
      this.character = this.characterArr[index]
    },
    checkAnswer(characterId){
      this.showAnswer= true 
      if(characterId===this.character.id){
         this.message= `Correcto el personaje es ${this.character.name}`
         this.showCharacter=true
      }else 
      this.message= `Opps, el personaje era ${this.character.name}`
    },
    newGame(){
      this.characterArr= [],
      this.showCharacter= false,
      this.showAnswer= false,
      this.character = null,
      this.mixCharacterArr()
    } 
  },
  mounted(){
    this. mixCharacterArr()
  }
};
</script>

<style>
</style>