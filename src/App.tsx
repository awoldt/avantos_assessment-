// this is the "mock" api data that is stored that our react endpoint would hit
// im not sure how to hit the "action-blueprint-graph-get" endpoint as i keep getting 401s

import { useMemo, useState } from "react";
import FormNode from "./components/FormNode";
import mockData from "./graph.json";
import type { MockApiResponse } from "./types";
import NodeView from "./components/NodeView";
const data = mockData as MockApiResponse;

function App() {
  const [currentNode, setCurrentNode] = useState<string>("");

  const mappedNodes = useMemo(() => {
    if (currentNode === "") return;

    return data.edges.filter((x) => x.target === currentNode);
  }, [currentNode]);

  return (
    <div>
      {currentNode !== "" && mappedNodes && (
        <NodeView mappedNodes={mappedNodes} setCurrentNode={setCurrentNode} />
      )}

      {currentNode === "" && (
        <>
          <div>
            <h2>There are {data.forms.length} forms</h2>
          </div>
          <div>
            <h2>Nodes</h2>
            <ul>
              {data.nodes.map((x) => {
                return <li>{x.id}</li>;
              })}
            </ul>
          </div>

          <div>
            <h2>Edges</h2>
            <ul>
              {data.edges.map((x) => {
                return (
                  <li>
                    source ({x.source}) =&gt; taget ({x.target})
                  </li>
                );
              })}
            </ul>
          </div>

          <hr />
          <p>Click the nodes below</p>
          {data.nodes.map((x) => {
            return (
              <FormNode nodeID={String(x.id)} setCurrentNode={setCurrentNode} />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
