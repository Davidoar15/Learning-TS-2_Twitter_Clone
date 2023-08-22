import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import { revalidatePath } from "next/cache";

export function ComposePost({
    userAvatarUrl
} : {
    userAvatarUrl: string
}) {
    return (
        <form className="flex flex-row space-x-4 p-4 border-b border-white/20">
            <img className="rounded-full w-10 h-10 object-contain" src={userAvatarUrl} />
            <div className="flex flex-l flex-col gap-y-4">
                <textarea
                    name='post'
                    rows={4}
                    className="w-full text-2xl bg-black placeholder-gray-500 p-2"
                    placeholder="WHAT'S GOING ON!?"
                />
                <button className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
                    Post
                </button>
            </div>
        </form>
    )
}