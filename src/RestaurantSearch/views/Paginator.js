import React, {useState, useEffect} from "react";

export default function Paginator(props)
{
    //Interactions
    const onClickFirst = () =>
    {
        props.goToPageCallback(1)
    }

    const onClickPrevious = () =>
    {
        if (props.currentPage > 1)
        {
            props.goToPageCallback(props.currentPage - 1)
        }
    }

    const onClickN = (pageN) =>
    {
        if (canClickPageN(pageN))
        {
            props.goToPageCallback(pageN);
        }
    }

    const onClickEllipsis = () =>
    {
        if (canClickPageN(props.currentPage + 4))
        {
            props.goToPageCallback(props.currentPage + 4)
        }
    }

    const onClickNext = () =>
    {
        if (canClickPageN(props.currentPage + 1))
        {
            props.goToPageCallback(props.currentPage + 1)
        }
    }

    const onClickLast = () =>
    {
        props.goToPageCallback(Math.ceil(props.data.length / props.config.numResultsPerPage))
    }

    const canClickPageN = (pageN) =>
    {
        return props.data.length >= ((pageN - 1) * props.config.numResultsPerPage);
    }

    return (
        <div className='paginator'>
            <table className='pagination-table'>
                <tbody>
                    <tr>
                        <td onClick={onClickFirst}>First</td>
                        <td onClick={onClickPrevious}>Prev</td>
                        <td className={"current"}>
                            {props.currentPage}
                        </td>
                        {
                            canClickPageN(props.currentPage + 1) && <td onClick={() => onClickN(props.currentPage + 1)}> {props.currentPage + 1} </td>
                        }
                        {
                            canClickPageN(props.currentPage + 2) && <td onClick={() => onClickN(props.currentPage + 2)}> {props.currentPage + 2} </td>
                        }
                        {
                            canClickPageN(props.currentPage + 3) && <td onClick={() => onClickN(props.currentPage + 3)}> {props.currentPage + 3} </td>
                        }
                        {
                            canClickPageN(props.currentPage + 4) && <td onClick={onClickEllipsis}> ... </td>
                        }
                        <td onClick={onClickNext}>Next</td>
                        <td onClick={onClickLast}>Last</td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
