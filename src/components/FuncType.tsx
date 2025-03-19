
const FuncType = () => {

 const user = {
    name : "Nguyen Van A",
    age : 20
 }
 const printInfo = (name : string, age: number): string => {
    return name + " " + age;
 }

 printInfo(user.name, user.age);

  return (
    <div>FuncType</div>
  )
}

export default FuncType