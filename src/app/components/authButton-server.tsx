import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButton } from "./authButton-client";

export async function AuthButtonServer () {
    const supabase = createServerComponentClient({ cookies });
    const { data: {session} } = await supabase.auth.getSession();

    return (
        <AuthButton session={session}/>
    )
}