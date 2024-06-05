import { useRef, useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";

export default function HomeFooter(){
    return (
      <div style={{
        background: "#007bff"
      }}>
          <div class="center py-16" style={{
              margin: "0 100px",
            }}>
            <div className="row justify-content-between align-items-center">
                <div className="col-6">  <p className="text-white">
                  &copy; <FormattedMessage id="homepage.footer-infor" />
                </p></div>
                <div className="col-4"></div>
            </div>
          </div>
      </div>
    );
}

