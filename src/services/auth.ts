import { LoginSchemaType } from "../components/auth/Login";
import { RegisterType } from "../components/auth/Register"
import instanceAxios from "../ultis/configAxios"

interface ILoginResponse {
    accessToken: string,
    user: RegisterType
}
const login = async (user: LoginSchemaType) => {
    try {
        const { data } = await instanceAxios.post<ILoginResponse>('/login', user);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const register = async (user: RegisterType) => {
    try {
        const { data } = await instanceAxios.post('/register', user);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const authServices = {
    login,
    register
}