import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
      <div>
          <Header course='React' price={500} items={['Sun ', 'Moon']}/>
          <Header course='QA' price={600} items={['Sun ', 'Moon']} />
          <Header course='SQL' price={700} items={['Sun ', 'Moon']} />
          <Header course='Python' price={800} items={['Sun ', 'Moon']} />
       Hello PASV
          <Menu items={['Sunny', 'Rainy']} />
    </div>
  );
}

export default App;
