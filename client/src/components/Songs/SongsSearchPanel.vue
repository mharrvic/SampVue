<<template>
<panel title="Search">
    <v-text-field
      label="Search by song title, artist, album or genre"
      v-model="search">
    </v-text-field>
</panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: { // Watcher to watch every keystroke every 700ms
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') { // Creating a search query in url
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route) // pushing to page the url search
    }, 700),
    '$route.query.search': { // saving on every keystroke search
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
