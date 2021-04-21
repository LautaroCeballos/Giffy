import {useEffect, useState, useRef} from 'react'

export default function useNearScreen({ distance = '300px', externalRef, once = true } = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef();

    useEffect(() => {
        let observer

        const element = externalRef ? externalRef.current : fromRef.current
        //Este callback de IntersetionObserver recibe dos parametros, los entriees
        //que son los objetos que se estan observando
        
        
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setIsNearScreen(true)
                //Desconectamos el observador para que se deje de evaluar
                once && observer.disconnect()
            } else {
                !once && setIsNearScreen(false)
            }
        }

        //un polifill es una pequeña biblioteca que le da a tu navegador
        //la funcionalidad que le falta (IE11 no tiene soporte para IntersectionObserver)
        Promise.resolve(
            typeof IntersectionObserver == ! 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            //IntersetionObserver recibe dos parametros, el primero es el callback
            //Que ejecutara cuando el exista una actualizacion sobre lo que esta observando
            //y el segundo parametro es un objeto de opciones
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })

            
            observer.observe(element)
        })

        //Desconectamos el observador para que se deje de evaluar
        return () => observer && observer.disconnect()

    }, [])

    return { isNearScreen, fromRef }
}