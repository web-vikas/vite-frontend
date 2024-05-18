import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import Navigation from './navigation';
import { Provider } from "react-redux";
import store from "./redux/store";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-body-backgroudColor min-h-screen max-w-full overflow-x-hidden relative">
      <Provider store={store}>
        <ToastContainer />
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
