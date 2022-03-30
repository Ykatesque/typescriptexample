import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./styles.css";

const api = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const api2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function App() {
  const [users, setUsers] = useState(api);

  return (
    <div className="App">
      <main className="Layout">
        <nav className="Nav"></nav>
        <div className="Content">
          <div className="Swipe">
            {users?.length &&
              users.map((user) => (
                <TinderCard>
                  <div className="Card" key={user}>
                    {user}
                  </div>
                </TinderCard>
              ))}
            {/* <div className="Controls"></div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
