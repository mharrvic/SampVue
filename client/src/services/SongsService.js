import Api from '@/services/Api'

export default {
  // Get request of songs in api
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
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
