// React.memo is a higher-order component (HOC) that memoizes a functional 
// component — meaning it will only re-render if its props change.


// ⚠️ Limitations of React.memo
// Limitation	Explanation
// 🟡 Shallow comparison only	Doesn’t deep-compare nested objects or arrays
// 🟡 Can cause bugs	Skipping re-renders when the UI actually needs updating
// 🟡 Overhead	Adds memory and logic cost — don’t use blindly

// ✅ When to Use React.memo
// Use Case	✅ Recommended?
// Child re-renders too often	✅ Yes
// Props change infrequently	✅ Yes
// Passing stable props (e.g., strings, numbers)	✅ Yes
// Every component, "just in case"	❌ No









const Child = React.memo(({ name }) => {
  console.log('👶 Child rendered');
  return <p>Hello, {name}</p>;
});



function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Click Me</button>
      <Child name="React" />
    </>
  );
}



