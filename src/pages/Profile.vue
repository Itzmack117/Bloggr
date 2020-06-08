<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>

    <div v-for="blog in blogs">
      <div v-if="isCreator"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "profile",
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
        return this.$store.state.profile.email == this.post.creatorEmail
      },
    }
  };
</script>

<style scoped>
  img {
    max-width: 100px;
  }
</style>