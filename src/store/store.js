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
      try {
        //axios request post
        const messageInserted = await AxiosLib.post(urls.message, {
          message: message,
          roomId: roomId,
          sender: sender,
        });

        //search for room id
        const foundRoom = this.getRoomsAndMessage.find(
          (room) => room._id === roomId);
        console.log("[sendMessAxios][foundRoomId]", foundRoom);

        //search for messages id
        const foundMessage = foundRoom.messages.find(
          (msg) => msg._id === messageInserted._id);
          console.log("[sendMessAxios][foundMessId]", foundMessage);

        //if message's id is not in room's id, push it
        if (!foundMessage) foundRoom.messages.push(messageInserted);
      } catch (e) {
        console.error(e);
      }
    },

    async insertMessageBySocket(message) {

      //find last message's id
     try {
      const foundMessage = this.roomsAndMessages[0].messages.find((msg) => msg._id === message._id);
        console.log("[Store][insertMessSocket][FindMessId]", message._id);

        //if last message's id is not in array, push it
        if (!foundMessage) this.roomsAndMessages[0].messages.push(message);
    }catch(e){
    console.error(e)
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

    //function to delete the messages
    async deleteMessageAxios(messageIdDelete, roomId) {
      try {
        const deleteMessageAxios = await AxiosLib.delete(urls.deleteMessage + messageIdDelete);
        console.log("[Store][[DeleteAxios]][messageId]", deleteMessageAxios);

        // find Message's Id in array
        const foundMessageToDelete = this.getRoomsAndMessage[0].messages.find((msge) => msge._id === messageIdDelete);
        console.log("[Store][DeleteMessAxios][FindMessId]", foundMessageToDelete);

        //indexMessage in array of messages
        const indexMessageToDelete =
          this.getRoomsAndMessage[0].messages.indexOf(foundMessageToDelete);
        console.log("[Store][DeleteMessAxios][IndexMess]", indexMessageToDelete);

        //delete indexMessage with splice method
        if (foundMessageToDelete) {
          this.roomsAndMessages[0].messages.splice(indexMessageToDelete, 1);
        }
      } catch (e) {
        console.error(e);
      }
    },

    async deleteMessageBySocket(messageId) {
      try {
        const room = this.roomsAndMessages[0];

        // find message's id to splice
        const foundMessageId = room.messages.find((msg) => msg._id === messageId);
        console.log("[store][deleteMessSocket][findMessId]", foundMessageId);

        //find message's index
        const indexMessage = room.messages.indexOf(foundMessageId);
        console.log("[store][deleteMessSocket][indexMess]", indexMessage);

        //if message's id is in room, splice at index
        //to use splice method, need to specify index at which splice
        if (foundMessageId) {
          room.messages.splice(indexMessage, 1);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});
export { chatStore };
