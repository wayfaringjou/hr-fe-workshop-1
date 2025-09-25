import { defineStore } from "pinia"
import { ref } from "vue"

export const useSortingStore = defineStore('sorting', () => {
  const sort = ref<"asc"|"desc">("asc")
   
  function togglesort() {
    if (sort.value === "asc") {
      sort.value = "desc"
    } else {
      sort.value = "asc"
    }
  }

  return { sort, togglesort }
})