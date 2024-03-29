import { pedirDatos } from '../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer({itemId}) {

    const [productos, setProductos] = useState([]);
     
        useEffect(() => {
            pedirDatos()
                .then((res) =>{
                    setProductos(res);
                })

        }, [])




  return (
    <div>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer