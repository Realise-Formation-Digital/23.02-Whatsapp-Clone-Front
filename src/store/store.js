import { defineStore } from "pinia";
import AxiosLib from "../libs/axios";
import { urls } from "../libs/consts";
import { mdiConsoleNetworkOutline } from "@mdi/js";

const chatStore = defineStore("chat", {
  state: () => ({
    userName: "",
    roomId: "",
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
    //function to delete the messages
    async deleteMessageFunc(messageId) {
      //find last message in array
      const indexMessage = this.roomsAndMessages[0].messages
      // create an array of msgs id's 
        .map((msg) => msg._id)
        //where message id is in index 
        .indexOf(messageId);
      console.log("store||delMsgFunc||indMsg", indexMessage);
      //delete last indexMessage with splice method
      this.roomsAndMessages[0].messages.splice(indexMessage, 1);
    },

    SetMessage(value) {
      this.message = value;
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

    async sendMessage(sender, message, roomId) {
      console.log(
        "[UserMessage][Messages] message send",
        message,
        sender,
        roomId
      );
      try {
        //axios request post
        const messageInserted = await AxiosLib.post(urls.message, {
          message: message,
          roomId: roomId,
          sender: sender,
        });
        //search for room id
        const foundRoom = this.roomsAndMessages.find(
          (room) => room._id === roomId
        );
        //search for messages id
        const foundMessage = foundRoom.messages.find(
          (msg) => msg._id === messageInserted._id
        );
        //if message's id is not in room's id, push it
        if (!foundMessage) foundRoom.messages.push(messageInserted);
      } catch (e) {
        console.error(e);
      }
    },

    async getAllRoomsByUser(userName) {
      try {
        const result = await AxiosLib.get(urls.roomsByUser + userName);
        this.roomsAndMessages = result;
        this.roomId = result[0]._id;
        console.log("result GET", this.roomsAndMessages);
      } catch (e) {
        console.error(e);
      }
    },

   async insertMessageBySocket(message) {
      console.log("[store][socket][message found]", message);
      //find last message's id
      const foundMessage = this.roomsAndMessages[0].messages.find((msg) => {
        return msg._id === message._id;
      });
      console.log("[store][message not found]", foundMessage);
      //if last message's id is not in array, push it
      if (!foundMessage) this.roomsAndMessages[0].messages.push(message);
    },
  },
});
export { chatStore };
