export default function TabButton({ children }) {
  // inner function (only callable from inside the parent function)
  function handleClick() {}

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
