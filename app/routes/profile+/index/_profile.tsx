
import {useProfileContext} from '../_layout';


export default function Profile(){
    const user = useProfileContext();
    return(
        <h1 className="text-xl">Hola {user.name}</h1>
    );
}