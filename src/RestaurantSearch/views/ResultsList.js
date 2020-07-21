import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

import ListEntry from "./ListEntry";
import ResultQuery from "../models/ResultQuery";
import Paginator from './Paginator'

export default function ResultsList(props) {

    //State
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(startIndex + props.config.numResultsPerPage);
    const [clickedEntry, setClickedEntry] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);

    //Callbacks
    const setViewableList = (page) =>
    {
        let sIndex = (page - 1) * props.config.numResultsPerPage
        setStartIndex(sIndex);
        let eIndex = page * props.config.numResultsPerPage;
        if (eIndex >= props.data.length)
        {
            eIndex = props.data.length - 1
        }
        setEndIndex(eIndex);


        console.log(page);
        console.log(sIndex);
        console.log(eIndex);
    }
    const goToPage = (page) =>
    {
        setCurrentPage(page);
        setViewableList(page);
    }

    const clickEntry = (result_query) => {
        setClickedEntry(result_query.query.id)
        props.callback(result_query)
    }


    return (
        <div className="results-list-container">
            <div className='results-list'>
                {props.data?.slice(startIndex, endIndex).map((result, index) => (
                    <ListEntry clickedCallback={clickEntry} isClicked={clickedEntry === result.query.id}  location={props.location} key={uuidv4()} query={result}> </ListEntry>
                ))}
            </div>
            {props.data.length > 0 && <div className='paginator-container'>
                <Paginator currentPage={currentPage} goToPageCallback={goToPage} data={props.data} config={props.config}/>
            </div>}
        </div>
    );
}