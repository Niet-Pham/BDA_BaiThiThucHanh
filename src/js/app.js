// const { ethers } = require("ethers"); 
// const BigNumber = ethers.BigNumber;
// const eth = BigNumber('1000000000000000000');

App = {
  web3Provider: null,
  contracts: {},
  

  init: async function() {

    return await App.initWeb3();
  },

  initWeb3: async function() {
    
    return App.initWeb3();
  },

  initWeb3: function() {
    if(typeof web3 !== 'undefined'){
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8585'));
      App.web3Provider = web3.currentProvider;
    }
  },

  connectWallet: function() {
    web3.eth.getCoinbase(function(error, account){
      if(error === null){
        App.account = account;
        console.log(account);
        $("#currentAddress").html("Your address is: <b>" + account + "</b>");
      }
    });
    App.initContractToken();
    App.initContractNganHang();
  },

  initContractToken: function() {
    $.getJSON("../../contracts/abi/ContractToken.json", function(token){
      App.contracts.DongTienMoi = TruffleContract(token);
      //"0x55a51438c7784F161aC3aF474514253fFC3C587a";
      App.contracts.DongTienMoi.setProvider(App.web3Provider);
    });
  },

  approveTokenForContract: function() {
      var receiveAddress = $('#receiveAddress').val();
      var amount = $('#amount').val();

      App.contracts.DongTienMoi.deployed().then((instance) => {
        amount = amount * eth;
        return instance.approve("0x7DFC13D41bC5f42A7B0FbeAc0018eDD1F4d5FD95", BigNumber.from("amount") ,{from: App.account});
      }).then((result) => {
        console.log("after aprove");
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  },

  initContractNganHang: function() {
    $.getJSON("../../contracts/abi/ContractNganHang.json", function(nganHang){
      App.contracts.NganHang = TruffleContract(nganHang);
      //"0x7DFC13D41bC5f42A7B0FbeAc0018eDD1F4d5FD95";
      App.contracts.NganHang.setProvider(App.web3Provider);
    });
  },

  chuyenTien: function() {
    var receiveAddress = $('#receiveAddress').val();
      var amount = $('#amount').val();

      App.contracts.NganHang.deployed().then((instance) => {
        amount = amount * eth;
        return instance.ChuyenTien(receiveAddress, BigNumber.from("amount") ,{from: App.account});
      }).then((result) => {
        console.log("after transfer");
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  },

  thayDoiKhoTien: function() {
    var tokenAddress = $('#tokenAddress').val();
    App.contracts.NganHang.deployed().then((instance) => {
      return instance.ThayDoiKhoTien(tokenAddress, {from: App.account});
    }).then((result) => {
      console.log("after change");
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  },

  thayDoiPhiDichVu: function() {
    var amount = $('#amount').val();

    App.contracts.NganHang.deployed().then((instance) => {
      amount = amount * eth;
      return instance.ThayDoiPhiDichVu(BigNumber.from("amount"), {from: App.account});
    }).then((result) => {
      console.log("after change");
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });

  $("#btnKetNoi").click(function() {
    App.connectWallet();
  });

  $("#btnPheDuyet").click(function() {
    App.approve();
  });

  $("#btnChuyenTien").click(function() {
    App.chuyenTien();
  });

  $("#btnThayDoiKhoTien").click(function() {
    App.thayDoiKhoTien();
  });

  $("#btnThayDoiPhiDichVu").click(function() {
    App.thayDoiPhiDichVu();
  });

});
