class AxiosLib {
  static async post(route, body) {
    console.log(
      "[AxiosLib][Post] sending resources with url and body",
      route,
      body
    );
    try {
      const response = await axios.post(urlServer + route, {
        message: body.message,
        roomId: body.roomId,
        sender: body.sender,
      });
      if (response.status !== 200)
        throw new Error("Notre serveur ne vous à pas servit, seh");
      return response && response.data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
