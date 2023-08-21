'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function AuthButton () {
    const supabase = createClientComponentClient();
    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: "http://localhost:3000/auth/callback"
            }
        })
    }
}