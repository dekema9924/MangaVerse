import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useUserCookie = (cookieName = 'token', interval = 1000) => {
    const [cookie, setCookie] = useState(() => Cookies.get(cookieName) || null)

    useEffect(() => {
        const checkCookie = () => {
            const current = Cookies.get(cookieName)
            setCookie(prev => (prev !== current ? current || null : prev))
        }

        const timer = setInterval(checkCookie, interval)
        return () => clearInterval(timer)
    }, [cookieName, interval])

    return cookie
}

export default useUserCookie
