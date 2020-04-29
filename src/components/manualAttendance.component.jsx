import React from "react";

class ManualAttendance extends React.Component {
  render() {
    return (
      <div>
        <table align="center" rowSpan="20px" padding="13px" border="1px">
          <tbody>
            <tr>
              <th>ROLL NO</th>
              <th>Name</th>
              <th>RFID</th>
              <th>STATUS</th>
              <th>TIME</th>
            </tr>
            {this.props.data.map((data1) => (
              <tr>
                <td>{data1.user__id}</td>
                <td>{data1.rfid_user_name}</td>
                <td>{data1.rfid_no}</td>
                {data1.mark === 1 ? (
                  <td>
                    <label className="container">
                      <input type="checkbox" checked />
                    </label>
                  </td>
                ) : (
                  <td>
                    <label className="container">
                      <input type="checkbox" />
                    </label>
                  </td>
                )}

                <td>{data1.inTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ManualAttendance;
