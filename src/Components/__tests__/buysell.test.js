
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import TradePanel from "../PortfolioComponents/TradePanel/TradePanel";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("TradePanel", () => {
  const mockDispatch = jest.fn();
  const coin = {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    image: "btc.png",
    price: 100,
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    mockDispatch.mockClear();
  });

  it("despacha buyCoin y subtractFunds si balance >= precio", () => {
    useSelector.mockReturnValue(200);
    render(<TradePanel coin={coin} />);
    fireEvent.click(screen.getByText(/Comprar/));
    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });

  it("no despacha buyCoin si balance < precio", () => {
    useSelector.mockReturnValue(50);
    render(<TradePanel coin={coin} />);
    fireEvent.click(screen.getByText(/Comprar/));
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it("despacha sellCoin y addFunds al vender", () => {
    useSelector.mockReturnValue(200);
    render(<TradePanel coin={coin} />);
    fireEvent.click(screen.getByText(/Vender/));
    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });
});
