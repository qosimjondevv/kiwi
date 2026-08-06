import { ChevronDown, Plus } from "lucide-react";
import "./SearchPanel.scss";
import { useState } from "react";
export const SearchPanel = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="searchPanel">
      <div className="container rup">
        <div className=" searchPanel-inner">
          <button className="dropdown category">
            Любая категория <ChevronDown size={16} />
          </button>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Что будем искать ?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <button className="dropdown region">
            По всей Узбекистану <ChevronDown size={16} />
          </button>

          <button className="findBtn">Найти</button>
        </div>

        <button className="addBtn">
          <div className="radio">
            <Plus size={18} />
          </div>
          Добавить объявления
        </button>
      </div>
    </div>
  );
};
