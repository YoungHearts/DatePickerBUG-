import React from "react";
import { DatePicker } from 'antd';
const { RangePicker, MonthPicker } = DatePicker;
import 'moment/locale/zh-cn';
class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    
  }
  execute = () => {
  };
  render() {
    const {} = this.props;
    const {} = this.state;
    return (
      <div style={{ margin:40 }}>
      从3.8.4升级到3.11.0后出现如下情况，设置了中文，但是个别地方还是英文
      <DatePicker />
      <MonthPicker />
      <a href='https://github.com/ant-design/ant-design/issues/13462'>问题地址</a>
      </div>
    );
  }
}

export default Test;
