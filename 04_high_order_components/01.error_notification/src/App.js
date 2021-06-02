import Main from './Main';
import WithNotification from './WithNotification';

function App() {
  return (
    <div className="App">
      <WithNotification>
        <Main />
      </WithNotification>
    </div>
  );
}

export default App;
