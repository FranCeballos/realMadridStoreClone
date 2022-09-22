import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./ItemCount.css";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [Value, setValue] = useState(inicial);

  const clickHandlerAdd = () => {
    Value !== stock && setValue(Value + 1);
  };

  const clickHandlerSubtract = () => {
    Value > 0 && setValue(Value - 1);
  };

  return (
    <div className="itemCounterContainer">
      <Button onClick={clickHandlerSubtract} variant="outlined">
        -
      </Button>
      <div>
        <p>{Value}</p>
      </div>
      <Button onClick={clickHandlerAdd} variant="outlined">
        +
      </Button>
      {Value > 0 ? (
        <Button onClick={() => onAdd(Value)} variant="contained">
          Añadir a carrito
        </Button>
      ) : (
        <Button variant="contained" disabled>
          Añadir a carrito
        </Button>
      )}
    </div>
  );
};

export default ItemCount;
