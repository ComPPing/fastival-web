import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  height: fit-content;
  overflow: hidden;
  padding: 1.25rem;
`

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  filter: blur(4px);
  -webkit-filter: blur(4px);
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 100%;
`

export const Torch = styled.img``

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.text.primary.default};
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`

export const StartButton = styled.button`
  color: ${({ theme }) => theme.colors.text.white};
  background: ${({ theme }) => theme.colors.button.primary};
  background: linear-gradient(
    90deg,
    rgba(83, 0, 134, 1) 0%,
    rgba(232, 133, 222, 1) 100%
  );
  padding: 1.2rem 2rem;
  border-radius: 3rem;
  font-size: ${({ theme }) => theme.fonts.size.md};
  margin-top: 4rem;
`
