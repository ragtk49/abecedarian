import React, {useState, useEffect} from 'react';

function App() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUserData(data.results[0]);
    })
  }, [])

  return (
    <div>
      <h1>Random User Data</h1>
      {userData && (
        <div>
          <p>Name : {userData.name.first}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
