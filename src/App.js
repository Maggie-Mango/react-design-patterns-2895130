import { SplitScreen } from './SplitScreen';

const LeftHandComponet = () => {
  return <h1>Left!</h1>
}

const RightHandComponent = () => {
  return <p>Right!</p>
}

function App() {
  return (
   <SplitScreen
      left={LeftHandComponet}
      right={RightHandComponent}  />
  );
}

export default App;
