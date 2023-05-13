import axios from "axios";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const login = async (username, password) => {
    try {
      const response = await axios.post("https://braireport.herokuapp.com/login", {
        username,
        password,
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const { token } = response.data;
      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return { token, login, logout };
};
