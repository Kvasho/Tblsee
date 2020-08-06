import React from 'react';

const PageTitle = (props) => {
    return(
    <h1 className={props.className + ' ' + 'page-title'}> { props.title } </h1>
    )
}

export default PageTitle;