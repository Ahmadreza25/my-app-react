import styled from "styled-components";


interface SlayderBtnProps {
    right?:string
    left?:string
}

const SlayderBtn = styled.button<SlayderBtnProps>`
position: absolute;
top: 50%;
left:${props => props.left};
right:${props => props.right};
transform: translateY(-50%);
background-color: #f1f5f9; /* slate-100 */
color: #64748b;            /* slate-500 */
width: 40px;
height: 40px;
font-weight: 700;
font-size: 20px;
border-radius: 9999px; /* full rounded */
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
transition: background-color 0.2s ease;

&:hover {
  background-color: #94a3b8; /* slate-400 */
}
`


export default SlayderBtn