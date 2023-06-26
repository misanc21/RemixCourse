import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () =>{
    return [{ title: "about my page"}]
}

export default function About(){
    return(
        <div style={{fontFamily:'system-ui, sans serif', lineHeight:'1.8'}}>
            <h1>About</h1>
        </div>
    );
}