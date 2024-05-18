import authHeader from "./auth-header";
import axios from "axios";

const API_URL = "http//localhost:8080/api";

const getAdminBoard = () => {
    return (axios.get(API_URL + "/admin"), {headers: authHeader()});
};

export default {getAdminBoard};