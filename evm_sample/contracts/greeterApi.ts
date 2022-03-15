import GreeterConstruct from "./construct/Greeter";
import { ethers } from "ethers";
import Web3 from "web3";

declare let window: any;

export const deployGreeterContract = async (): Promise<string> => {
  const contractConstract = GreeterConstruct;
  let contractAddress = "";
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factory = new ethers.ContractFactory(
      contractConstract.abi,
      contractConstract.bytecode,
      signer
    );
    await factory
      .deploy("Hello Shin Takahashi")
      .then((res: any) => {
        contractAddress = res.address;
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
        if (err.message !== "undefined") {
          alert(err.message);
        } else {
          alert("deploy transaction is failed");
        }
      });
  }
  return contractAddress;
};

export const callSetGreetFunction = async (
  contractAddress: string,
  greet: string
) => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
      contractAddress,
      GreeterConstruct.abi,
      signer
    );

    contract
      .setGreeting(greet)
      .then((d: any) => {
        console.log(d);
      })
      .catch((err: any) => {
        console.log(err);
        if (err.message !== "undefined") {
          alert(err.message);
        } else {
          alert("transaction is failed");
        }
      });
  }
};

export const callGetGreetFunction = async (
  contractAddress: string
): Promise<string> => {
  let result = "";
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
      contractAddress,
      GreeterConstruct.abi,
      signer
    );

    await contract
      .greet()
      .then((d: any) => {
        console.log(d);
        result = d;
      })
      .catch((err: any) => {
        console.log(err);
        if (err.message !== "undefined") {
          alert(err.message);
        } else {
          alert("transaction is failed");
        }
      });
  }
  return result;
};
