<!-- RETIRED, KEPT JUST IN CASE -->
<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <div class="card">
                    <div class="card-title">
                        <h1>{{blog.title}}</h1>
                        <p>{{blog.body}}</p>
                        <h4>{{blog.creator.name}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch("getActiveBlog", this.$route.params.id)
        },
        computed: {
            isCreator() {
                return this.$store.state.profile.email == this.post.creatorEmail
            },
        }
    }
</script>