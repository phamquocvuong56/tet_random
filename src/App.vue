<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      song:
        'songs/getSong',
    }),
    currRouteName() {
      return this.$route.name
    },
  },
  watch: {
    song(value) {
      if (value.isPlay) {
        this.$refs.audio.play()
        this.$refs.appBtn.classList.add('active-animate')
      } else {
        this.$refs.audio.pause()
        this.$refs.appBtn.classList.remove('active-animate')
      }
    },
  },
  methods: {
    handleSong() {
      if (!!this.song.url) {
        this.$store.commit('songs/setSong', { url: this.song.url, isPlay: !this.song.isPlay })
      } 
    }
  }
}
</script>

<template>

  <main>
    <audio ref="audio" loop class="audio" :src="song.url" />
    <div ref="appBtn" class="app-button-cd custom-cursor-hover" @click="handleSong">
      <img class="center" src="./assets/images/cursor_hover.png" alt="center">
      <img class="cd" src="./assets/images/cd.png" alt="cd">
    </div>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main{
  overflow:hidden;
}
.app-button-cd {
  position:absolute;
  right:20px;
  bottom:20px;
  width:50px;
  height:50px;
  z-index:10;
  overflow:hidden;
  background:url('./assets/images/cd.png') no-repeat;
  img.cd{
    width:100%;
    height:100%;
  }
  img.center{
    width:50%;
    height:50%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:11;
  }
}
.active-animate {
  animation: activeAnimate 3s infinite linear;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
@keyframes activeAnimate {
  from{
    transform:rotate(0deg)
  }
  to{
    transform:rotate(360deg)
  }
}
</style>
