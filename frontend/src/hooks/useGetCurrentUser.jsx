import  { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../App'


const useGetCurrentUser = () => {
   useEffect(() => {
      try {
         const fetchUser = async () => {
            const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
         }
         fetchUser()
      } catch (error) {
         console.log(error)
      }
   }, [])
}

export default useGetCurrentUser