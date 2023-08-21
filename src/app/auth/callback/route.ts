import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

// Option from Next.js to avoid cache staticlly the route and always execute in server
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code'); // Web Plataform

    if (code !== null) {
        const supabase = createRouteHandlerClient({ cookies });
        await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(requestUrl.origin)
}