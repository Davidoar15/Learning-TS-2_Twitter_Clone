import { AuthButtonServer } from "../components/authButton-server";

export default function Login () {
    return (
        <section className='grid place-content-center min-h-screen'>
            <h1>Start Session</h1>
            <AuthButtonServer />
        </section>
    )
}