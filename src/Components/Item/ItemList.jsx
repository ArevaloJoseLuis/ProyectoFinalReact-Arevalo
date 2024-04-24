import {Item} from "./Item"


export const ItemList = ({ apartamentos }) => {
  return apartamentos.map((apto) => <Item key={apto.id} apto={apto} />);
};

