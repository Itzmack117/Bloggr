<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <div class="card">
                    <div class="card-title" v-if="blog.id">
                        <h1>{{blog.title}}</h1><button v-if="isCreator" @click="deleteBlog">DELETE</button>
                        <div>
                            <p>{{blog.body}}</p>
                            <h4>{{blog.creator.name}}</h4>
                        </div>
                    </div>
                </div>
                <h1 class="text-center">Comments:</h1>
                <comment v-for="comment in comments" :key="comment.id" :commentProp="comment" />

            </div>
        </div>
    </div>
</template>

<script>
    import Comment from "@/components/CommentsComponent.vue"
    export default {
        name: "ActiveBlog",
        mounted() {
            this.$store.dispatch('getActiveBlog', this.$route.params.id)
        },

        methods: {
            deleteBlog() {
                this.$store.dispatch("deleteBlog", this.blog._id)
            }
        },
        computed: {
            isCreator() {
                return this.$store.state.profile.email == this.blog.creatorEmail
            },
            blog() {
                return this.$store.state.activeBlog
            },
            comments() {
                return this.$store.state.comments
            }
            // FIXME watch the comments as well and rendere them in this page
        },
        components: {
            Comment
        }
    }
</script>