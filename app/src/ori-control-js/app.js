import Web3 from "web3";
//导入json
import userManagementArtifact from "../../../build/contracts/UserManagement.json";
//定义两个值,方便传参

//定义了app
const App = {
    web3: null,
    account: null,//当前激活账户
    um: null, //定义一个um的实例

    //启动时需要的
    start: async function () {
        const { web3 } = this;

        try {
            // get contract instance
            const networkId = await web3.eth.net.getId();
            //要改成自己的网络
            const deployedNetwork = userManagementArtifact.networks[networkId];
            this.um = new web3.eth.Contract(
                userManagementArtifact.abi,
                deployedNetwork.address,//合约地址
            );

            // get accounts
            const accounts = await web3.eth.getAccounts();
            this.account = accounts[0];
            //先刷新一下界面
            console.log(accounts)
            this.getAdmin();

        } catch (error) {
            console.error(error);
        }
    },


    //start函数后还应该有哪些函数呢
    //1.查看admin
    getAdmin: async function () {
        try {
            const { admin } = this.um.methods;
            //获得相应信息
            const adminInfo = await admin().call();
            //更新到页面上
            const element = document.getElementById("admin");
            element.innerHTML = adminInfo.toString();
        } catch (error) {
            console.log(error);
        }
    },
    //2.注册
    register: async function() {
        try{
            const{ register } = this.um.methods;
            //获得输入用户名
            const name = document.getElementById("registerName").value;
            const registeeFee = 1;
            console.log(name,registeeFee);
            await register(name).send({from: this.account, value: registeeFee });
            this.getUser(this.account);
        } catch(error) {
            console.log(error);
        }
    },
    //获得平台所有用户数目
    getUserCount: async function() {

    },

    //展示平台所有用户信息
    displayAllUser: async function () {
    },
    //查看当前用户信息
    displayUserCur: async function() {
        this._displayUserInfo(this.account);
    },

    //根据输入地址查看某用户信息
    displayUserByAddr: async function() {
        const userAddress = document.getElementById("userAddress").value;
        this._displayUserInfo(userAddress);
    },

    _displayUserInfo: async function(address) {
        $("#user").empty();
        // console.log(this.getUser(address));
        try{
            this.getUser(address).
            then(function(userInfo) {
                $("#user").append(`
                    <div class="userInfo">
                        <ul>
                            <li>昵称: ${userInfo.name}</li>
                            <li>序号: ${userInfo.index}</li>
                            <li>发包者声誉: ${userInfo.requesterInfo.reputation}</li>
                            <li>接包者声誉: ${userInfo.wokerInfo.reputation}</li>
                            <li>状态: ${userInfo.wokerInfo.state}</li>
                        </ul>
                    </div>
                `);
            })
        } catch(error) {
            console.log(error);
        }
    },



    getUser: function(userAddress) {
        return this.um.methods.user(userAddress).call();
    }
};

window.App = App;

window.addEventListener("load", function () {
    if (window.ethereum) {
        // use MetaMask's provider
        App.web3 = new Web3(window.ethereum);
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
        App.web3 = new Web3(
            new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
        );
    }

    App.start();
});