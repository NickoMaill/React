import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../App";


export default function Login() {

    const userState = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const setAuth = () => {
        if (userState.isLogged === true) {
            console.info("already logged");
        } else {
            userState.setIsLogged(true)
        }
    }

    const onSubmit = () => {
        userState.setIsLogged(false)
    };

    if (userState.isLogged !== false) {
        return (
            <button className="button" onClick={onSubmit}>Se déconnecter</button>
        )
    }

    return (
        <div>

            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(setAuth)}>

                <input {...register("userName", { required: true, maxLength: 15 })} />
                {errors.userName && <span>you must enter your username</span>}
                <input {...register("password", { required: true, minLength: 6 })} />
                {errors.password && <span>you must enter your password</span>}
                <button className="button" type="submit">Se connecter</button>

            </form>
        </div>
    )
}