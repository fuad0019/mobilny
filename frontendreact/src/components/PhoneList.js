import React from 'react'
import Phone from './Phone'

export default function PhoneList({phones}) {
    return (
        phones.map(phone => {
            return <Phone key={phone.name} phone={phone} />
        })
    )
}
