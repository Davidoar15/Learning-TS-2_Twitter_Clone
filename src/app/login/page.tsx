import { AuthButtonServer } from "../components/authButton-server";

export default function Login () {
    return (
        <section className='grid place-content-center min-h-screen'>
            <h1 className="text-xl font-bold mb-4">Start Session</h1>
            <AuthButtonServer />
        </section>
    )
}