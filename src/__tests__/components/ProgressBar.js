import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from "../../components/ProgressBar";

describe('ProgressBar', () => {
    it('should be rendered as div element', () => {
        const root = document.createElement('div');
        ReactDOM.render(<ProgressBar/>,root);
        expect(root.childNodes[0].nodeName).toBe('DIV');
    })
});
