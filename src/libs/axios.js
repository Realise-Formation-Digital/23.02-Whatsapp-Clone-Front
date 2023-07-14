import axios, { AxiosError } from 'axios'

const urlServer = "http://localhost:3001/";

class AxiosLib {

    static async get(route) {
        console.log('[AxiosLib][Get] Getting resources with url', route)
        try {
            const response = await axios.get(urlServer + route);
            if (response.status !== 200) throw new Error('Notre serveur ne vous à pas servit, seh')
            return response && response.data
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    static async post(route, body) {
        console.log('[AxiosLib][Post] sending resources with url and body', route, body)
        try {
            const response = await axios.post(urlServer + route, {
                "message": body.message,
                "roomId": body.roomId,
                "sender": body.sender
            });
            if (response.status !== 200) throw new Error('Notre serveur ne vous à pas servit, seh')
            return response && response.data
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }

    static async postUser(route, body) {
        console.log('[AxiosLib][Post] sending resources with url and body', route, body)
        try {
            const response = await axios.post(urlServer + route, body);
            if (response.status !== 200) throw new Error('Notre serveur ne vous à pas servit, seh')
            return response && response.data
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }
    }
}

export default AxiosLib