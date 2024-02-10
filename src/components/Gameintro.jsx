import styled from "styled-components"

const Gameintro = ({toggle}) => {
  return (
    <Container>
    <div><img src="./img/d.png" alt="" /></div>
    <div ><h1>DICE GAME</h1>
    <button onClick={toggle}>PLAY NOW</button>
    </div>
</Container>
  )
}

export default Gameintro

const Container = styled.div
  ` 
  display:flex;
  align-items:center;
  justify-content:center;
  width:1200px;
  margin:100px auto;
  
div{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
h1{
  font-size:96px;
  white-space: nowrap;
}


button{
  background-color:black;
  color:white;
  width:220px;
  height:44px;
}
rgtcon{
  display:flex;
  
}
  `


