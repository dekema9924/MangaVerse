import axios from "axios";
import { userUrl } from "../config/ApiUrl";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../features/UserSlice";

const useGetUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${userUrl.baseUrl}/profile`, {
                    withCredentials: true,
                });

                dispatch(getUser({
                    username: response.data.username,
                    id: response.data._id,
                    email: response.data.email,
                }));
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };

        fetchUser();
    }, [dispatch]);

};

export default useGetUser;
