import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import filter from '../filters/index'
export default Vue.mixin({
  filters: filter,
  computed: mapGetters([]),
  methods: mapMutations([])
})
