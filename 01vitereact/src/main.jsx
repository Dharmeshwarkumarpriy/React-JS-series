import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>MyApp</h1>
      <h1>Hello, React!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

const reactElement={
  type: 'a',
  props:{
      href: "https://google.com",
      target: "_blank"
  },
  Children: 'Click me to visit google'
}

const anotherElement=(
  <a href="https://google.com" target="_blank">visit google </a>
);


// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click me to visit google'
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {MyApp()} {/* Call the MyApp function to render its content.
     we can also use <MyApp /> instead of MyApp() to render the component. */}
    
    {anotherElement}
{/*     
    {reactElement} */}
  </StrictMode>,
)
