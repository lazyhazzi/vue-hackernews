import {
  fetchList,
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem
} from "../api/index.js";

export default {
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(error => console.log(error));
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username)
      .then(({ data }) => commit('SET_USER', data))
      .catch(error => console.log(error))
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(error => console.log(error))
  }
}