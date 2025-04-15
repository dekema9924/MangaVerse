
import axios from "axios";
import { userUrl } from "../config/ApiUrl";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../features/UserSlice";



const useGetUser = () => {
    const dispatch = useDispatch()

    useEffect(() => {

        try {
            axios.get(`${userUrl.baseUrl}/profile`, {
                withCredentials: true
            },
            ).then((response) => {
                dispatch(getUser({ username: response.data.username, id: response.data._id, email: response.data.email }))

            })
        } catch (error) {
            console.error(error)
        }

    }, [])
}



export default useGetUser




