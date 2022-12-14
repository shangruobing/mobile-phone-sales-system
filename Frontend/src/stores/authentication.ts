import { defineStore } from 'pinia'

interface UserInfo {
  userID: string | null
  username: string
  type: number
  auth: string
  avatarURL: string
}

/**
 * Collaborate with Personal Center component.
 */
export const useAuthStore = defineStore('authentication', {
  state: (): UserInfo => {
    return {
      userID: null,
      username: '',
      type: 1,
      auth: '',
      avatarURL: ''
    }
  },
  getters: {
    isLogin(state) {
      return state.username !== ''
      // return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    },
    showAvatar(state) {
      return state.avatarURL !== ''
    },
    // 暂时未用
    getUserInfo(state) {
      return {
        userID: state.userID,
        username: state.username,
        type: state.type,
        avatar: state.avatarURL
      }
    }
  },
  actions: {
    // 暂时未用
    setUserInfo(userInfo: UserInfo) {
      this.userID = userInfo.userID
      this.username = userInfo.username
      this.type = userInfo.type
      this.auth = userInfo.auth
      this.avatarURL = userInfo.avatarURL
    },

    logout() {
      this.$reset()
      localStorage.clear()
    }
  }
})
