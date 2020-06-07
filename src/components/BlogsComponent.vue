<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <div class="card" @click="activeBlog">
                    <div class="card-title">
                        <h1>{{blog.title}}</h1>
                        <h4>{{blog.creator.name}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        props: ["blog"],
        computed: {
            isCreator() {
                return this.$store.state.profile.email == this.post.creatorEmail
            },
        },
        methods: {
            activeBlog() {

            }
        }
    }
</script>