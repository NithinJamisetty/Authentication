import React from 'react'
import styled from 'styled-components'

export default function Header(props) {
  return (
    <div>
      <h2>{props.name ? `welcome ${props.name}`:"login please"}</h2>
    </div>
  )
}