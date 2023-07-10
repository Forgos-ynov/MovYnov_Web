import "./pagination.css"
import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Pagination(props) {
    const conditionDisplayPagination = props.elementNumber > props.elementByPage
    const pageOnPaginate = Math.ceil(props.elementNumber / props.elementByPage);
    const [searchParams, setSearchParams] = useSearchParams();
    const [paginateNumber, setPaginateNumber] = useState()

    useEffect(() => {
        const paginateParam = searchParams.get("paginate");

        if (paginateParam == null) {
            setPaginateNumber(1);
        } else {
            setPaginateNumber(parseInt(paginateParam));
        }
    }, []);

    const setQueryParam = (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        setSearchParams(params.toString());
    };

    const handleClick = (e, numberPageToGo) => {
        e.preventDefault();
        setQueryParam('paginate', numberPageToGo);
    };

    const _buttonPagesNavigation = () => {
        const buttons = [];
        for (let i = 1; i <= pageOnPaginate; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`paginate-button paginationButton ${paginateNumber === i ? 'active' : ''}`}
                    onClick={(e) => handleClick(e, i)}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        conditionDisplayPagination && <div className={"pagination"}>
            <div className={"buttonsWrapperPaginate"}>
                <button className={"paginate-button paginationMoveButtonPre"}
                        onClick={(e) => handleClick(e, paginateNumber > 1 ? paginateNumber - 1 : 1)}>Pre</button>
                {_buttonPagesNavigation()}
                <button className={"paginate-button paginationMoveButtonSuiv"}
                        onClick={(e) => handleClick(e, paginateNumber < pageOnPaginate ? paginateNumber + 1 : paginateNumber)}>
                    Suiv</button>
            </div>
        </div>
    );
}

export default Pagination