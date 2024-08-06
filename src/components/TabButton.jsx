export default function TabButton({ children }) {
  // inner function (only callable from inside the parent function)
  function handleClick() {
    console.log('Hello World');
  }

  return (
    <li>
        {/* parentheses are optional: handleClick() */}
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}