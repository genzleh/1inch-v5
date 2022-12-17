# Install 1inch-v5
  1. install nodejs
 ```
apt install nodejs
```
  2. install npm
```
apt install npm
```
  3. install git clone & clone repository
```
apt install git
git clone https://github.com/0xMYF/1inch-v5.git
mv 1inch-v5 swap
cd swap

```
  4. install web3 axios & dotenv
```
npm install web3 axios dotenv
```
  5. Pengaturan RPC & Private Key bisa di ubah di file .env isi contoh :
```
RPC_URL=https://polygon-rpc.com
PRIVATE_KEY=xxxxxxxxxxxxxx
```
  6. Jalan kan script dengan perintah :
```
node swap.js
```

* Sudah coba Swap di Jaringan Polygon
