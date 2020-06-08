<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <router-link :to="{name: 'ActiveBlog', params: {id: blogProp._id}}">
                    <div class="card">
                        <div class="card-title">
                            <h1>{{blog.title}}</h1>
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
        props: ["blogProp"],
        mounted() {
            this.$store.dispatch()
        }
    }
</script>