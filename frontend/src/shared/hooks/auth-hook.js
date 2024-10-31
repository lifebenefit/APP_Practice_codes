import { useState, useCallback, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId, token, expirationDate) => {
    setToken(token);
    setUserId(userId);
    const expiresIn = jwtDecode(token);
    const aa = expiresIn.exp * 1000;
    // console.log("token : " + token);
    // console.log("userId : " + userId);
    const renewedDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    // const renewedDate =
    //   expirationDate || new Date(new Date().getTime() + Int(token.expiresIn));
    setTokenExpirationDate(renewedDate);
    console.log("문이루 : " + new Date(new Date().getTime() + 1000 * 60 * 60));
    console.log("문이루 : " + expirationDate);
    console.log("문이루 : " + renewedDate);
    console.log("문이루 : " + renewedDate.toISOString());
    console.log("토큰 : " + token);
    console.dir(token);
    console.dir(expiresIn);
    console.dir(expiresIn.exp);
    console.dir(aa);
    console.dir(new Date(expiresIn.exp * 1000));
    localStorage.setItem("userData", JSON.stringify({
      userId,
      token,
      expiration: renewedDate.toISOString()
    }));
  }, [])

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    // console.log('Logout')
    localStorage.removeItem("userData");
  }, [])

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      (new Date(storedData.expiration) > new Date())
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login])

  return { userId, token, login, logout};
};