import axios from 'axios'

const KEY= "krAHHOYDpX2eCCGGOZXG7uqRbFcO22qH"


export default axios.create({
  baseURL: "https://api.shodan.io/shodan/"
})
