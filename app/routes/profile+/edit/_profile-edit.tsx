import { useProfileContext } from '../_layout';


export default function Profile(){
    const {name} = useProfileContext();
    return(
        <h1 className="text-xl">Editando perfil de {name}</h1>
    );
}