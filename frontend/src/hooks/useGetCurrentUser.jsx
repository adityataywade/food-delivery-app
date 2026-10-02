import  { useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'


const useGetCurrentUser = () => {
   const dispatch=useDispatch()
   useEffect(() => {
      try {
         const fetchUser = async () => {
            const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
             dispatch(setUserData(result.data))
         }
         fetchUser()
      } catch (error) {
         console.log(error)
      }
   }, [])
}

export default useGetCurrentUser