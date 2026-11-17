

export default function PersonalInfo(props) {
  return (
    <div>
      <h3>Personal Information</h3>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email: {props.email}</p>
     <p>Favorite Color: {props.favColor}</p>
    </div>
  )
}
