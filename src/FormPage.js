import React, {useState} from "react";

function FormPage(props) {
    const [state] = useState(props.state);
  
    return (
        <tr>
          <td>{state.name}</td>
        </tr>
      );
  }
export default FormPage;