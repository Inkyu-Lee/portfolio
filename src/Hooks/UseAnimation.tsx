import { useState } from 'react';




export const useAnimation = (id:string, delay:number) =>{
    const [y, setY] = useState<number>(delay)

}