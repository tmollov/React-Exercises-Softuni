import React from 'react'

export default function WithAlert(WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <div className="alert">
                    <span className="alert-symbol">&#9888;</span>
                    <WrappedComponent />
                </div>
            );
        }
    };
}