import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext({
  userId: {},
  setUser: () => { },
  loading: false
});

export function UserId() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const setUser = async (user) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));

    setCurrentUser(user);
  };

  useEffect(() => {
    setLoading(true);

    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user !== null) {
        setCurrentUser(JSON.parse(user));
      }
      setLoading(false);
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser: setUser,
        loading: loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
