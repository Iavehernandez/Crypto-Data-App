import React from "react";
import { useSelector } from "react-redux";
import {WalletCard} from "./styles";
import icon from "../../../assets/wallet.svg"



const WalletBalance = () => {
  const wallet = useSelector((state) => state.wallet);

  return (
    <WalletCard>
      <img src={icon} alt="wallet icon" />
      <div>
        <h2>Dinero Disponible</h2>
        <p>
          {wallet.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </p>
      </div>
    </WalletCard>
  );
};

export default WalletBalance;