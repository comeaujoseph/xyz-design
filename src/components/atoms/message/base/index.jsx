import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconWarning from '../../../../shared/svg-icons/icon-warning';


const Message = (props) => {
    const {
        id,
        className,
        position,
        isActive,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-message',
        {
            'xyz-message_active': isActive
        },
        'xyz-message_' + position,
        className,
    );

    return (
        <div {...rest} id={id} className={classNameList}>
            <div className="xyz-message__wrapper">
                <span class="xyz-message-content">Copied to clipboard</span>
                {/* <span class="xyz-message-title">Visualise your plan</span>
                <span class="xyz-message-body">
                    <span>
                        A simple tool for teams to get aligned on what's next.
                        <a>Try it free →</a>
                        <a>Learn more</a>
                    </span>
                </span>
                <span class="xyz-message-action">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMTJweCIgdmlld0JveD0iMCAwIDEyIDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzOS4xICgzMTcyMCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+SWNvbiBbWF08L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQWxwaGEtcmVhZHktYXBwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj4KICAgICAgICA8ZyBpZD0iTWlsZXN0b25lLWhvdmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTY1LjAwMDAwMCwgLTY1Mi4wMDAwMDApIiBzdHJva2U9IiM5QUExQUEiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MTAuMDAwMDAwLCA2MzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbi1bWF0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1Ny4wMDAwMDAsIDE1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDcuOTE5NTk1OTUsNy45MTk1OTU5NSIgaWQ9IkxpbmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEw3LjkxOTU5NTk1LDcuOTE5NTk1OTUiIGlkPSJMaW5lLUNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy45NTk3OTgsIDMuOTU5Nzk4KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zLjk1OTc5OCwgLTMuOTU5Nzk4KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" data-reactid="94" />
                </span> */}
            </div>
        </div>
    );
};

Message.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    position: PropTypes.oneOf([
        'left', 'right', 'bottom'
    ]),
    isActive: PropTypes.bool
};

Message.defaultProps = {
    position: 'right'
};

export default Message;
