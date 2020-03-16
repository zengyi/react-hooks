import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = count === 0 ? "React-Hooks" : `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
