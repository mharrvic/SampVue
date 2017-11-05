import Api from '@/services/Api'

export default {
  // Get request of songs in api
  index () {
    return Api().get('songs')
  },
  // song sending Post Request
  post (song) {
    return Api().post('songs', song)
  },
  // get song id request in api
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
