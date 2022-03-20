import styled from 'styled-components'
import {ButtonProps} from './'

export const Wrapper = styled.button<ButtonProps>`
    background-color: var(--color-elements);
    border: 0;
    border-radius: 5px;
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.6rem;
    padding: 0.6rem 1.5rem;
`
