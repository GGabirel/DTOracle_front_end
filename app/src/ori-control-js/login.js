import Web3 from "web3";

const loginPage = {
  web3: null,
  account: null,
  voting: null,

  start: async function() {
    const { web3 } = this;

    try {

      // get accounts
      this.account = window.ethereum.selectedAddress;
      

     } 
    catch (error) {
       console.error("Could not connect to contract or chain.");
     }
  },

  
};

window.loginPage = loginPage;

document.getElementById("login").addEventListener("click", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    loginPage.web3 = new Web3(window.ethereum);
    // get permission to access accounts
    window.ethereum.enable();
    //metamask方式获取当前接入的用户地址
    if (window.ethereum.selectedAddress){
      window.location.href="login-next.html";
    } else {
      window.alert("请打开您的MetaMask插件");
      window.location.reload();
    }
    
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    loginPage.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    );
  }

  //App.start();
});
