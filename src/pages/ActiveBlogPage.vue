<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <div class="card">
                    <div class="card-title">
                        <h1>{{blog.title}}</h1><button v-if="isCreator" @click="deleteBlog">DELELE</button>
                        <div>
                            <p>{{blog.body}}</p>
                            <h4>{{blog.creator.name}}</h4>

                        </div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActiveBlog",
        mounted() {
            this.$store.dispatch('setActiveBlog', this.blog._id)
        },
        methods: {
            deleteBlog() {
                this.$store.dispatch("deleteBlog", this.blog._id)
            }
        },
        computed: {
            isCreator() {
                return this.$store.state.profile.email == this.post.creatorEmail
            },
        }
    }
</script>