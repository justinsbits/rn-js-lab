export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA36VNw7NCRjpPUl-rCLu0TlkaTEMtA_5s",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";
        if (errorId === "EMAIL_EXISTS") {
          message =
            "E-Mail account is already registered - try login rather than sign-up.";
        }
        console.log(message);
      } else {
        const resData = await response.json();
        console.log(resData);
      }
    } catch (e) {
      console.log("sign-up error:");
      console.log(e);
    }

    dispatch({ type: SIGNUP });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA36VNw7NCRjpPUl-rCLu0TlkaTEMtA_5s",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";
        if (errorId === "EMAIL_NOT_FOUND") {
          message = "E-Mail account not registered - please sign-up.";
        } else if (errorId === "INVALID_PASSWORD") {
          message = "This password is not valid!";
        }
        console.log(message);
      } else {
        const resData = await response.json();
        console.log(resData);
      }
    } catch (e) {
      console.log("login error:");
      console.log(e);
    }

    dispatch({ type: LOGIN });
  };
};
