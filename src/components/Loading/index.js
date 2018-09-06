import React, { Component } from "react";
import LoadingBar from "react-redux-loading-bar";

import { Container } from "./styles";

class Loading extends Component {
    render() {
        return (
            <Container>
                <LoadingBar
                    style={{
                        backgroundColor: "#37bea9",
                        height: "8px",
                        position: "absolute"
                    }}
                    updateTime={100}
                    maxProgress={100}
                    progressIncrease={10}
                    showFastActions
                />
            </Container>
        );
    }
}

export default Loading;
