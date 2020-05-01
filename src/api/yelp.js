import axios from 'axios'
import { YELP_APP_SECRET } from '../../env'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${YELP_APP_SECRET}`
    }
})