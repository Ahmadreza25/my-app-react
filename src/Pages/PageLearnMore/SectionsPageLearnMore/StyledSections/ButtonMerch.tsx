import styled from "styled-components";


const ButtonMerch = styled.button`
    width: 100px;
    height: 25px;
    font-size: 12px;
    border: 2px solid #334155; /* slate-700 */
    border-radius: 50px;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
    background-color: #334155; /* slate-700 */
    color: #f8fafc; /* slate-50 */
    }
`

export default ButtonMerch