import styled from 'styled-components'
import {useWeb3} from '@3rdweb/hooks'
import Dashboard from './Dashboard'

export default function Home() {
  const {address, connectWallet} = useWeb3()
  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address}/>
      ): (<WalletConnect>
        <Button onClick={() => connectWallet('injected')}>
          Connect Wallet
        </Button>
      </WalletConnect>)}
      
    </Wrapper>
  )
};

const Wrapper = styled.div`
display: flex;
height: 100vh;
max-width: 100vw;
display: grid;
place-items: center;
`

const WalletConnect = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Button = styled.div`
border: 1px solid #282b2f;
padding: 0.8rem;
font-size: 1.3rem;
font-weight: bold;
border-radius: 0.5rem;
background-color: #3773f5;
color: #000;
&: {
  cursor: pointer;
}
`