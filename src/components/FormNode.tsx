// this is each node on the DAG graph

export default function FormNode({
  nodeID,
  setCurrentNode,
}: {
  nodeID: string;
  setCurrentNode: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div style={{ cursor: "pointer" }} onClick={() => setCurrentNode(nodeID)}>
      <h1>Node {nodeID}</h1>
    </div>
  );
}
