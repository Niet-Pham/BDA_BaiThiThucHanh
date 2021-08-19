import Token from "./contracts/abi/ContractToken.json";

export default (web3) => {
  return new web3.eth.Contract(
    Token.abi,
    "0x55a51438c7784F161aC3aF474514253fFC3C587a"
  );
};