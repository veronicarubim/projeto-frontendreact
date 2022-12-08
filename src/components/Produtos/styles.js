import styled from "styled-components"

export const HomeStyle = styled.div`

main {
    display: flex;
    flex-direction: row;
    column-gap: 2%;
    height: 100vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
}

.filtros {
    width: 20vw;
    border: solid #e89ff7;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
}

input {
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 5px;
    text-align: center;
    outline: transparent;
}
`