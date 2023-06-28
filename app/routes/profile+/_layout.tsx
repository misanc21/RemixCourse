import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useOutletContext } from "@remix-run/react";


export function loader(_: LoaderArgs){
    const user = {
        id:1,
        name:'ary'
    }
    return json(user);
}

export default function ProfileLayout(){
    const user = useLoaderData<typeof loader>();
    return <Outlet context={user}/>;
}

export function useProfileContext(){
    return useOutletContext<typeof loader>();
}