<template>
  <div class="home">
    <h1 class="text-center">Welcome to Bloggr!</h1>
    <div class="row" v-if="$auth.isAuthenticated">
      <div class="col">
        <form class="form-inline d-flex" @submit.prevent="newBlog">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title" v-model="blog.title" />
            <input type="text" class="form-control" placeholder="Body" v-model="blog.body" />
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <blog v-if="blog.creator" v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>

</template>

<script>
  import Blog from "@/components/BlogsComponent.vue"
  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getAllBlogs")
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
      }
    },
    methods: {
      newBlog() {
        this.$store.dispatch("addBlog", { ...this.blog })
        this.newBlog = {}
      }
    },
    components: {
      Blog
    }
  };
</script>