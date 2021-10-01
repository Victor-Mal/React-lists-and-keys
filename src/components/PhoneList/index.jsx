function PhoneList(props) {
  const phoneDirectory = [
    "88005552353",
    "09812334544",
    "678446556464",
    "515164648",
  ];
  const phoneListItems = phoneDirectory.map((number, index) => {
    const elemJSX = <li key={index}> {number} </li>;
    return elemJSX;
  });
  console.log(phoneListItems);
  return (
    <div>
      <h4>Список контактов</h4>
      <ul>{phoneListItems}</ul>
    </div>
  );
}
export default PhoneList;
