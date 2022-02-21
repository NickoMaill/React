import { useForm } from "react-hook-form";


export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>

            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("userName", { required: true }, {maxLength: 15})}/>
                {errors.userName && <span>you must enter your username</span>}
                <input {...register("password", { required: true }, {minLength: 6})}/>
                {errors.password && <span>you must enter your password</span>}

            </form>
        </div>
    )
}