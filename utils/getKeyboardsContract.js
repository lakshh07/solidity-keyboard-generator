import { ethers } from "ethers";
import { KeyboardAddress } from "../contract_address.json";
import Keyboard from "../artifacts/contracts/Keyboard.sol/Keyboards.json";

const contractAddress = KeyboardAddress;
const contractABI = Keyboard.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
