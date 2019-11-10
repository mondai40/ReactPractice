import React from "react";

function ClassnameComp({isCurrentPage, isThemeDarak}) {
    return(
        <div className={cx("Header"),{
            "Header-active": isCurrentPage,
            "Header-dark": isThemeDarak
        }}>
            Title
        </div>
    );
}

export default ClassnameComp;