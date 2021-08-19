import getWeb3 from "../getWeb3";
// import contractToken from "../../contracts/get-contract/getContractToken";
// import contractNganHang from "../../contracts/get-contract/getContractNganHang";

// const getWeb3 = () => new Promise(async (resolve, reject) => {
// 	// Wait for loading completion to avoid race conditions with web3 injection timing
// 	// window.addEventListener("load", async() => {
// 		// Modern dapp browsers....
// 		if (window.ethereum) {
// 			const web3 = new Web3(window.ethereum);
// 			try {
// 				// Request accounts access
// 				await window.ethereum.enable();

// 				//Accounts now exposed
// 				resolve(web3);
// 			} catch (error) {
// 				reject(error);
// 			}
// 		}
// 		// Legacy dapp browsers...
// 		else if (window.web3) {
// 			// Use Mist/Metamask's provider
// 			const web3 = window.web3;
// 			console.log("Injected web3 detected.");
// 			resolve(web3);
// 		}
// 		// Fallback to local host
// 		else {
// 			console.log("Khong ket noi duoc ETH");
// 		}
// 	// });
// });

const connectWeb3 = ()=>{
    getWeb3().then((result) => {
      result.eth.getAccounts().then((res) => {
          SetAccount(res[0]);
      });
    });
  };


// export const SetApprove = (contractToken,amount,account) => {
//     return contractToken.methods.approve("0x7DFC13D41bC5f42A7B0FbeAc0018eDD1F4d5FD95", amount).send({from:account});
// }

// export const fnChuyenTien = (contractNganHang, nguoiNhan, amount, account) => {
//     return contractNganHang.methods.ChuyenTien(nguoiNhan, amount).send({from:account});
// }

// export const fnThayDoiKhoTien = (contractNganHang, khoTien, account) => {
//     return contractNganHang.methods.ThayDoiKhoTien(khoTien).send({from:account});
// }

// export const fnThayDoiPhiDichVu = (contractNganHang, amount, account) => {
//     return contractNganHang.methods.ThayDoiPhiDichVu(amount).send({from:account});
// }