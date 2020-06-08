import Vue from "vue";
import Vuex, { Store } from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {}
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
        console.log(res.data)
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getActiveBlog({ commit }, id) {
      try {
        let res = await api.get('blogs/' + id)
        commit("setActiveBlog", res.data)
        router.push({ name: "ActiveBlog", params: { id: res.data.id } })
      } catch (error) {
        console.error(error);
      }
    },
    async addBlog({ commit, dispatch }, blog) {
      try {
        let res = await api.post('blogs', blog)
        dispatch("getAllPosts")

      } catch (error) { console.error(error) }
    }
  }
})
