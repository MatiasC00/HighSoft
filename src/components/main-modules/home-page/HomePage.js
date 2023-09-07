import React, { useContext, useState } from "react";
import useBalance from "../../../hooks/useBalance";
import BalanceContext from "../../../context/BalanceContext.js";

const HomePage = () => {
  const balance = useContext(BalanceContext);

  return (
    <div className="container mx-auto">
      <div className="mx-auto">
        <h1>Bienvenido a tu cuenta</h1>
        <h2>Saldo disponible</h2>
        <div className="center-block">
          {balance.showBalance ? balance.balance : "***"}
          <button
            className="btn btn-default"
            id="saldoButton"
            onClick={balance.toggleShow}
          >
            Mostrar Saldo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;