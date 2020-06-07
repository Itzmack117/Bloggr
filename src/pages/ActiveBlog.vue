<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <div class="card">
                    <div class="card-title">
                        <h1>{{blog.title}}</h1>
                        <div>
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
            this.$store.dispatch("")
        }
    }
</script>