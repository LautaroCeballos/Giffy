import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner/Spinner'

//React.lazy es el metodo correcto de cargar archivos js
//solo cuando realmente necesite descargarse
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner/>}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}