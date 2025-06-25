//     useContext is a React Hook that lets you access context 
// data in a functional component — avoiding the need to pass 
// props through every level of the tree.

// It’s built on top of the React Context API.

// Context updates re-render all components using it

// Use for global or app-level state, not per-component state

// If performance matters, combine it with useMemo, 
// React.memo, or even libraries like Zustand, Jotai, etc.

// 📌 Why use useContext?

//     ✅ Avoid prop drilling

//     ✅ Share global values like:

//         Theme (dark/light)

//         Auth (user info, isLoggedIn)

//         Language (i18n)

//         Any app-wide settings