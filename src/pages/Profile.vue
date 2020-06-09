<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>

    <div v-for="blog in blogs">
      <div v-if="profile.email == blog.creatorEmail">{{blog.title}}</div>
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    name: "profile",
    mounted() {
      this.$store.dispatch("getProfile")
    },
    data() {
      return {
        blog: {
          title: '',
          author: ''
        }
      }
    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      },
      profile() {
        console.log(this.$store.state.profile);

        return this.$store.state.profile;
      },
      isCreator() {
        return this.$store.state.profile.email == this.blog.creatorEmail
      },
    }
  };
</script>

<style scoped>
  img {
    max-width: 100px;
  }
</style>