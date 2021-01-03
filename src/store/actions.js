import {
  fetchList,
  fetchUserInfo,
  fetchItem
} from "../api/index.js";

export default {
  // promise
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        commit('SET_LIST', response.data)
        return response;
      })
      .catch(error => console.log(error));
  },

  // async
  // async FETCH_LIST({ commit }, pageName) {
  //   const response = await fetchList(pageName);
  //   commit('SET_LIST', response.data);
  //   return response;
  // },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
      .then(({ data }) => commit('SET_USER', data))
      .catch(error => console.log(error))
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(error => console.log(error))
  }
}