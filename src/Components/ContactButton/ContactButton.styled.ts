import styled from 'styled-components';

interface Props {

}
export const StyledContactButton = styled.div<Props>`
position: fixed;
bottom: 1rem;
left: 1rem;
animation: updown 2s ease infinite;

@keyframes updown {
  0% {
    transform: translateY(-12%);
  }

  50% {
    transform: translateY(6%);
  }

  100% {
    transform: translateY(-12%);
  }
}
`