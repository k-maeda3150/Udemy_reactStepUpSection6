import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <Router />
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
