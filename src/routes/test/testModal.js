import { Component } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Icon,
  message,
  Row,
  Col,
  TreeSelect,
  DatePicker,
  InputNumber
} from "antd";
const { TextArea } = Input;
const SHOW_CHILD = TreeSelect.SHOW_CHILD;
const Option = Select.Option;
const InputGroup = Input.Group;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
// import styles from "../../Educational/Teacher.less";
// import moment from "moment";
// import NewUpload from "components/NewUpload";
// import RangeTimePicker from "components/RangeTimePicker";
// import { query } from "../../../services/api";
// import Pubsub from "../../../utils/pubsub";
// import { ActivityType, ActivityWay, ActivityTime } from "../../../utils/datas";
// import { UPURL } from "../../../services/api";
// import { getAuthority } from "../../../utils/authority";
// import ItemGroup from "./ItemGroup";


class ACourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record: {}, //适用对象
    };
  }

  componentDidMount() {
    this.pusub_token = Pubsub.subscribe(
      "ACourseModal",
      (type, values = {}) => {
          this.setState({
            record: values.record,
          });
        this.showModelHandler();
      }
    );
  }
  componentWillUnmount() {
    this.pusub_token && Pubsub.unsubscribe(this.pusub_token);
  }
  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true
    });
    //初始化时候加图片
  };
  hideModelHandler = () => {
    this.setState({
      visible: false
    });
  };
  callback = (type, data) => {
    //coverUrl封面，picUrl图片地址
    this.setState({ [type]: data });
  };
  changeType = (type, e) => {
    this.setState({ [type]: e });
  };
  render() {
    const {
      children,
      isCreate,
      columns,
      squareList = [],
      subtreeList = [],
      orgList = [],
      form
    } = this.props;
    const { getFieldDecorator } = form;
    const { coverUrl, picUrl, record, fullMoney, type } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 }
    };
    const formItemColLayout = { xl: { span: 12 } };
    return (
      <span>
        <Modal
          destroyOnClose
          title="操作"
          style={{ top: 20 }}
          width="60%"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >阿斯达盛大撒大所多
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ACourseModal);
