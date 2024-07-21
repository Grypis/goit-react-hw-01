import Section from "./components/Section/Section";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./db/userData.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";

const App = () => {
  return (
    <>
      <Section title={"Social network profile"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={"Friend list"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"Transaction history"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};
export default App;
