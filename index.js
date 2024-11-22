export default (parent, newNode, referenceNode) => {
  try { return parent.moveBefore(newNode, referenceNode) }
  catch (YOLO) { return parent.insertBefore(newNode, referenceNode) }
};
