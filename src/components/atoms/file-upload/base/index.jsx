import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../../input/base';


const FileUpload = (props) => {
    const {
        id,
        className,
        text,
        inputId,
        accepts,
        fileType,
        ...rest
    } = props;

    var classNameList = classNames(
        'xyz-file-upload',
        {},
        className,
    );

    return (
        <div id={id} className={classNameList}>
            <div className="xyz-file-upload__dropzone">
                <Input {...rest} className="xyz-file-upload__input" id={inputId} type="file" accept={accepts} ref={props.ref} />
                <label
                    className="xyz-file-upload__main"
                    htmlFor={inputId}
                    id={inputId  + "__file-upload-label"}
                >
                    <span className="xyz-button xyz-button_neutral xyz-button_outline xyz-file-upload__button">
                        Upload {fileType}
                    </span>
                    <span className="xyz-file-upload__drop">
                        or Drop {fileType}
                    </span>
                </label>
            </div>
        </div>
    );
};

FileUpload.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    inputId: PropTypes.string,
    accepts: PropTypes.string,
    fileType: PropTypes.string
};

FileUpload.defaultProps = {
    fileType: 'File'
};

export default FileUpload;
