import axios from "axios";

const baseUrl = "http://7g8ed.mocklab.io";

export default {
    dCandidate(url = baseUrl+'/movie'){
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord)
        }
    }
}
