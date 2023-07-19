import { defineStore } from "pinia";
import AxiosLib from "../libs/axios";
import { urls } from "../libs/consts";

const chatStore = defineStore("chat", {
  state: () => ({
    userName: "",
    roomId: "64b0f1080d5b918c6944a699",
    roomsAndMessages: [],
  }),
  getters: {
    getUserName: (state) => state.userName,
    getRoomId: (state) => state.roomId,
    getRoomsAndMessage: (state) => state.roomsAndMessages,
  },
  actions: {
    setUserName(value) {
      this.userName = value;
    },

    async postUser(userName) {
      let json = {
        username: userName,
      };
      console.log("[chatStore][Post] post user name", json);
      try {
        const result = await AxiosLib.postUser(urls.userLogin, json);
        console.log(result);
      } catch (e) {
        throw new Error(e);
      }
    },
    async test() {
      try {
        const result = await AxiosLib.get(urls.message);
      } catch (e) {
        throw new Error(e);
      }
    },

    async postMessage(body) {
      try {
        const result = await AxiosLib.post(urls.message, body);
        console.log(result);
      } catch (e) {
        throw new Error(e);
      }
    },

    /**
     * Login Function
     * @async
     * @param {String} username - the username that we need for our login
     * @returns {Promise<void>}
     */
    async login(username) {
      console.log("[UserStore][login] Logging in with params", username);
      try {
        const result = await AxiosLib.post(urls.userLogin, {
          username: username,
        });
        console.log("Result", result);
        this.userName = result.username;
      } catch (e) {
        console.error(e);
      }
    },

    /**
     * list of Rooms by User
     * @async
     * @param {string} username
     * @returns {Promise<void>}
     *
     */
    async getAllRoomsByUser(username) {
      console.log(
        "[UserStore][getAllRoomsByUser] list of Rooms by User",
        username
      );
      try {
        const result = await AxiosLib.get(urls.roomsByUser + username);
        console.log("result", result);
        this.roomsAndMessages = result
        //this.roomsByUser = result.roomsByUser;
        //console.error(error);
      } catch (e) {
        console.error(e);
      }
    },
  },
});

export { chatStore };
