
import axios from "axios";
import { userUrl } from "../config/ApiUrl";
import { useEffect } from "react";
import cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { getUser } from "../features/UserSlice";



const useGetUser = () => {
    const userToken = cookies.get('token')
    const dispatch = useDispatch()



    useEffect(() => {
        if (userToken) {
            try {
                axios.get(`${userUrl.baseUrl}/profile`, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`
                    }
                },
                ).then((response) => {
                    dispatch(getUser({ username: response.data.username, id: response.data._id, email: response.data.email }))

                })
            } catch (error) {
                console.error(error)
            }
        }
    }, [userToken])
}



export default useGetUser




