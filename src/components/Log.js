import React from "react";

const Log = ({ log }) => {
  let trContent = [];
  for (let item in log) {
    let tempTr = (
      <tr>
        <td className="text-left">{item}</td>
        <td>
          {log[item] ? (
            <i className="fa fa-check-circle text-success"></i>
          ) : (
            <i className="fa fa-times-circle text-danger"></i>
          )}
        </td>
      </tr>
    );
    trContent.push(tempTr);
  }
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Your result
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table class="table table-striped table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Keywork</th>
                    <th scope="col">Check</th>
                  </tr>
                </thead>
                <tbody>{trContent}</tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Log;
