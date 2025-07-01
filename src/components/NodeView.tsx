import type { Edge } from "../types";

export default function NodeView({
  mappedNodes,
  setCurrentNode,
}: {
  mappedNodes: Edge[];
  setCurrentNode: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <button onClick={() => setCurrentNode("")}>Go back</button>
      <h2>
        There are {mappedNodes.length} forms that are attached to this node
      </h2>
    </div>
  );
}
