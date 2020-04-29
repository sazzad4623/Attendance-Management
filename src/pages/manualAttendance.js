import React from "react";
import ManualAttedance from "../components/manualAttendance.component";
import Submit from "../components/submit.component";
import { getManualAttendance } from "../api/attendanceApi";

class Manual extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const data = await getManualAttendance();
    this.setState({ data: data });
    console.log(data);
  }
  render() {
    return (
      <div>
        <ManualAttedance data={this.state.data} />
        <Submit />
      </div>
    );
  }
}

export default Manual;
