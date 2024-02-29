import Contact from "./assets/Contact";
import Hello from "./assets/Hello";

function App() {
  console.log('App component');
  const helloData =[
    {name: "Pattharanan", message: "Good morning"},
    {name: "Hulk", message: "Good afternoon"},
    {name: "Thor", message: "Good evening"},
  ]
  return (
      <div>
        {helloData.map((data, index) => (
          <Hello key = {index} name = {data.name} message = {data.message}/>
        ))}

        <Contact phone = "1234567890" email = "Pattharanan@gmail.com"/>
      </div>
  )
}

export default App