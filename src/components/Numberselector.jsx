
import styled from "styled-components";
const Numberselector = ({Selnum,setSelnum,Error}) => {
  const arrnum = [1, 2, 3, 4, 5, 6];


  return (
    <Numbercon>
        <p className="error">{Error}</p>
      <div className="flex">
        {arrnum.map((value, i) => (
          <Box
            isSelected={Selnum == value}
            onClick={() => setSelnum(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected number</p>
    </Numbercon>
  );
};

export default Numberselector;
const Numbercon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;

  .error{
color: red;
position: absolute;
top:-45px;
;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    align-self: flex-end;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  border: 2px solid black;

  font-size: 24px;
  font-weight: 700;

  background-color: ${(props) => (props.isSelected ? " black" : "white")};
  color: ${(props) => (!props.isSelected ? " black" : "white")};
`;
