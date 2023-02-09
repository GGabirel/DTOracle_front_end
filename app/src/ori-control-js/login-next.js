import Web3 from "web3";

const loginNext = {
  web3: null,
  account: null,

  start: async function() {
    const { web3 } = this;
    try {
      // get accounts
      this.account = window.ethereum.selectedAddress;

      //更新页面
      this.refreshPage();
      
      //实现跳转
      this.toLoginHome();
      this.toHome();
     } 
    catch (error) {
       console.error("Could not connect to contract or chain.");
     }
  },

  refreshPage: async function(){
    document.getElementById("userAddress").innerHTML = "<strong>用户地址</strong>：" + this.account;
  },

  toLoginHome: function(){
    document.getElementById("in").addEventListener('click',function(){
      window.location.href = "login-home.html";
    })
  },

  toHome: function(){
    document.getElementById("out").addEventListener('click',function(){
      window.location.href = "index.html";
    })
  },

};

window.loginNext = loginNext;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    loginNext.web3 = new Web3(window.ethereum);
    //metamask方式获取当前接入的用户地址
    if (window.ethereum.selectedAddress == null){
      window.alert("请打开您的MetaMask插件");
      window.location.href="login.html";
    }
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    loginNext.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  loginNext.start();
});

  
  