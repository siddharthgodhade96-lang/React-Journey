import { useSelector } from "react-redux";

export default function UserInfo() {
    const data =useSelector((state) => state.user);
  return (
    <div>
      <h1>User Name: {data.name}</h1>
      <h1>User Balance: {data.balance}</h1>
    </div>
  )
}
