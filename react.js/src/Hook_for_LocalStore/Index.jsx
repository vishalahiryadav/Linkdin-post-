import UseLocalStorage from './UseLocalStorage';

function Index() {
  const [name, setName] = UseLocalStorage('name', 'vishal'); //key and initial value
  return (
    <>
      <p>Hook for LocalStorage</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <b>Name:{name}</b>
    </>
  );
}

export default Index;
