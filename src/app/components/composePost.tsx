import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { ComposePostTextArea } from "./composePost-textarea";

export function ComposePost({
    userAvatarUrl
} : {
    userAvatarUrl: string
}) {

    const addPost = async (formData: FormData) => {
        'use server'

        const content = formData.get('content');
        if (content === null) return 

        const supabase = createServerActionClient({ cookies });
        const { data: { user }} = await supabase.auth.getUser();
        if (user === null) return

        await supabase.from('posts').insert({ content, user_id: user.id });

        revalidatePath('/');
    }

    return (
        <form action={addPost} className="flex flex-row p-3 border-b border-white/20">
            <img className="rounded-full w-10 h-10 object-contain mr-4" src={userAvatarUrl} />
            <div className="flex flex-l flex-col gap-y-4">
                <ComposePostTextArea />
                <button className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
                    Post
                </button>
            </div>
        </form>
    )
}