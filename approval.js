const Web3 = require('web3')
const axios = require('axios')
require('dotenv').config()

const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const web3 = new Web3(RPC_URL)
const wallet = web3.eth.accounts.wallet.add(PRIVATE_KEY)

async function approve(tokenAddress, tokenAmount){
    try{
        const response = await axios.get(`https://api.1inch.io/v5.0/137/approve/transaction?tokenAddress=${tokenAddress}&amount=${tokenAmount}`)
        if(response.data){
            data = response.data
            data.gas = 1000000
            data.from = wallet.address
            tx = await web3.eth.sendTransaction(data)
            if(tx.status){
                console.log("Approval Berhasil !!!")
            }else{
                console.log("Approval Gagal !!!")
                console.log(tx)
            }
        }
    }catch(err){
        console.log("could not approve token")
        console.log(err)
    }
}

async function swapper(fromTokenAddress, fromTokenAmount){
    try{
        if(fromTokenAddress!='0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'){
            await approve(fromTokenAddress, fromTokenAmount)

        }
    }catch(err){
        console.log("swapper encountered an error below")
        console.log(err)
    }

}
async function main(){

    fromTokenAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F' // USDT Contract Address sesuaikan
    fromTokenAmount = '115792089237316195423570985008687907853269984665640564039457584007913129639935' 

    await swapper(fromTokenAddress, fromTokenAmount)
}

main()
