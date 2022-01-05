import React from 'react'
import Model from './Model'

export default function Models(models) {
    return (
        models.map(model => {
            return <Model key={model.name} model={model} />
        })
    )
}
