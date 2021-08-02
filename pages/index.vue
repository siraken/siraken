<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <article class="p-3">

          <p class="display-3 font-weight-bold m-0">
            {{ $t('greeting') }}<nuxt-link to="me"><span class="display-3 m-0" id="hand">👋</span></nuxt-link>
          </p>
          <p class="h3 font-weight-bold mb-5">{{ $t('name') }}.</p>

          <!-- Esperanto -->
          <div v-if="this.getLocale === 'eo'">
            <p class="h5">
              Mi estas Ĉefoficisto de Novalumo Japan. La retejo de mia kompanio estas <a :href="novalumo" target="_blank" rel="noopener noreferrer">ĉi tie</a>.
            </p>
            <p class="h5">
              Vi povas sekvi min ĉe
              <a :href="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>,
              <a :href="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>,
              <a :href="youtube" target="_blank" rel="noopener noreferrer">YouTube</a>,
              <a :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>, kaj
              <a :href="note" target="_blank" rel="noopener noreferrer">note.com</a>.
            </p>
            <p class="h5 mb-5">
              Hobioj inkluzivas spekti amaskomunikilaron, ludi ludojn, lerni lingvojn kaj ludi futbalon.
            </p>
          </div>

          <!-- Deutsch -->
          <div v-else-if="this.getLocale === 'de'">
            <p class="h5">
              Ich bin CEO bei Novalumo Japan. Die Website meiner Firma ist <a :href="novalumo" target="_blank" rel="noopener noreferrer">hier</a>.
            </p>
            <p class="h5">
              Du kannst mir auf
              <a :href="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>,
              <a :href="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>,
              <a :href="youtube" target="_blank" rel="noopener noreferrer">YouTube</a>,
              <a :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>, und
              <a :href="note" target="_blank" rel="noopener noreferrer">note.com</a>
              folgen.
            </p>
            <p class="h5 mb-5">
              Meine Hobbys sind Medien schauen, Spiele spielen, Sprachen lernen und Fußball spielen.
            </p>
          </div>

          <!-- Norsk -->
          <div v-else-if="this.getLocale === 'nb'">
            <p class="h5">
              Jeg er administrerende direktør i Novalumo Japan. Firmaets nettsted er <a :href="novalumo" target="_blank" rel="noopener noreferrer">her</a>.
            </p>
            <p class="h5">
              Du kan følge meg på
              <a :href="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>,
              <a :href="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>,
              <a :href="youtube" target="_blank" rel="noopener noreferrer">YouTube</a>,
              <a :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>, og
              <a :href="note" target="_blank" rel="noopener noreferrer">note.com</a>.
            </p>
            <p class="h5 mb-5">
              Mine hobbyer inkluderer å se på media, spille spill, lære språk og spille fotball.
            </p>
          </div>

          <!-- default: English -->
          <div v-else>
            <p class="h5">
              I am CEO at Novalumo Japan. My company's website is <a :href="novalumo" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
            <p class="h5">
              You can follow me on
              <a :href="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>,
              <a :href="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>,
              <a :href="youtube" target="_blank" rel="noopener noreferrer">YouTube</a>,
              <a :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>, and
              <a :href="note" target="_blank" rel="noopener noreferrer">note.com</a>.
            </p>
            <p class="h5 mb-5">
              My hobbies include watching media, playing games, learning languages, and playing football.
            </p>
          </div>

          <p class="h5 font-weight-bold">{{ $t('heading.code') }}:</p>
          <p>
            HTML, SCSS, JavaScript(and TS), PHP, Python, Ruby, C#, Visual Basic
          </p>

          <p class="h5 font-weight-bold">{{ $t('heading.machine') }}:</p>
          <p>
            MacBook Air (Early 2014, Core i7, 8GB RAM)<br>
            Mac mini (2020, Apple Silicon M1, 16GB RAM)
          </p>

          <p class="mt-5">
            <nuxt-link
              v-for="locale in locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="languages"
            >
            {{ locale.name }}
            </nuxt-link>
          </p>

        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novalumo: "https://www.novalumo.llc/" + this.$i18n.locale,
      twitter: "https://twitter.com/shirasawa_kento",
      facebook: "https://www.facebook.com/shirasawa.kento",
      youtube: "https://www.youtube.com/channel/UCUUhx5rucm_tYuM0Hbm781g",
      github: "https://github.com/SiraKen",
      note: "https://note.com/siraken"
    }
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    getLocale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss" scoped>
#hand {
  display: inline-block;
  transform: rotateZ(0deg);
  transition: linear .2s;
  
  &:hover {
    cursor: pointer;
    opacity: .8;
    transform: rotateZ(10deg) ;
  }
}

article {
  a {
    color: #3ca1ff;
    font-weight: bold;
    &:hover {
      text-decoration: none;
    }
  }
}

.languages {
  margin: 0 10px 0 0;
}
</style>
