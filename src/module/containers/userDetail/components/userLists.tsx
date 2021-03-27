import React from "react";

const CardsListItem: React.FC<any> = ({ styleName, data }) => {
    const { email, phoneNumber, businessName, businessContactName, businessBio } = data;
    return (
        <div className={`gx-user-list ${styleName}`}>
            <img alt="..." src={'https://via.placeholder.com/150x150'} className="gx-avatar-img gx-border-0" />
            <div className="gx-description">
                <div className="gx-flex-row">
                    <h4>Business Contact Detail: {businessContactName}</h4>
                    <span className="gx-d-inline-block gx-toolbar-separator">&nbsp;</span>
                    <span>Business Name: {businessName}</span>
                </div>
                <p className="gx-text-grey gx-mb-2">Business BIO: {businessBio}</p>
                <p>
                    <span className="gx-mr-3">Email Id: {email}<span className="gx-text-grey"></span></span>
                    <span className="gx-mr-3">Mobile No:{phoneNumber} <span className="gx-text-grey"></span></span>
                </p>
            </div>
        </div>
    );
};

export default CardsListItem;