
import styled from 'styled-components'

const Totalscore = ({Score}) => {
  return (
    <Container><h1>{Score}</h1>
    <p>Total score</p></Container>
  )
}

export default Totalscore

const Container = styled.div`
text-align: center;
max-width: 135px;
line-height: 60px;





    h1{
        font-size: 100px;
        
    }
    p{
        font-size: 24px;
        font-weight: 500px;
    }
`