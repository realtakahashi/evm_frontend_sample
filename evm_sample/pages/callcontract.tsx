import { useState } from "react";
import {
  deployGreeterContract,
  callSetGreetFunction,
  callGetGreetFunction,
} from "../contracts/greeterApi";

const CallContract = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [greet, setGreet] = useState("");
  const [greetMessage, setGreetMessage] = useState("");
  const _deployContract = async () => {
    setContractAddress(await deployGreeterContract());
  };

  const _onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGreet(event.target.value);
  };

  const _setGreet = async () => {
    await callSetGreetFunction(contractAddress, greet);
  };

  const _getGreet = async () => {
    setGreetMessage(await callGetGreetFunction(contractAddress));
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-3xl">Constract Call Ssample</h1>
      </div>
      <div className="p-5 flex justify-center">
        <button
          className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500"
          onClick={_deployContract}
        >
          deploy
        </button>
      </div>
      <div className="p-2 flex justify-center">
        contract address is : {contractAddress}
      </div>
      <div className="p-5 flex justify-center">
        <input
          className="px-2 py-1 bg-white border-black border-2 text-black font-semibold rounded hover:bg-gray-500"
          onChange={_onChangeInput}
        ></input>
        <div className="px-3">
          <button
            className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500"
            onClick={_setGreet}
          >
            setGreet
          </button>
        </div>
      </div>
      <div className="p-5 flex justify-center">
        <button
          className="px-2 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500"
          onClick={_getGreet}
        >
          getGreet
        </button>
      </div>
      <div className="p-2 flex justify-center">Greet is : {greetMessage}</div>
    </>
  );
};

export default CallContract;
