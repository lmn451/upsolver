import React, { useState } from "react";

const Node = ({ name, subNodes, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <div onClick={() => setIsOpen((x) => !x)}>{name}</div>
      {subNodes.length && isOpen ? (
        <ul>
          {subNodes.map((node) => (
            <Node
              depth={++depth}
              key={node.name}
              name={node.name}
              subNodes={node.children}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default Node;
