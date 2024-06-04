import { Link, useParams } from "react-router-dom";
import "./PaginationList.css";

export const PaginationList = ({ currentPage, setCurrentPage }) => {
  const numbers = [];

  for (let i = 2; i < 42; i++) {
    numbers.push(i);
  }

  const onSpecificPage = (page) => {
    setCurrentPage(page);
    console.log("asfdasdasd");
  };

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const { id } = useParams();

  return (
    <>
      <div className="pagination">
        <ul className="page-list">
          <Link
            to={`/characters/${parseInt(id) - 1} `}
            onClick={() => onChangePage(parseInt(id) - 1)}
            className={id === "1" || !id ? "is-disabled" : ""}
          >
            <ol className="nPage">&#8249;</ol>
          </Link>
          <Link to={`/characters/1`} onClick={() => onSpecificPage(1)}>
            <ol className="nPage">1</ol>
          </Link>
          {parseInt(id) > 3 && parseInt(id) < 40 ? (
            <>
              ...
              {numbers
                .map((noPage) => (
                  <Link
                    key={noPage}
                    to={`/characters/${noPage}`}
                    onClick={() => onSpecificPage(noPage)}
                  >
                    <ol className="nPage">{noPage}</ol>
                  </Link>
                ))
                .slice(parseInt(id) - 3, parseInt(id))}
              ...
            </>
          ) : parseInt(id) < 4 || !id ? (
            <>
              {numbers
                .map((noPage) => (
                  <Link
                    key={noPage}
                    to={`/characters/${noPage}`}
                    onClick={() => onSpecificPage(noPage)}
                  >
                    <ol className="nPage">{noPage}</ol>
                  </Link>
                ))
                .slice(0, 3)}
              ...
            </>
          ) : (
            <>
              ...
              {numbers
                .map((noPage) => (
                  <Link
                    key={noPage}
                    to={`/characters/${noPage}`}
                    onClick={() => onSpecificPage(noPage)}
                  >
                    <ol className="nPage">{noPage}</ol>
                  </Link>
                ))
                .slice(37, 40)}
            </>
          )}

          <Link to={`/characters/42`} onClick={() => onSpecificPage(42)}>
            <ol className="nPage">42</ol>
          </Link>
          <Link
            to={`/characters/${parseInt(id) + 1 || 2} `}
            onClick={() => onChangePage(parseInt(id) + 1 || 2)}
            className={id === "42" ? "is-disabled" : ""}
          >
            <ol className="nPage">&#8250;</ol>
          </Link>
        </ul>
      </div>
    </>
  );
};
