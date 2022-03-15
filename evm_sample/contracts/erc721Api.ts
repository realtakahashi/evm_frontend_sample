
import Erc721_sample_construct from "./construct/Erc721_sample";
import { ethers } from "ethers";
import Web3 from "web3";

declare let window: any;

export const deployERC721Contract = async ():Promise<string> => {
    const contractConstract = Erc721_sample_construct;
    let erc721Address = ''
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const factory = new ethers.ContractFactory(
        contractConstract.abi,
        contractConstract.bytecode,
        signer
      )
      await factory
        .deploy(
            "test721",
            "THS",
            Web3.utils.toWei("2.0"),
            "https://test.com"
            )
        .then((res: any) => {
          console.log(res)
          erc721Address = res.address
          return erc721Address
        })
        .catch((err: any) => {
          console.log(err)
          if (err.data.message!=="undefined"){
            alert(err.data.message)
          }
          else{
              alert("deploy transaction is failed")
          }
        })
    }
    return erc721Address
  }

  