import  { json, type LoaderArgs} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

//Loader se ejecuta en el server
export function loader(_:LoaderArgs) {
  const fakeData = {
    msg:'Que onda que onda',
    status:200
  }

  return json({...fakeData});
}


export default function App() {
  const {msg} = useLoaderData<typeof loader>();
  
  return <h1 className="text-5xl text-center text-orange-200">{msg}</h1>
}