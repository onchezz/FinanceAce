# FinanceAce
smart contract built in starknet for financing users
  sncast --url http://127.0.0.1:5050/rpc account create --name financer --class-hash 0x195c984a44ae2b8ad5d49f48c0aaa0132c42521dcfc66513530203feca48dd6 --add-profile
curl -d '{"amount":8646000000000, "address":"0x2f9148c6855f1e12db76edb4b0bc359438bb36f50c14b043b5855aa47b72ee3"}' -H "Content-Type: application/json" -X POST http://127.0.0.1:5050/mint