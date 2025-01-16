import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  { userName: "midudev", name: "Midudev", isFollowing: true },
  { userName: "dego92", name: "Diego", isFollowing: false },
  { userName: "maymartinez", name: "Mayra", isFollowing: true },
  { userName: "diegochiapa", name: "Diego", isFollowing: false },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          formatUserName={(userName) => `@${userName}`}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
        />
      ))}
    </section>
  );
}
