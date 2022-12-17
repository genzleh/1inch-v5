const Web3 = require('web3')
const axios = require('axios')
require('dotenv').config()

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const web3 = new Web3(RPC_URL)
const wallet = web3.eth.accounts.wallet.add(PRIVATE_KEY)

async function swapper(fromTokenAddress, toTokenAddress, fromTokenAmount){
    try{
        const response = await axios.get(`https://api.1inch.io/v5.0/137/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${fromTokenAmount}&fromAddress=${wallet.address}&slippage=0.1&disableEstimate=true`)
        if(response.data){
            data = response.data
            data.tx.gas = 1000000
            tx = await web3.eth.sendTransaction(data.tx)
            if(tx.status){
                console.log("Swap Berhasil !!!")
            }
        }
    }catch(err){
        console.log("swapper encountered an error below")
        console.log(err)
    }

}
async function main(){
    fromTokenAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F' //Jual USDT
    toTokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' // ke USDC
    fromTokenAmount = '100000' // 100000 = $0.1 USD ganti saldo sesuai yang mau di swap

    await swapper(fromTokenAddress, toTokenAddress, fromTokenAmount)
}

main()
