// Adding Index Directory of all Fetched Data
<template>
  <div>
    <v-layout>
      <!-- View Song Metadata data -->
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <!-- View YouTubeId embeded -->
      <v-flex xs6 class="ml-2" >
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
      <!-- View Tab data -->
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>
        <!-- View Song data -->
      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Tab from './Tab'
import Lyrics from './Lyrics'
import YouTube from './YouTube'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () { // fetching songId data
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }

}
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
