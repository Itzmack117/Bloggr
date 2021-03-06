import Vue from "vue";
import Vuex, { Store } from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, data) {
      state.blogs = data;
    },
    addBlogs(state, data) {
      state.blogs.push(data)
    },
    setActiveBlog(state, data) {
      state.activeBlog = data
    },
    setComments(state, data) {
      state.comments = data
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getActiveBlog({ commit, dispatch }, id) {
      try {
        let res = await api.get('blogs/' + id)
        console.log(res.data, "response");
        commit("setActiveBlog", res.data.blog)
        console.log("comments", res.data.comments)
        commit("setComments", res.data.comments)
        // FIXME you also got res.data.comments, what do you do with that
        router.push({ name: "ActiveBlog", params: { id: res.data.blog.id } })
      } catch (error) {
        console.error(error);
      }
    },
    async addBlog({ commit, dispatch }, blog) {
      try {
        let res = await api.post('blogs', blog)
        dispatch("getAllBlogs")

      } catch (error) { console.error(error) }
    },
    async deleteBlog({ commit, dispatch }, id) {
      try {
        let res = await api.delete("blogs/" + id)
        router.push({ name: "Home" })
      } catch (error) {
        console.log(error);
      }
    },
  }
})
