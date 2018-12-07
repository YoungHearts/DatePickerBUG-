import RenderAuthorized from '../components/Authorized';
import { message} from "antd";
import { getAuthority } from './authority';
let Authorized = RenderAuthorized('admin'); // eslint-disable-line
// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized('admin');
};

export { reloadAuthorized };
export default Authorized;
