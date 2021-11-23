<template>
    <p class="text-7xl mb-10">{{ count }}</p>
    <div class="bg-gray-400 flex px-5 py-2 rounded space-x-2 items-center mb-3" >
        <button
          class="bg-white px-4 pb-1 text-3xl rounded-full"
          @click="dicrease(value)">
          -
        </button>
        <input
          type="number"
          class="pl-10 py-2"
          v-model="value">
        <button
          class="bg-white px-4 pb-1 text-3xl rounded-full"
          @click="increase(value)">
          +
        </button>
    </div>
    <div class="bg-green-400 px-2 py-1 text-white rounded">
        Add by random number
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
    data(){
        return {
            value: 0
        }
    },
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapMutations(['increase', 'dicrease'])
    },
}
</script>