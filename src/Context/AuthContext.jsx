import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // অ্যাপ লোড হওয়ার সময় চেক করবে ইউজার আগে থেকে লগইন কি না

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("blogUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Authentication error:", error);
      return null;
    }
  });

  //Login
  const login = (userData) => {
    console.log(userData);
    setUser(userData);
    localStorage.setItem("blogUser", JSON.stringify(userData));
    return true;
  };
  //Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("blogUser");
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// কাস্টম হুক (সহজে ব্যবহারের জন্য)
export const useAuth = () => {
  return useContext(AuthContext);
};
