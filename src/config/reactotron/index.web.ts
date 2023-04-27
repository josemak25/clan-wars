import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

import { APP_NAME } from "../../constants";

export const reactotron = Reactotron.configure({ name: APP_NAME })
  .use(reactotronRedux())
  .connect();

console.tron = reactotron.log;
