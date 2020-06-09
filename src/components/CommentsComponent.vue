<template>
    <div class="card">
        <div class="card-title">
            <p>{{commentProp.body}}</p>
            <b>-{{commentProp.creator.name}}</b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props: ["commentProp"],

        methods: {
            deleteComment() {
                this.$store.dispatch("deleteComment", this.comment.id)
            }
        },
        computed: {
            isCreator() {
                return this.$store.state.profile.email == this.post.creatorEmail
            },
            comment() {
                return this.$store.state.comments
            }
        }
    }
</script>