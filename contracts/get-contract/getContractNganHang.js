import NganHang from "./contracts/abi/ContractNganHang.json";

export default (web3) => {
  return new web3.eth.Contract(
    NganHang.abi,
    "0x7DFC13D41bC5f42A7B0FbeAc0018eDD1F4d5FD95"
  );
};