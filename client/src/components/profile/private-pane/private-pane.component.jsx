import React from "react";
import { Container,Divider,Icon } from "semantic-ui-react";
import "./private-pane.styles.scss";
const PrivatePane = () => (
  <div style={{marginTop:20}}>
    <Container textAlign="center" className="private-container">
          <Divider horizontal><Icon name="lock" style={{fontSize:40}}/>
          </Divider><br/>
          <span style={{fontSize:40}}>THIS IS PRIVATE ACCOUNT</span><br/><br/>
          <span style={{fontSize:20}}>Follow this account to see thier photos</span>
    </Container>
  </div>
);
export default PrivatePane;
